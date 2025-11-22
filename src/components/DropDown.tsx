import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./DropDown.css"


export function DropDown() {

                return (
                                <div>

                                                <ul className="DropMenu">
                                                                {
                                                                                MenuItems.map((item) => (
                                                                                                <Link className="drop-link" to={item.path}>

                                                                                                                <li className={item.cName}>

                                                                                                                                {item.title}</li>
                                                                                                </Link>
                                                                                ))
                                                                }
                                                </ul>
                                </div>
                )
}