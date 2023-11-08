"use client"
import { Product } from "@prisma/client";
import { ReactNode, createContext } from "react";

interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDicount: number;
}

const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDicount: 0,
});

const CartProvider = ({children}: {children: ReactNode}) => {
  return (
    <CartContext.Provider
      value={{
        products: [],
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDicount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
 
export default CartProvider;