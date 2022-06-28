import CustomButton from "./CustomButton";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../redux/cart/CartAction";

function CartDropdown({ cartItems, dispatch }) {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(`checkout`);
  };

  return (
    <div className="absolute w-[280px] h-[440px] flex flex-col p-[20px] border-black border bg-white top-[80px] right-[80px] z-10">
      <div className="h-[320px] flex flex-col items-center overflow-scroll mb-4">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="font-bold text-xl  opacity-60 my-[50px]">
            Cart is empty
          </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          routeChange();
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
