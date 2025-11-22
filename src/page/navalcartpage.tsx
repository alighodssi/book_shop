import { useContext, useEffect, useState } from "react";
import { Getcartpage, Gethistory, Gethistorypage, Getnavalpage } from "../api/api";
import { useParams } from "react-router-dom";
import type { Article } from "../servers/types";
import "./cartpage.css";
import { useShoppingCartContext } from "../context/shopcontext";

export function Navalcartpage() {
  const [cartpage, setCartpage] = useState<Article | null>(null);

  const param = useParams();

 

  useEffect(() => {
    Getnavalpage(param.id as string).then((result) => {

      console.log("API result =", result);
      setCartpage(result);
    });
  }
    , [param.id]);



  const { Handelincress, cartitem, Getproductqty, Handeldecrease, Handelremove } = useShoppingCartContext();







  return (
    <div className="container">
      <div className="ArticlePage">
        <h1 className="fancy-title">{cartpage?.title}</h1>
        <div className="ArticlePageSpan">
          <span className="tag"> نویسنده : {cartpage?.athor}</span>
          <span className="tag"> تاریخ: {cartpage?.athor}</span>
          <span className="tag">مدت زمان خواندن {cartpage?.readingtime}</span>
        </div>

        <div className="ImgContent">
          <div className="cartpageimg">
            <img src={cartpage?.img} alt="عکس من" className="fantasy-imagee" />
          </div>
          <div className="ArticlePageContent">
            <p>{cartpage?.content}</p>

            {Getproductqty(parseInt(param.id as string)) === 0 ?


              <button className="tag" onClick={() => Handelincress(parseInt(param.id as string))}>
                add to cart 
              </button>

              :
              <>


                <button className="tag" onClick={() => Handelincress(parseInt(param.id as string))}>
                  +
                </button>

                <span>
                  {Getproductqty(parseInt(param.id as string))}


                </span>
                <button className="tag" onClick={() => Handeldecrease(parseInt(param.id as string))}>
                  -
                </button>

                <button className="tag" onClick={() => Handelremove(parseInt(param.id as string))}>

                  remove
                </button>

              </>   

            }




          </div>
        </div>
      </div>
    </div>
  );
}
