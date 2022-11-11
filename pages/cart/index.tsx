import { NextPage } from "next";
import React from "react";
import styles from "../../styles/cart.module.scss";
import Layout from "../../components/Layout";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CartEmpty } from "../../components/CartBlock/CartEmty";
import { CartItem } from "../../components/CartBlock/CartItem";
import Link from "next/link";
import ModalWindow from "../../components/ModalWindow";
import { useRouter } from "next/router";

const Cart: NextPage = () => {
  const { clearItems } = useAction();
  const [auth, setAuth] = React.useState(false); //!under development
  const router = useRouter();
  const { totalPrice, itemsCart } = useTypedSelector((state) => state.cart);
  const totalCount = itemsCart.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );
  React.useEffect(() => {
    // Perform localStorage action
    const itemsCart = localStorage.getItem("cart");
  }, []);

  const onClickClear = () => {
    if (window.confirm("Clear shopping cart of orders? ?")) {
      clearItems();
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }
  //!under development
  //TODO:
  // ?-1)Create Modal for Pay
  // ?-2)Setting for save cards
  // ?-3)
  const isAuth = () => {
    if (auth) {
      alert("payment was successful");
    }
  };

  return (
    <div className={styles.container}>
      <Layout keywords={"cart page"}>
        <div className="container">
          <div className={styles.cartWrapper}>
            <div className={styles.cart}>
              <div onClick={onClickClear} className={styles.button_clear}>
                Empty the trash
              </div>
              {itemsCart.map((item) => (
                <CartItem key={item.date} item={item} {...item} />
              ))}
            </div>
            <div className={styles.cart_bottom}>
              <div className={styles.cart_count_totalPrice}>
                <span>
                  Total pizzas: <p>{totalCount}pc</p>
                </span>
                <span>
                  Order amount: <p>{totalPrice} $</p>
                </span>
              </div>

              <ModalWindow title="оплатить корзину">
                <div>
                  <div className={styles.cart_count_totalPrice}>
                    <span>
                      Total pizzas: <p>{totalCount} pc</p>
                    </span>
                    <span>
                      Order amount: <p>{totalPrice} $</p>
                    </span>
                  </div>

                  <div>
                    <button className="button button--outline">
                      {auth ? <h1>Buy</h1> : <Link href="/Login">Buy</Link>}
                    </button>
                  </div>
                </div>
              </ModalWindow>
              <Link href="/" className="button">
                Go back
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Cart;
