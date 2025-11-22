import { Cart } from "../components/cart";
import { useShoppingCartContext } from "../context/shopcontext";

import "./Projectpage.css"

export function Projectpage() {
                const { cartitem } = useShoppingCartContext();
                
                return (
                                <div className="Projectpage">

                                                {cartitem.map((item) => {
                                                                return (
                                                                                <Cart {...item} />
                                                                )
                                                }


                                                )

                                                }
                                         
                                           

                                </div>
                )
}