import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/storefront.svg";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

function Header({ currentUser, hidden }) {
  return (
    <div className="flex justify-between py-6 items-center ">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center space-x-6 text-xl">
        <Link to="/shop">SHOP</Link>
        <Link to="/shop">CONTACT</Link>
        {currentUser ? (
          <Link to="/signin" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
