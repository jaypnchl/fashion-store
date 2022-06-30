import CustomButton from "./CustomButton";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/CartAction";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className=" w-[180px] ml-3 sm:w-[400px] mb-6 relative sm:ml-6">
      <div className="absolute top-60 sm:top-[480px] flex w-full justify-center">
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
      </div>
      <img
        className=" w-[180px] h-[300px] sm:h-[550px] sm:w-[400px] min-w-[30%] min-h-[30%] object-cover"
        src={imageUrl}
        alt=""
      />

      <div className="flex justify-between text-sm sm:text-xl">
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
