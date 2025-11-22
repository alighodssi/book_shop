import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Home } from "./page/home"
import { Cartpage } from "./page/cartpage"
import { Projectpage } from "./page/projectpage"
import { PrivateRoute } from "./privaterout/privaterout"
import Login from "./page/login"
import { Sport } from "./page/sport"
import { Naval } from "./page/naval"
import { History } from "./page/History"
import { Historycartpage } from "./page/historycartpage"
import { Navalcartpage } from "./page/navalcartpage"
import Test from "./test"




function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartitem/:id" element={<Cartpage />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/Projectpage" element={<Projectpage />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sport" element={<Sport/>}/>
         <Route path="/naval" element={<Naval/>}/>
          <Route path="/history" element={<History/>}/>
           <Route path="/history/:id" element={<Historycartpage />} />
            <Route path="/naval/:id" element={<Navalcartpage />} />
            <Route path="/test" element={<Test/>}/>

      </Routes>




    </>
  )
}

export default App
