import Link from "next/link";
import React from "react";
import { BsCart } from "react-icons/bs";
import Layout from "../Layout";

export const CartEmpty: React.FC = () => (
  <Layout keywords={"cartEmpty"}>
    <div className="container flexColumn">
      <h2>
        The cart is empty <span>😕</span>
      </h2>
      <p>
        Most likely, you haven't ordered pizza yet. <br />
        To order a pizza, go to the main page.
      </p>
      <span>
        <BsCart fontSize={255} />
      </span>

      <Link href="/" className="button button--otline">
        Go back
      </Link>
    </div>
  </Layout>
);
