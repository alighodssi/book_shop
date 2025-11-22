import { useEffect, useState } from "react";
import { useShoppingCartContext } from "../context/shopcontext";
import pic from "../images/img-5.jpg";
import "./cart.css";
import { Getcartpage, Gethistorypage, Getnavalpage } from "../api/api";
import type { Article } from "../servers/types";

interface Icart {

  id:number;
  qty:number
}

export function Cart({id , qty}:Icart) {

       const [cartpage , setCartpage] = useState<Article | null>(null);
      const {Handeldecrease , Handelincress , Handelremove} = useShoppingCartContext();

       useEffect(() => {
    async function fetchData() {
      try {
       
        let result = null;
        try {
          result = await Getcartpage(id);
        } catch {}
        if (!result) {
          try {
            result = await Gethistorypage(id);
          } catch {}
        }
        if (!result) {
          try {
            result = await Getnavalpage(id);
          } catch {}
        }
        setCartpage(result);
      } 
      
      catch (error) {
        console.error("خطا در دریافت محصول:", error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="cart">
    
      <img src={cartpage?.img} alt="محصول" className="cart-img" />

      
      <div className="cart-info">
        <h2 className="cart-title">{cartpage?.title}</h2>

        <div className="cart-controls">
          <button onClick={()=>Handelincress(id)} className="btn">+</button>
          <span className="qty">{qty}</span>
          <button onClick={()=>Handeldecrease(id)} className="btn">-</button>
          <button onClick={()=>Handelremove(id)} className="btn-remove">remove</button>
        </div>
      </div>
    </div>
  );
}
