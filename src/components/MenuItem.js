import { NavLink } from "react-router-dom";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <div className="h-[360px] min-w-[30%] border flex justify-center items-center overflow-clip">
      <img className="h-[450px]  object-cover " src={imageUrl} alt="" />
      <NavLink
        to={`/shop/${title}`}
        className="flex flex-col justify-center items-center border px-6 py-2 sm:px-10 sm:py-4 space-y-2 bg-white bg-opacity-80 text-black hover:bg-opacity-100 absolute hover:cursor-pointer hover:scale-105 transition-all ease-out"
      >
        <h1 className="text-3xl sm:text-5xl">{title.toUpperCase()}</h1>
      </NavLink>
    </div>
  );
};

export default MenuItem;
