import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. State Wa7da: cartItems
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Fonction: Ajouter / Zyad l-quantité
const addToCart = (product) => {
  setCartItems((prev) => {
    // Kan-9ellbo wach l-id dyal had l-produit kayn f l-array
    const exist = prev.find((item) => item.id === product.id);

    if (exist) {
      // Ila kayn, kan-zydo l-qty dial dak l-produit bo7do
      return prev.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    }
    // Ila ma-kaynch, kan-zydouh m3a les autres
    return [...prev, { ...product, qty: 1 }];
  });
};

  // Fonction: Diminuer la quantité
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === productId);
      if (exist.qty === 1) {
        return prev.filter((item) => item.id !== productId);
      }
      return prev.map((item) =>
        item.id === productId ? { ...item, qty: item.qty - 1 } : item
      );
    });
  };

  // Fonction: Supprimer carrément
  const deleteFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  //  Calculs
  const getCartCount = () => cartItems.reduce((acc, item) => acc + item.qty, 0);
  
  const getCartTotal = () => cartItems.reduce((acc, item) => acc + (item.prix * item.qty), 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, addToCart, removeFromCart, deleteFromCart, clearCart, getCartCount, getCartTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
};

