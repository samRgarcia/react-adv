import { ProductCard } from "../../02-component-patterns/component/index";
import { ShoppingPage } from "../../02-component-patterns/pages/ShoppingPage";
const productCard = {
  id: 1,
  title: "Product Card 1",
  img: "./coffee-mug.png",
};
export const Lazyload1 = () => {
  return (
    <div>
      <ShoppingPage />
      <ProductCard product={productCard}>
        <ProductCard.Img />
        <ProductCard.Title title="" />
        <ProductCard.Buttons />
      </ProductCard>
    </div>
  );
};

export default Lazyload1;
