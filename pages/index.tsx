import React, { useCallback } from "react";
import { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import { Skeleton } from "../components/Skeleton";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { PizzaApi } from "../store/types";
import { Sort } from "../components/CategorAndSort/Sort";
import { Categories } from "../components/CategorAndSort/Category";
import { useAction } from "../hooks/useAction";
import { fetchPizzas } from "../fetchApi/Pizza.api";
import { useAppDispatch } from "../store/store";
import Description from "../components/Description";
const Home: NextPage = () => {
  const { setCategoryId, setSearchValue } = useAction();// actionCreators
  const { items, status } = useTypedSelector((state) => state.pizza);//fetch pizza
  const { itemsCart } = useTypedSelector((state) => state.cart);//for count to button add

  const dispatch = useAppDispatch();

  const {
    categoryId,
    sort,
    currentPage = 1,
    searchValue = "",
  } = useTypedSelector((state) => state.filter);//?currentPage?/params category/sort/searchValue

  const getPizzas = async () => {
    
    const sortBy = sort.sortProperty.replace("-", ""); //popular/price/alphabet
    const order = sort.sortProperty.includes("-") ? "asc" : "desc"; //min/max
    const category = categoryId > 0 ? String(categoryId) : ""; // 1-2-3-4-5
    const search = searchValue;//any
    dispatch(
      fetchPizzas({
        //fetch get
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      })
    );
  };
  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  //!func#1
  const onChangeCategory = useCallback((i: number): void => {
    setCategoryId(i);
  }, []);
//!func#2
  const TotalCountPizzaAdd = (id: string): number => {
    const resultCount = itemsCart.filter((obj) => obj.id === id);
    const amount = resultCount?.reduce((c, cart) => {
      return c + cart?.count;
    }, 0);
    return amount;
  };
 
  //!map pizzas
  const pizzas = items.map((obj: PizzaApi, index: number) => (
    <PizzaBlock
      key={obj.id}
      lenght={index + 1}
      {...obj}
      TotalCountPizzaAdd={TotalCountPizzaAdd}
    />
  ));
//!map skeleton
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

   
  return (
    <Layout keywords={"main page"}>
      <div className="container">
        <div className={styles.homeWrapper}>
          <div className={styles.home__category_sort_wrapper}>
            <div className={styles.home_categort}>
              {" "}
              <Categories
                value={categoryId}
                onChangeCategory={onChangeCategory}
              />
            </div>
            <div className={styles.home_sort}>
              <Sort value={sort} />
            </div>
          </div>
          <div>
            <div>
              {status === "error" ? (
                <div>
                  <h2>sorry 😕</h2>
                  <p>
                  Unfortunately, it was not possible to get pizza. Try
                  try again later.
                  </p>
                </div>
              ) : (
                <div className={styles.home__pizza_skeletons_wrapper_flex}>
                  {status === "loading" ? skeletons : pizzas}{/* //!pizzasBlock */}
                </div>
              )}
              {items.length === 0 ? (
                <div style={{paddingBottom:'200px'}}>
                  <h3>there are no pizzas with this name</h3>
                  <button className="button button--outline" onClick={() => setSearchValue("")}>back</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {/* //! under development*/}
        <Description />
         {/* //! under development*/}
      </div>
    </Layout>
  );
};

export default Home;
