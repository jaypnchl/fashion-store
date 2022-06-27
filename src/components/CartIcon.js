import { ReactComponent as ShoppingIcon } from "./../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../redux/cart/CartAction";
import { selectCartItemsCount } from "../redux/cart/CartSelector";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div
      className="flex relative justify-center items-center cursor-pointer"
      onClick={toggleCartHidden}
    >
      <ShoppingIcon className="h-9 w-9" />
      <span className="absolute text-sm font-semibold top-[13px]">
        {" "}
        {itemCount}{" "}
      </span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
