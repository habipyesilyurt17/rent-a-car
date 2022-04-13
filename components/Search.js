import styles from "../styles/Search.module.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Search = () => {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.search_content}>
          <div className={styles.search_title}>
            <div className={styles.starts}>
              <div className={styles.line}></div>
              <div className={styles.price_text}>
                <span className={styles.star_white}>&#9733;</span>
                <span className={styles.star_red}>&#9733;</span>
                <span className={styles.star_white}>&#9733;</span>
              </div>
              <div className={styles.line}></div>
            </div>
            <p>
              FIND YOUR <br /> PERFECT CAR
            </p>
          </div>
          <div className={styles.search_inputs}>
            <input
              type="text"
              className={styles.icon_location}
              placeholder="Pickup Location"
            />
            <input
              type="text"
              className={styles.icon_location}
              placeholder="Drop-Off Location"
            />
            <input
              type="text"
              className={styles.icon_calender}
              placeholder="Pickup Date/Time"
            />
            <input
              type="text"
              className={styles.icon_calender}
              placeholder="Drop-Off Date/Time"
            />
          </div>
          <div className={styles.search_button}>
            <button>
              <FaChevronCircleRight />
              <br />
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
