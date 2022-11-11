import React from "react";
import styles from "../styles/description.module.scss";
const Description: React.FC = () => {
  return (
    <div className={styles.WrapperDescription}>
      <div className={styles.descriptionBlock}>
        <h1>title1</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          molestias nostrum consequuntur eos quibusdam omnis, cumque deleniti
          tempora porro velit id ex provident vero maxime, necessitatibus
          corporis odit magnam autem, debitis voluptate soluta?
        </p>
      </div>
      <div className={`${styles.inverse} ${styles.full_bleed}`}>
        <h1>title2</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          molestias nostrum consequuntur eos quibusdam omnis, cumque deleniti
          tempora porro velit id ex provident vero maxime, necessitatibus
          corporis odit magnam autem, debitis voluptate soluta?
        </p>
      </div>
      <div>
        <h1>title3</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          molestias nostrum consequuntur eos quibusdam omnis, cumque deleniti
          tempora porro velit id ex provident vero maxime, necessitatibus
          corporis odit magnam autem, debitis voluptate soluta?
        </p>
      </div>
    </div>
  );
};

export default Description;
