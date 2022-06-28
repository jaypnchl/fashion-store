import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../components/CheckOutItem";
import { selectCartItems, selectCartTotal } from "../redux/cart/CartSelector";

function CheckOut({ cartItems, total }) {
  return (
    <div className="w-[55%] min-h-[90vh] flex flex-col items-center my-[50px] mx-auto">
      <div className="w-[100%] h-[40px] flex justify-between border-b border-gray-800 text-lg">
        <div className="capitalize w-[23%]">
          <span>Product</span>
        </div>
        <div className="capitalize w-[23%]">
          <span>Description</span>
        </div>
        <div className="capitalize w-[23%]">
          <span>Quantity</span>
        </div>
        <div className="capitalize w-[23%]">
          <span>Price</span>
        </div>
        <div className="capitalize w-[8%]">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartitem) => (
        <CheckOutItem key={cartitem.id} cartItem={cartitem} />
      ))}

      <div className="mt-[30px] ml-auto text-4xl">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
