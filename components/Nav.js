import styles from "../styles/Nav.module.css";
import { BsTelephone, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdEmail, MdOutlineSearch } from "react-icons/md";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const toggleButton = () => {
    const navbar = document.getElementById("navbar");
    const navList = document.getElementById("navi_list");
    const navListItems = document.getElementById("navi_list_items");
    const loginBtn = document.getElementById("log_btn");
    let lis = document
      .getElementById("navi_list_items")
      .getElementsByTagName("li");

    if (navList.style.display === "block") {
      navbar.style.height = "70px";
      navList.style.display = "none";
    } else {
      navList;
      navbar.style.height = "394px";
      navList.style.display = "block";
      navListItems.style.display = "block";
      loginBtn.style.display = "block";
      loginBtn.style.margin = "0 auto";
      Array.from(lis).map((li) => {
        li.style.textAlign = "center";
      });
    }
  };
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.menu_container}>
          <div className={styles.left_items}>
            <ul>
              <li>
                <BsTelephone className="mr_5" />
                <span>(369) 2900 4800</span>
              </li>
              <li>
                <MdEmail className="mr_5" />
                <span>support@domain.com</span>
              </li>
            </ul>
          </div>
          <div className={styles.right_items}>
            <ul>
              <li>
                <BsTwitter />
              </li>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagramSquare />
              </li>
              <li>
                <BsYoutube />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className={styles.navbar} id="navbar">
        <div className={styles.navbar_container}>
          <div className={styles.logo}>
            <Image src="/sport-car.png" alt="logo" width={100} height={70} />
            <div className={styles.logo_text}>
              <h1>LIMOREX</h1>
              <span>AUTO RENTALS</span>
            </div>
          </div>
          <div className={styles.menu_items} id="navi_list">
            <ul id="navi_list_items">
              <li className={styles.active}>
                <Link href="#">
                  <a>HOME</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>ABOUT</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>GALLERY</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>FLEET</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>NEWS</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>CONTACT</a>
                </Link>
              </li>
              <li className={styles.search}>
                <Link href="#">
                  <a>
                    <MdOutlineSearch className={styles.icon} />
                  </a>
                </Link>
              </li>
            </ul>
            <button className={styles.login_btn} id="log_btn">
              Login / Register
            </button>
          </div>
          <div className={styles.menu_bar} onClick={toggleButton}>
            <div className={styles.menu_line}></div>
            <div className={styles.menu_line}></div>
            <div className={styles.menu_line}></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
