import { ReactElement } from "react";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

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
  ({ children, product }: Props): JSX.Element;
  Title: ({ title }: { title: string }) => JSX.Element;
  Img: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
