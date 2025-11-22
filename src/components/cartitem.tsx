

import type { Article } from "../servers/types";
import "./cartitem.css";

type Tcartitem =Article

export function Cartitem({
  title,
  athor,
  readingtime,
  content,
  img,
  date,
}: Tcartitem) {


  return (
    <div className="cart-item">
      <img className="cartimg" src={img} alt={title} width={200} />
      <h2>{title}</h2>
      <span>⏱ {readingtime}</span>
      <div className="cartcontent">
        
        <p className="cart-item-content">{content}</p>
        <p>✍️ {athor}</p>
        <p>📅 {date}</p>

     

      </div>
    </div>
  );
}
