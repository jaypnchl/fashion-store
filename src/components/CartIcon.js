import { ReactComponent as ShoppingIcon } from "./../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../redux/cart/CartAction";
import { selectCartItemsCount } from "../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div
      className="flex relative justify-center items-center cursor-pointer"
      onClick={toggleCartHidden}
    >
      <ShoppingIcon className="h-7 w-7 sm:h-9 sm:w-9" />
      <span className="absolute top-[8px] text-sm font-semibold sm:top-[13px] ">
        {" "}
        {itemCount}{" "}
      </span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
