import { Props as ProductCardProps } from "../component/ProducCard";
import { Props as ProductTitleProps } from "../component/ProductTitle";
import { Props as ProductImgProps } from "../component/ProductImage";
import { Props as ProductButtonsProps } from "../component/ProductButtons";

export interface Product {
  id: string | number;
  title: string;
  img?: string;
}

export interface ProductButtonsPros {
  onClick: (value: number) => void;
  counter: number;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product, className }: ProductCardProps): JSX.Element;
  Title: ({ title, className }: ProductTitleProps) => JSX.Element;
  Img: ({ img, className }: ProductImgProps) => JSX.Element;
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
  onChange?: () => void;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductCard {
  id: string | number;
  title: string;
  img?: string;
}

export interface ProductInCart extends ProductCard {
  count: number;
}
