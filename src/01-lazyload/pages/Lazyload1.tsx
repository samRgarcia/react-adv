import {
  ProductButtons,
  ProductCard,
  ProductImg,
  ProductTitle,
} from "../../02-component-patterns/component/index";
import { ShoppingPage } from "../../02-component-patterns/pages/ShoppingPage";
import "../../02-component-patterns/styles/custom-styles.css";
const productCard = {
  id: 1,
  title: "Product Card 1",
  img: "./coffee-mug.png",
};
export const Lazyload1 = () => {
  return (
    <div>
      <ShoppingPage />
      <div style={{ display: "flex" }}>
        <ProductCard product={productCard} className={"bg-dark"}>
          <ProductCard.Img className="custom-image" />
          <ProductCard.Title title="" className="text-primary" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={productCard} className={"bg-dark"}>
          <ProductImg
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle title="" className="text-primary" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={productCard} style={{ background: "red" }}>
          <ProductImg />
          <ProductTitle title="" style={{ fontWeight: "bold" }} />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

export default Lazyload1;
