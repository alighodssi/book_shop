import { createContext, useContext, useState, } from "react";
import { useLocalStorage } from "../hooks/useloaclstrorage";



interface ShoppingCartProvidertype {

  children: React.ReactNode
}




interface Icartitem {
  id: number;
  qty: number;
}

interface ShoppingCartContextType {
  cartitem: Icartitem[];
  Handelincress: (id: number) => void;
  Handeldecrease: (id: number) => void;
  Getproductqty: (id: number) => number;
  Handelremove: (id: number) => void;
  Totalqty: number;
  login: boolean;
  Handellogin: () => void;
  Handelloginout: () => void;
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)




export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProvidertype) {
  const [cartitem, setCartitem] = useLocalStorage<Icartitem[]>("cartitems", []);

  const Handelincress = (id: number) => {
    setCartitem((curentitem) => {
      const selectitem = curentitem.find((item) => item.id === id);
      if (selectitem == null) {
        return [...curentitem, { id:id , qty: 1 }];
      } else {
        return curentitem.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    });
  };
  const Getproductqty = (id: number) => {
    return cartitem.find((item) => item.id === id)?.qty || 0;

  }


  const Handeldecrease = (id: number) => {
    setCartitem((curenitem) => {
      let selectitem = curenitem.find((item) => item.id == id)

      if (selectitem?.qty == 1) {
        return curenitem.filter((item) => item.id !== id)
      } else {
        return curenitem.map((item) => (item.id === id) ? { ...item, qty: item.qty - 1 } : item)
      }
    })
  }

  const Handelremove = (id: number) => {

    setCartitem(curentitem => curentitem.filter(item => item.id != id))
  }

  const Totalqty = cartitem.reduce((total, item) => total + item.qty, 0)



  const [login, setLogin] = useState(false)

  function Handellogin() {

    return (
      setLogin(true)
    )

  }

  function Handelloginout() {

    return (
      setLogin(false)
    )

  }

  return (
    <ShoppingCartContext.Provider value={{ Handelloginout, cartitem, Handelincress, Getproductqty, Handeldecrease, Handelremove, Totalqty, login, Handellogin }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
