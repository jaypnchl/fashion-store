function FormInput({ handleChange, ...otherProps }) {
  return (
    <div className="relative my-[45px] focus:last:text-sm">
      <input
        className="h-10 w-80 border-b-2  group focus:h-12 focus:text-lg transition-all outline-none"
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
}

export default FormInput;
