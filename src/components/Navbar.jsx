import "../App.css";
import logo from "../assets/images/logo.jpg";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between py-5 px-8 ">
        <div>
          <img className=" w-20 h-20" src={logo} alt="logoimage" />
        </div>
        <div>
          <IoMdMenu className="h-10 w-10 text-red-700" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
