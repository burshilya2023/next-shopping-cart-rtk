import React from "react";
import { MdOutlineSort } from "react-icons/md";
import { useAction } from "../../hooks/useAction";
import { useOutside } from "../../hooks/UseObserver";
import { Sort as SortType, SortPropertyEnum } from "../../store/types";
import styles from "../../styles/sort.module.scss";

type SortItem = {
  sortName: string;
  sortProperty: SortPropertyEnum;
};

type SortPopupProps = {
  value: SortType;
};

export const sortList: SortItem[] = [
  { sortName: "popularity(DESC)", sortProperty: SortPropertyEnum.RATING_DESC },
  { sortName: "popularity(ASC)", sortProperty: SortPropertyEnum.RATING_ASC },
  { sortName: "price(DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { sortName: "price(ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { sortName: "alphabet(DESC)", sortProperty: SortPropertyEnum.TITLE_DESC },
  { sortName: "alphabet(ASC)", sortProperty: SortPropertyEnum.TITLE_ASC },
];

export const Sort: React.FC<SortPopupProps> = React.memo(({ value }) => {
  const { setSort } = useAction();
  const { isShow, ref, setIsShow } = useOutside(false);
  const onClickListItem = (obj: SortItem): void => {
    setSort(obj);
    setIsShow(false);
  };
  return (
    <div ref={ref} className={styles.sort} onClick={() => setIsShow(!isShow)}>
      <div className={styles.sort__label}>
        <MdOutlineSort className={styles.sort_icon} />
        <div className={styles.sort_name}>{value.sortName}</div>
      </div>
      {isShow ? (
        <div className={styles.sort__popup}>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  value.sortProperty === obj.sortProperty
                    ? `${styles.active}`
                    : `${styles.sort_li}`
                }
              >
                {obj.sortName}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
});
