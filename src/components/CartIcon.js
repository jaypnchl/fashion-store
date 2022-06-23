import { ReactComponent as ShoppingIcon } from "./../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../redux/cart/CartAction";

function CartIcon({ toggleCartHidden }) {
  return (
    <div
      className="flex relative justify-center items-center cursor-pointer"
      onClick={toggleCartHidden}
    >
      <ShoppingIcon className="h-9 w-9" />
      <span className="absolute mt-2"> 0 </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
