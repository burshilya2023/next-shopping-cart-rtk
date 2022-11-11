import Image from "next/image";
import React from "react";
import { useAction } from "../../hooks/useAction";
import styles from "../../styles/cartItem.module.scss";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
type CartItemProps = {
  id: string;
  title: string;
  type: string; //tradition/thin
  size: number; //16 24 30
  price: number; //price
  count: number;
  imageUrl: string;
  item: any;
};

export const CartItem: React.FC<CartItemProps> = React.memo(
  ({ title, type, size, price, count, imageUrl, item }) => {
    const { minusItem, plusItem, removeItem } = useAction();
    const onClickPlus = () => {
      plusItem(item);
    };

    const onClickMinus = () => {
      minusItem(item);
    };

    const onClickRemove = () => {
      if (window.confirm("Do you really want to delete the product?")) {
        removeItem(item);
      }
    };

    return (
      <div className={styles.cartItemWrapper}>
        <div className={styles.cart_item_img}>
          <Image width={150} height={150} src={imageUrl} alt="Pizza" />
          <div className={styles.cart_item_info}>
            <p>{title}</p>
            <p>
              {type}, {size}сm.
            </p>
          </div>
        </div>

        <div className={styles.cart_item_count_and_price_remove}>
          <div className={styles.count}>
            <button
              disabled={count === 1}
              onClick={onClickMinus}
              className="button"
            >
              <AiOutlineMinusCircle
                fontSize={24}
                style={{ background: "none" }}
              />
            </button>
            <b className={styles.cart_item_count}>{count}</b>
            <button onClick={onClickPlus} className="button">
              <IoMdAddCircle fontSize={24} style={{ background: "none" }} />
            </button>
          </div>

          <div className={styles.price_and_remove}>
            <div className={styles.cart_item_price}>
              <b>{price * count} $</b>
            </div>
            <div className="cart_item-remove">
              <div onClick={onClickRemove} className="button">
                <CiCircleRemove fontSize={24} style={{ background: "none" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
