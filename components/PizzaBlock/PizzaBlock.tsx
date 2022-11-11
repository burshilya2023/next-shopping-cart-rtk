import Link from "next/link";
import React from "react";
import styles from "../../styles/pizza-block.module.scss";
import { useAction } from "../../hooks/useAction";
import { CartItem } from "../../store/types";
import Image from "next/image";
import Heart from "../heart";
const typeNames = ["thin", "traditional"];
type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
  lenght?: number;
  TotalCountPizzaAdd: (id: string) => number;
};

export const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
  TotalCountPizzaAdd,
}) => {
  const { addItem } = useAction();

  const TotalCount = () => {
    let result = TotalCountPizzaAdd(id);
    return result;
  };
  const totalCount = TotalCount(); //number

  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const createPrice = (price: number, activeSize: number) => {
    if (activeSize == 0) {
      return price;
    } else if (activeSize == 1) {
      return Math.ceil(price * 1.33);
    } else if (activeSize == 2) {
      return Math.floor(price * 1.66);
    }
    return price;
  };
  const rresult = createPrice(price, activeSize);
  const resultPrice = rresult;

  //start //!add piiza to card
  const onClickAdd = () => {
    const date = String(new Date());
    const item: CartItem = {
      id,
      date: date,
      title,
      price: resultPrice,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    addItem(item);
    //!alert("pizza added");
  };
  //end //?add piizza to card

  return (
    <div className={styles.pizza_block_wrapper}>
      <div className={styles.pizza_block_favorite}>
        <Heart />
      </div>
      <div className={styles.pizza_block}>
        <Link key={id} href={`/${id}`}>
          <Image
            height={250}
            width={250}
            className={styles.pizza_block_img}
            src={imageUrl}
            alt="Pizza"
          />
          <div className={styles.pizza_block_title}>{title}</div>
        </Link>
        <div className={styles.pizza_block_selector}>
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? `${styles.active}` : ""}
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={size}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? `${styles.active}` : ""}
              >
                {size} сm
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.pizza_block__bottom}>
          <div className={styles.pizza_block__price_wrapper}>
            <div className={styles.pizza_block__price}> {resultPrice} $</div>
          </div>
          <button onClick={onClickAdd} className="button button--outline">
            add to cart {totalCount > 0 && <span>{totalCount}</span>}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};
