import { debounce } from "lodash";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";
import { motion } from "framer-motion";
import { useAction } from "../hooks/useAction";
import styles from "../styles/search.module.scss";
export const Search: React.FC = () => {
  const { setSearchValue } = useAction();
  const [value, setValue] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current?.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      setSearchValue(str);
    }, 650),
    []
  );
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  const [toggleButton, setToggleButton] = React.useState(true);
  return (
    <motion.div initial={{ y: -250 }} animate={{ y: 0 }} className={styles.box}>
      <div
        className={
          toggleButton
            ? `${styles.box__search} ${styles.box__search_checked}`
            : styles.box__search
        }
      >
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          placeholder="search pizza..."
        />
        <label
          onClick={() => setToggleButton(!toggleButton)}
          className={
            toggleButton
              ? `${styles.box__icon} ${styles.box__icon_checked}`
              : styles.box__icon
          }
        >
          <AiOutlineSearch />
        </label>
        {value && (
          <MdOutlineClear
            onClick={onClickClear}
            className={
              toggleButton
                ? `${styles.box__clear} ${styles.box__clear_checked}`
                : styles.box__clear
            }
          />
        )}
      </div>
    </motion.div>
  );
};
