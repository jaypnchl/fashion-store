function CustomButton({ children, ...otherProps }) {
  return (
    <button
      className="py-2 px-6 text-white bg-black hover:bg-white hover:border-black hover:border-2  hover:text-black "
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
