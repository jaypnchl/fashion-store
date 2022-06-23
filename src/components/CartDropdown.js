import CustomButton from "./CustomButton";

function CartDropdown() {
  return (
    <div className="absolute w-[280px] h-[440px] flex flex-col p-[20px] border-black border bg-white top-[80px] right-[80px] z-10">
      <div className="h-[320px] flex flex-col overflow-scroll mb-4"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
