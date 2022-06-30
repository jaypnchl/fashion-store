import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../components/CheckOutItem";
import { selectCartItems, selectCartTotal } from "../redux/cart/CartSelector";
import StripeCheckoutButton from "../components/StripeButton";

function CheckOut({ cartItems, total }) {
  return (
    <div className=" sm:w-[55%]  mx-2 min-h-[90vh] flex flex-col items-center my-[50px] sm:mx-auto">
      <div className="w-[100%] h-[40px] flex justify-between border-b border-gray-800 text-sm sm:text-lg">
        <div className="capitalize w-[25%] sm:w-[23%]">
          <span>Product</span>
        </div>
        <div className="capitalize w-[23%] ">
          <span>Description</span>
        </div>
        <div className="capitalize w-[23%] ">
          <span>Quantity</span>
        </div>
        <div className="capitalize w-[15%] sm:w-[23%]">
          <span>Price</span>
        </div>
        <div className="capitalize w-[8%] ">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartitem) => (
        <CheckOutItem key={cartitem.id} cartItem={cartitem} />
      ))}
      <div className="mt-[30px] ml-auto text-xl sm:text-4xl">
        <span>Total: ${total}</span>
      </div>
      <div className="text-red-600 mt-6 mb-10 text-center text-lg font-semibold">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/34 - CVV: 123
      </div>
      <div className="ml-auto">
        <StripeCheckoutButton price={total} />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
