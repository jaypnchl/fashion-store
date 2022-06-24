function CartItem({ item: { name, imageUrl, price, quantity } }) {
  return (
    <div className="w-[100%] flex  mb-4">
      <img className="w-[30%]" src={imageUrl} alt="item" />
      <div className="w-[70%] flex flex-col items-start justify-center py-2 px-5">
        <span>{name}</span>
        <span>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
