import { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImg,
  ProductTitle,
} from "../../02-component-patterns/component/index";
import { productCard } from "../../02-component-patterns/data/products";
import { useShoppingCart } from "../../02-component-patterns/hooks/useShoppingCart";
import { Product } from "../../02-component-patterns/interfaces/interfaces";
import { ShoppingPage } from "../../02-component-patterns/pages/ShoppingPage";
import "../../02-component-patterns/styles/custom-styles.css";

export const Lazyload1 = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <ShoppingPage />
      <div style={{ display: "flex" }}>
        {productCard.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className={"bg-dark"}
            onChange={(event) => onProductCountChange(event)}
            value={
              product.id in shoppingCart ? shoppingCart[product.id].count : 0
            }
          >
            <ProductCard.Img className="custom-image" />
            <ProductCard.Title title="" className="text-primary" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.values(shoppingCart).map((product) => (
          <ProductCard
            product={product}
            value={product.count}
            className={"bg-dark"}
            style={{ width: "100px" }}
            onChange={(event) => onProductCountChange(event)}
          >
            <ProductCard.Img className="custom-image" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <code>
        <pre>{JSON.stringify(shoppingCart, null, 5)}</pre>
      </code>
    </div>
  );
};

export default Lazyload1;
