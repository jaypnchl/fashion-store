import CustomButton from "./CustomButton";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/CartAction";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className=" w-[400px] mb-6 relative ">
      <img
        className="h-[550px] w-[400px] min-w-[30%] min-h-[30%] object-cover"
        src={imageUrl}
        alt=""
      />
      <div className="flex justify-between text-xl">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <div className="absolute bottom-14 flex w-full justify-center">
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
