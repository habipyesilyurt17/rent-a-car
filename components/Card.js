import styles from "../styles/Card.module.css";
import { BsHeartFill, BsHeart, BsBag } from "react-icons/bs";
import { SiAutomattic } from "react-icons/si";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { useState } from "react";

const Card = ({ car }) => {
  const [favorite, setFavorite] = useState(car.favorite);
  return (
    <div className={styles.card}>
      <img src={car.url} alt="Sample photo" />
      <div className={styles.card_body}>
        <h5 className={styles.card_title}>{car.title}</h5>
        <div className={styles.price}>
          <div className={styles.straight_lines}>
            <div className={styles.line}>
              <hr />
            </div>
            <div className={styles.line}>
              <hr />
            </div>
          </div>
          <div className={styles.price_text}>
            From <span className={styles.price_text_color}>{car.price}</span> /
            Day
          </div>
          <div className={styles.straight_lines}>
            <div className={styles.line}>
              <hr />
            </div>
            <div className={styles.line}>
              <hr />
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.left}>
            <div className={styles.detay_icon}>
              <SiAutomattic />
              <span>{car.km}</span>
            </div>
            <div className={styles.detay_icon}>
              <MdOutlineAirlineSeatReclineExtra />
              <span>{car.seat} Persons</span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.detay_icon}>
              <GiGearStickPattern />
              <span>{car.gear}</span>
            </div>
            <div className={styles.detay_icon}>
              <BsBag />
              <span>{car.bag} Bags</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card_footer}>
        <button
          className={favorite ? styles.active_card_btn : styles.card_btn}
          onClick={() => setFavorite(!favorite)}
        >
          BOOK NOW
        </button>
        <div>
          {favorite ? (
            <BsHeartFill
              className={styles.active_icon}
              onClick={() => setFavorite(!favorite)}
            />
          ) : (
            <BsHeart
              className={styles.icon}
              onClick={() => setFavorite(!favorite)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
