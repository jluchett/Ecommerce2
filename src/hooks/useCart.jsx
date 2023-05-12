import { useContext } from "react";
import { CartContex } from "../context/cart";

export const useCart = ()=> {
    const contexto = useContext(CartContex)

    if (contexto == undefined){
        throw new Error('useCart must be used within a CartProvider')
    }

    return contexto
}