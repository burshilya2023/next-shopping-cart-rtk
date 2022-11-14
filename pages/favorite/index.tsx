import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "../../styles/favority.module.scss";
import Heart, { HeartLarge } from "../../components/heart";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Image from "next/image";
import { useAction } from "../../hooks/useAction";
import { divide } from "lodash";
import { useRouter } from "next/router";
import { CiCircleRemove } from "react-icons/ci";
import { FavoriteItem } from "../../store/types";

const Favorite: NextPage = () => {
  const { itemsFavorite } = useTypedSelector((state) => state.favorite);
  const {
    clearAllItem,
    removeItemFavorite,
    clearAllFavorite,
    toggleItemFavority,
  } = useAction();
  const router = useRouter();
  useEffect(() => {
    if (!itemsFavorite.length) {
      setTimeout(() => {
        // !Redirect
        router.push("/");
      }, 2000);
    }
  }, [router, itemsFavorite]);

  const clearItem = () => {
    const result = itemsFavorite.filter(
      (obj: FavoriteItem) => obj.toggle !== true
    );
    clearAllFavorite(result);
  };
  if (!itemsFavorite.length) {
    return (
      <div>
        <div className={styles.favorite__backgroudn_heart}>
          <HeartLarge />
        </div>
        <div className={styles.favorite__emty}>
          you haven't added anything to your favorites
        </div>
      </div>
    );
  }

  return (
    <Layout keywords="FAVORITE">
      <div className="container">
        <div className={styles.favorite__backgroudn_heart}>
          <HeartLarge />
        </div>
        <div className={styles.favoriteWrapper}>
          <div className={styles.favorite_deleteAll_deleteItem}>
            <button onClick={clearAllItem}>delete all</button>
            <br />
            <button onClick={clearItem}>delete checked</button>
          </div>
          <div className={styles.itemsFavorite_map}>
            {itemsFavorite.map((item: FavoriteItem) => (
              <div
                onClick={() => toggleItemFavority(item.id)}
                className={
                  item.toggle
                    ? `${styles.favorite_map_block} ${styles.favorite_map_block_active}`
                    : styles.favorite_map_block
                }
              >
                <div className={styles.favorite_img_checked}>
                  <input type="checkbox" checked={item.toggle} />
                  <Image
                    height={120}
                    width={120}
                    src={item.imageUrl}
                    alt="Pizza"
                  />
                </div>

                <div className={styles.favorite_title_price}>
                  <h2>{item.title}</h2>
                  <p>{item.price}$</p>
                  <p>{item.date.slice(4, 25)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Favorite;
