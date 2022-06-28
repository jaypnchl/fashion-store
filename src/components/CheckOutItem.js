import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../redux/cart/CartAction";

function CheckOutItem({ cartItem, clearItem, removeItem, addItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="w-[100%]  min-h-[100px] py-[15px] flex items-center border-b border-gray-800 text-[22px]">
      <div className="w-[23%] pr-10">
        <img className="w-[100%] h-[100%]" src={imageUrl} alt="item" />
      </div>
      <span className="w-[23%]">{name}</span>
      <span className="w-[23%] pl-2 flex">
        <div className="cursor-pointer" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="mx-3">{quantity}</span>
        <div className="cursor-pointer" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="w-[23%]">{price}</span>
      <div
        className="pl-8 cursor-pointer font-semibold"
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
