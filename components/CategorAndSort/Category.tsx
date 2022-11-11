import React from "react";
import styles from "../../styles/gategory.module.scss";
type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ["all", "Meat", "Vegetarian", "Grill", "Sharp", "Closed"];

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className={styles.category}>
        <ul>
          {categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? `${styles.active}` : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
