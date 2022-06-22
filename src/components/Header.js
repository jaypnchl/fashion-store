import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/storefront.svg";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";

function Header({ currentUser }) {
  return (
    <div className="flex justify-between py-6 items-center">
      <Link to="/">
        <Logo />
      </Link>
      <div className="space-x-6 text-xl">
        <Link to="/shop">SHOP</Link>
        <Link to="/shop">CONTACT</Link>
        {currentUser ? (
          <Link to="/signin" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
