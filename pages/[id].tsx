import React, { useState } from "react";
import styles from "../styles/pizza.id.module.scss";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../components/Layout";
//@ts-ignore
import { motion } from "framer-motion";
interface IfullPizza {
  imageUrl: string;
  title: string;
  price: number;
}
const FullPizza: React.FC = () => {
  const [widthImage, setWidthImage] = useState(0);
  const [widthReview, setWidthReview] = useState(0);
  const carouselImage = React.useRef<HTMLInputElement>(null);
  const carouselReview = React.useRef<HTMLInputElement>(null);

  const [pizza, setPizza] = useState<IfullPizza>();
  const { query, pathname } = useRouter();
  const id = query.id;

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://631aef4edc236c0b1ee7b8c6.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        console.log(error, "error-in pizza id");
      }
    }
    fetchPizza();
  }, [query]);
  React.useEffect(() => {
    if (carouselImage.current?.scrollWidth) {
      setWidthImage(
        carouselImage.current.scrollWidth - carouselImage.current.offsetWidth
      );
    }
    if (carouselReview.current?.scrollWidth) {
      setWidthReview(
        carouselReview.current.scrollWidth - carouselReview.current.offsetWidth
      );
    }
  }, [pizza]);
  if (!pizza) {
    return <>loading pizza with:{id} </>;
  }

  const SliderImgItem = [...new Array(6)].map((_, index) => (
    <div className={styles.item}>
      <span>{index}</span>
      <Image
        key={index}
        height={140}
        width={150}
        src={pizza.imageUrl}
        alt="Pizza"
        className={styles.item_img}
      />
    </div>
  ));
  const reviews = [...new Array(17)].map((_, index) => (
    <div className={styles.reviews_item} key={index}>
      reviews №{index}{" "}
    </div>
  ));
  return (
    <Layout keywords={`id-${id}`}>
      <div className="container">
        <div className={styles.wrapperIdPizza}>
          <div className={styles.Pizza__slider_descr}>
            {/* ======Slider===== */}

            <div ref={carouselImage} className={styles.caroulse}>
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -widthImage }}
                className={styles.inner_carousel}
              >
                {SliderImgItem}
              </motion.div>
            </div>
            {/* ======Slider===== */}
            {/* ======Pizza-Descr===== */}
            <div className={styles.Pizza__descr}>
              <p>{pizza.title}</p>
              <p>{pizza.price} $</p>
              <Link href="/">
                <button className="button button--outline">back</button>
              </Link>
            </div>
          </div>
          {/* ======Pizza-Descr===== */}

          {/* ======carouselReview===== */}
          <div ref={carouselReview} className={styles.reviews}>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -widthReview }}
              className={styles.reviews__wrapper}
            >
              {reviews}
            </motion.div>
          </div>
          {/* ======carouselReview===== */}
        </div>
      </div>
    </Layout>
  );
};

export default FullPizza;
