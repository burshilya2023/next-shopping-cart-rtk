import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.scss";
import { AiOutlineShoppingCart, AiOutlineSetting } from "react-icons/ai";
import { Search } from "../Search";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Badge, IconButton } from "@mui/material";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Heart from "../heart";

const Navbar: FC = () => {
  const { pathname } = useRouter();

  const isMounted = React.useRef(false);

  const { itemsCart, totalPrice, totalCount } = useTypedSelector(
    (state) => state.cart
  );
  const lenghtCart = itemsCart.length; //or all pizza down

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(itemsCart);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [itemsCart]);

  return (
    <nav className={styles.NavBarWrapper}>
      <div className="container">
        <nav className={styles.nav}>
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            className={styles.logo}
          >
            <Link href="/" className={styles.logo__link}>
              <span>Bursh Pizza </span>
            </Link>
          </motion.div>
          {pathname === "/" ? <Search /> : <Link href="/">GO BACK</Link>}
          <motion.div
            // initial={{ x: 250 }}
            // animate={{ x: 0 }}
            className={styles.nav__right}
          >
            <i>
              <ThemeSwitcher /> {/* //!Switch Theme */}
            </i>
            <motion.div
              // initial={{ x: 250 }}
              // animate={{ x: 0 }}
              className={styles.links}
            >
              <Link href="/favorite">
                <Heart />
              </Link>
              <Link href="/cart">
                <IconButton color="inherit">
                  <Badge color="secondary" badgeContent={lenghtCart}>
                    <AiOutlineShoppingCart />
                  </Badge>
                  <p style={{ padding: "0 0 0 11px", fontSize: "9px" }}>
                    {totalPrice}$.
                  </p>
                </IconButton>
              </Link>
              <a href="">
                <i>
                  <AiOutlineSetting />
                </i>
              </a>
            </motion.div>
          </motion.div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
