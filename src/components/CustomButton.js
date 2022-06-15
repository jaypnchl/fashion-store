function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`${
        isGoogleSignIn ? "bg-blue-600" : "bg-black  "
      } py-4 px-8 text-white hover:bg-white  hover:border-black hover:border-2 hover:text-black cursor-pointer    `}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
