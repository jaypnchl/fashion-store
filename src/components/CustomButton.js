function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  small,
  ...otherProps
}) {
  return (
    <button
      className={`  ${
        inverted
          ? `bg-white text-black text-lg  hover:scale-105 opacity-80 hover:opacity-100 `
          : "bg-black text-white hover:bg-white hover:border-2  hover:border-black hover:text-black  "
      }  py-3 px-4 sm:py-4 sm:px-8 cursor-pointer   `}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
