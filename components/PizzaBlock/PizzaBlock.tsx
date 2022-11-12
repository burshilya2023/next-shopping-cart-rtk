import Link from "next/link";
import React from "react";
import styles from "../../styles/pizza-block.module.scss";
import { useAction } from "../../hooks/useAction";
import { CartItem } from "../../store/types";
import Image from "next/image";
import Heart from "../heart";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
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
  const [toggleFavorite, seTtoggleFavorite] = React.useState(true);
  const [favoriteState, setfavoriteState] = React.useState<any>([]);
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  console.log("favoriteState", favoriteState);

  const addToFavorite = () => {
    seTtoggleFavorite(!toggleFavorite);
    const date = String(new Date());

    const item: any = {
      id,
      date: date,
      title,
      price: resultPrice,
      imageUrl,
    };
    setfavoriteState(item);
  };

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
      <div
        onClick={addToFavorite}
        className={
          toggleFavorite
            ? `${styles.pizza_block_favorite}`
            : `${styles.pizza_block_favorite}
               ${styles.favorite_active}`
        }
      >
        <BsHeart />
      </div>
      <div className={styles.pizza_block}>
        <Link key={id} href={`/${id}`}>
          <Image
            height={"100"}
            width={"100"}
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
