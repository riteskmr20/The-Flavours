import Logo from   "./Img/Logo.png";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";
// import { MdOutlineAssignmentInd } from "react-icons/md";

const Header = () => {

const [btnNameReact,setbtnNameReact] = useState("Login");

const data=useContext(UserContext);


{/*Subscribing to the store using selector*/}
const cartItems=useSelector((store)=>store.cart.items);

    return (
      <div className="flex justify-between shadow-md ">
        <div className="logo-container">

          <Link to="/"><img
            className="w-24 ml-20 cursor-pointer transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-50;"
            src={Logo}
          /></Link>

        </div>
        <div className="flex items-center">
          <ul className="flex p-7 me-20  ">
            <li className="px-4 flex"><Link to="/"><IoHomeOutline /> Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>

            <button className="login-btn px-4"
            onClick={()=>{
              btnNameReact==="Login"
              ? setbtnNameReact("Logout")
              :setbtnNameReact("Login");
              
              // console.log(btnNameReact);
            }}>
              {btnNameReact}

            </button>
          </ul>
        </div>
      </div>
    );
  };  

  export default Header;