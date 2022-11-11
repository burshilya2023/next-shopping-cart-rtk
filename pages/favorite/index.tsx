import { NextPage } from "next";
import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "../../styles/favority.module.scss";
import { HeartLarge } from "../../components/heart";
const Favorite: NextPage = () => {
  return (
    <Layout keywords="FAVORITE">
      <div className="container">
        <div className={styles.favority}>
          <main className="main">
            <h1>temporarily not working </h1>
            {/* <HeartLarge /> */}
            {/* <div className={styles.heart}></div> */}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Favorite;
