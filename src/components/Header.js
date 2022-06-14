import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/storefront.svg";

function Header() {
  return (
    <div className="flex justify-between py-6 items-center">
      <Link to="/">
        <Logo />
      </Link>
      <div className="space-x-6 text-xl">
        <Link to="/shop">SHOP</Link>
        <Link to="/shop">CONTACT</Link>
      </div>
    </div>
  );
}

export default Header;
