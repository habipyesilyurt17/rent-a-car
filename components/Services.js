import styles from "../styles/Services.module.css";
import { BsArrowRightShort } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <div className={styles.testimonial}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/customer-support.png" alt="Sample photo" />
            <div className={styles.card_body}>
              <h5 className={styles.card_title}>
                We Offer 24/7 <br /> Customer Support
              </h5>
              <p className={styles.card_text}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className={styles.link}>
                <a href="#" className={styles.card_link}>
                  <span>READ MORE</span>
                </a>
                <div className={styles.icon}>
                  <BsArrowRightShort size={25} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img src="/latest-auto.png" alt="Sample photo" />
            <div className={styles.card_body}>
              <h5 className={styles.card_title}>
                Latest Auto <br /> Models Available
              </h5>
              <p className={styles.card_text}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className={styles.link}>
                <a href="#" className={styles.card_link}>
                  <span>READ MORE</span>
                </a>
                <div className={styles.icon}>
                  <BsArrowRightShort size={25} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img src="/car-location.png" alt="Sample photo" />
            <div className={styles.card_body}>
              <h5 className={styles.card_title}>
                Lots Of Easily <br /> Car Hire Locations
              </h5>
              <p className={styles.card_text}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className={styles.link}>
                <a href="#" className={styles.card_link}>
                  <span>READ MORE</span>
                </a>
                <div className={styles.icon}>
                  <BsArrowRightShort size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
