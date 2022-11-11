import Head from "next/head";
import { FC } from "react";
import Navbar from "./Navbar";

type HeadrProps = {
  keywords?: any;
};

const Header: FC<HeadrProps> = () => (
  <header>
    <Navbar />
  </header>
);

export default Header;
