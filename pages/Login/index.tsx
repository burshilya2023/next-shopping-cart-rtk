import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
//TODO: make this page
const LoginOrRegistry = () => {
  return (
    <div>
      <Layout keywords="login">
        <div className="container  flexColumn">
          <Head>
            <title>log in or Registry</title>
          </Head>
          <Link href="/">
            <button className="button button--outline">Go back</button>
          </Link>
          <form action="">
            <label htmlFor="">registration</label>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
          <br />
          <div>
            <button className="button button--outline">or log in</button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default LoginOrRegistry;
