import Link from "next/link";
import React from "react";
import { BsCart } from "react-icons/bs";

//!under development
export const CartEmpty: React.FC = () => (
  <div className="container flexColumn">
    <h1>not working...</h1>
    <span>
      <BsCart fontSize={255} />
    </span>

    <Link href="/" className="button button--otline">
      Go back
    </Link>
  </div>
);
