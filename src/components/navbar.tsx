import React, { useState } from "react";
import "./navbar.css"


import icon from "../images/unnamed.png";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../context/shopcontext";
import { DropDown } from "./DropDown";
export function Navbar() {
  const [click, setClick] = useState(false);

  const handelclick = () => {
    setClick(!click);
  };


  const [dropdown , setDropdown] = useState(false)


  const {Totalqty  , login , Handelloginout} = useShoppingCartContext();


  const onMouseEnter = ()=>{
    if(window.innerWidth < 960){
      setDropdown(true)
    }else{
      setDropdown(true)
    }
  }
    const onMouseLeave = ()=>{
    if(window.innerWidth < 960){
      setDropdown(false)
    }else{
      setDropdown(false)
    }
  }

  return (
    <div className="navbar">
     

      <div className="nav-icon"> 
        <img src={icon} alt="" />
        {login ?<>
          <button onClick={Handelloginout}>
            logout
          </button>
        </>: ""}
       

     
        <span>{Totalqty !== 0 ?Totalqty : ""}</span>
      </div>
         

       <div
        className={click ? "fas fa-bars" : "fas fa-times"}
        onClick={handelclick}
      >
                
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link to="/servers">
        <li 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
                منابع<i className="fas fa-caret-down"/>
                {dropdown&&<DropDown/>}
        </li>
        </Link>
      <Link to="/Projectpage">
    
        <li>
          صفحه سفارشات
        </li>
        </Link>
         <Link to="/">
        <li>
               درباره ما
        </li>
        </Link>

      
      </ul>
    </div>
  );
}
