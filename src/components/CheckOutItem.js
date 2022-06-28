function CheckOutItem({ cartItem: { name, imageUrl, price, quantity } }) {
  return (
    <div className="w-[100%]  min-h-[100px] py-[15px] flex items-center border-b border-gray-800 text-xl">
      <div className="w-[23%] pr-10">
        <img className="w-[100%] h-[100%]" src={imageUrl} alt="item" />
      </div>
      <span className="w-[23%]">{name}</span>
      <span className="w-[23%] pl-5">{quantity}</span>
      <span className="w-[23%]">{price}</span>
      <div className="pl-8 cursor-pointer font-semibold">&#10005;</div>
    </div>
  );
}

export default CheckOutItem;
