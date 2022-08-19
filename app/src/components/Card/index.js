import React, { useState } from "react";
import Like from "../icons/Like";
import styles from "./styles.module.scss";

console.log(styles);

function Card({ img }) {
  const [hasLike, setHasLike] = useState(false);
  const [counter, setCounter] = useState(0);
  const toggleLike = () => {
    setHasLike(!hasLike);
    setCounter(!hasLike ? counter + 1 : counter - 1);
  };
  return (
    <figure className={styles.card}>
      <div className={styles.card__top}>
        <div className={`${styles.card__cta} ${styles.desktop}`}>
          <div className={`${styles.button} ${styles.like}`}>
            <span className={styles.button__counter}>{counter}</span>
            <button onClick={() => toggleLike()}>
              <Like active={hasLike} />
            </button>
          </div>
          <div className={styles.divider}></div>
          <div className={`${styles.button} ${styles.undo}`}>
          </div>
        </div>
        <div className={styles.card__price}>
          <p>
            {img.price.toFixed(2)}
            <span>€</span>
          </p>
        </div>
        <picture className={styles.card__img}>
          {/* Cada <source> aplica un media query, si se cumple la condicion aplica la imagen correspondiente, sino pasa al siguiente <source> */}
          <source srcset={img.main_attachment.big} media="(min-width: 600px)" />
          <img src={img.main_attachment.small} alt="MDN" />
        </picture>
      </div>
      <div className={styles.card__description}>
        <h2>{img.title}</h2>
        <p className={styles.card__description__author}>
          <small>by</small>
          <span>{img.author}</span>
        </p>
      </div>
      <div className={styles.card__cta}>
        <div className={`${styles.button} ${styles.like}`}>
          <span className={styles.button__counter}>{counter}</span>
          <button onClick={() => toggleLike()}>
            <Like active={hasLike} />
          </button>
        </div>
        <div className={styles.divider}></div>
        <div className={`${styles.button} ${styles.undo}`}>
        </div>
      </div>
    </figure>
  );
}

export default Card;
