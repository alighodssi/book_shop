import { useState } from "react"
import { useShoppingCartContext } from "./context/shopcontext"
import { useNavigate } from "react-router-dom"




export default function Test() {
                const [ username , setUsername] = useState("");
                const [ password , setPassword] = useState("");
                const [error , setError] = useState("");

                const {Handellogin} = useShoppingCartContext()
                const currect_password = "12345"

                const navigate = useNavigate()

                const handelsubmit =(e) =>{
                    e.preventDefault()
                    
                    if(currect_password === password){
                                setError("")
                                Handellogin()
                                navigate("/home")


                    }else{
                                setError("رمز اشتباه است")
                    }

                }

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

<main>
                <form onSubmit={handelsubmit}>
                                <label>
                                                <span>نام کاربری</span>
                                                <input type="text"
                                                value={username}
                                                onChange={(e)=>setUsername(e.target.value)}
                                                className="input"
                                                placeholder="نام کاربری"
                                                required
                                                />
                                </label>


                                <label>
                                                <span>پسوورد</span>
                                                <input type="password"
                                                value={password}
                                                onChange={(e)=>setPassword(e.target.value)}
                                                className="input"
                                                placeholder="پسوورد"
                                                required
                                                />
                                </label>

                                {error &&<>
                                
                                <p>
                                                {error}
                                </p>
                                
                                </>}


                                <button className="btn" type="submit"> ارسال </button>
                                
                </form>

</main>



)


}