import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/404.module.scss";
const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // !Redirect
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <h1>hello erorr</h1>
      </div>
    </div>
  );
};

export default Error;
