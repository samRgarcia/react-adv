import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProducCard";

export const ProductTitle = ({ title }: { title: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>{product.title || title}</span>
  );
};
