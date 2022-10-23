import { Product } from "./../interfaces/interfaces";
import { useState } from "react";
import { ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const newShoppingCart = { ...oldShoppingCart };
      delete newShoppingCart[product.id];
      return newShoppingCart;
      /*if (count === undefined) return oldShoppingCart;
          if (count === 0) {
            const newShoppingCart = { ...oldShoppingCart };
            delete newShoppingCart[product.id];
            return newShoppingCart;
          }
    
          return {
            ...oldShoppingCart,
            [product.id]: { ...product, count },
          };*/
    });
  };

  return {
    onProductCountChange,
    shoppingCart,
  };
};
