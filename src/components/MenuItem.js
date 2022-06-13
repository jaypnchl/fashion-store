const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className="h-[360px] min-w-[30%] border flex justify-center items-center">
      <div className="flex flex-col justify-center items-center border px-10 py-4 space-y-2 bg-black bg-opacity-80 text-white hover:bg-opacity-100 absolute hover:cursor-pointer ">
        <h1 className="text-5xl">{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
