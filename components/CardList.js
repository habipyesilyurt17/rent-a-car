import styles from "../styles/CardList.module.css";
import Card from "./Card";
import Image from "next/image";

const CardList = ({ cars }) => {
  return (
    <>
      <div className={styles.choose}>
        <div className={styles.choose_container}>
          <div className={styles.logo}>
            <div className={styles.line}>
              <hr />
              <hr />
            </div>
            <Image src="/sport-car.png" alt="logo" width={100} height={100} />
            <div className={styles.line}>
              <hr />
              <hr />
            </div>
          </div>
          <h1 className={styles.choose_title}>CHOOSE YOUR CAR</h1>
          <p className={styles.choose_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta animi
            excepturi accusamus officia iure deleniti reiciendis dignissimos
            laboriosam eaque obcaecati cupiditate
          </p>
          <div className={styles.choose_options}>
            <button className={styles.active}>LATEST DEALS</button>
            <button>ECONOMY CLASS</button>
            <button>PREMIUM CLASS</button>
          </div>
        </div>
      </div>
      <div className={styles.card_list}>
        <div className={styles.card_list_container}>
          {cars.map((car) => (
            <Card car={car} key={car.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
