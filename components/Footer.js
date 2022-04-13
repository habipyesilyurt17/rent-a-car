import styles from "../styles/Footer.module.css";
import { BsArrowRightShort } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.card_overlay}>
        <div className={styles.subscribe}>
          <p>Signup For News & Discounts</p>
          <input placeholder="Enter Email Address" />
          <a href="#" className={styles.subscribe_btn}>
            <HiMailOpen /> <span>Subscribe</span>
          </a>
        </div>
        <div className={styles.links}>
          <div className={styles.link_item}>
            <div className={styles.link_item_title}>About Us</div>
            <div className={styles.link_item_hr}>
              <hr className={styles.hr_first} />
              <hr className={styles.hr_second} />
            </div>
            <div className={styles.link_item_body}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, assumenda! Quas repellat in temporibus eligendi minima
                architecto laudantium quibusdam aut porro dolore ducimus, illum
                amet mollitia at, adipisci cupiditate aperiam.
              </p>
              <div className={styles.link}>
                <a href="#">READ MORE</a>
                <div className={styles.icon}>
                  <BsArrowRightShort size={25} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.link_item}>
            <div className={styles.link_item_title}>Our Services</div>
            <div className={styles.link_item_hr}>
              <hr className={styles.hr_first} />
              <hr className={styles.hr_second} />
            </div>
            <div className={styles.link_item_body}>
              <a href="#" className={styles.item_link}>
                Rent a Car
              </a>
              <a href="#" className={styles.item_link}>
                Combined Tours
              </a>
              <a href="#" className={styles.item_link}>
                Wedding Car Hire
              </a>
              <a href="#" className={styles.item_link}>
                New & Used Cars
              </a>
              <a href="#" className={styles.item_link}>
                Airport Transportation
              </a>
            </div>
          </div>
          <div className={styles.link_item}>
            <div className={styles.link_item_title}>Quick Links</div>
            <div className={styles.link_item_hr}>
              <hr className={styles.hr_first} />
              <hr className={styles.hr_second} />
            </div>
            <div className={styles.link_item_body}>
              <a href="#" className={styles.item_link}>
                About Limorex
              </a>
              <a href="#" className={styles.item_link}>
                Autos Gallery
              </a>
              <a href="#" className={styles.item_link}>
                Our vehicles
              </a>
              <a href="#" className={styles.item_link}>
                Latest News
              </a>
              <a href="#" className={styles.item_link}>
                Get In Touch
              </a>
            </div>
          </div>
          <div className={styles.link_item}>
            <div className={styles.link_item_title}>Inventory</div>
            <div className={styles.link_item_hr}>
              <hr className={styles.hr_first} />
              <hr className={styles.hr_second} />
            </div>
            <div className={styles.link_item_body}>
              <a href="#" className={styles.item_link}>
                Car by Make
              </a>
              <a href="#" className={styles.item_link}>
                Car by Body Style
              </a>
              <a href="#" className={styles.item_link}>
                Car by Price
              </a>
              <a href="#" className={styles.item_link}>
                Car by Type
              </a>
            </div>
          </div>
        </div>
        <div className={styles.foter_desc}>
          (c) 2020&nbsp;&nbsp;<b className={styles.bold_text}>LIMOREX</b>&nbsp;
          Car Hire Service. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
