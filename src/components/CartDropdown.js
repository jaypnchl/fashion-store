import CustomButton from "./CustomButton";
import CartItem from "./CartItem";
import { connect } from "react-redux";

function CartDropdown({ cartItems }) {
  return (
    <div className="absolute w-[280px] h-[440px] flex flex-col p-[20px] border-black border bg-white top-[80px] right-[80px] z-10">
      <div className="h-[320px] flex flex-col overflow-scroll mb-4">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
