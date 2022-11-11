import { FC, ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import Head from "next/head";
type layoutProps = {
  children: ReactNode;
  keywords: string;
};
const Layout: FC<layoutProps> = ({ children, keywords }) => (
  <>
    <Head>
      <title>{keywords}</title>
    </Head>
    <Header keywords={keywords} />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
