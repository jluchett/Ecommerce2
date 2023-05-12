import { createContext, useState } from "react";

//crear contexto
export const CartContex = createContext();
//crear el provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //check if the product is already in the cart
    const productInTheCartIndex = cart.findIndex(
      (item) => item.id == product.id
    );
    if (productInTheCartIndex >= 0) {
      //una forma de sumar al producto es usando structureClone
      const newCart = structuredClone(cart);
      newCart[productInTheCartIndex].quantity += 1;
      setCart(newCart);
    }
    //producto no esta en el carrito
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };
  const clearCart = () => {
    setCart([]);
  };
  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id != product.id));
  };
  return (
    <CartContex.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContex.Provider>
  );
}
