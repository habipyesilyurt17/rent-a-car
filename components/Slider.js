import { Pagination, Autoplay, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "../styles/Slider.module.css";

const Slider = () => {
  const sliderItems = [
    {
      src: "/slider1.jpg",
      title: "WELCOME TO LIMOREX",
      subtitle: "Drive The Car You Ever Dream",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, corrupti?",
      key: "1",
    },
    {
      src: "/slider2.jpg",
      title: "WELCOME TO LIMOREX 2",
      subtitle: "You Ever Dream",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis minus sint accusamus nesciunt quae libero quisquam iusto quod deserunt!",
      key: "2",
    },
    {
      src: "/slider3.jpg",
      title: "WELCOME TO LIMOREX 3",
      subtitle: "Drive The Car",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis minus sint accusamus",
      key: "3",
    },
  ];
  return (
    <div className={styles.slider}>
      <div className={styles["slider-container"]}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            horizontalClass: styles.swiper_pagination,
            bulletClass: styles.swiper_pagination_bullet,
            bulletActiveClass: styles.swiper_pagination_bullet_active,
          }}
          parallax={true}
          modules={[Autoplay, Pagination, Parallax]}
          cssMode={true}
          className={styles.mySwiper}
        >
          {sliderItems.map((item) => (
            <SwiperSlide key={item.key}>
              <div className={styles.slider_content}>
                <div className={styles.slider_overlay}>
                  <div className={styles.slider_wrapper}>
                    <h5 className={styles.title}>{item.title}</h5>
                    <h1 className={styles.subtitle}>{item.subtitle}</h1>
                    <div className={styles.text}>
                      <p>{item.text}</p>
                    </div>
                    <button>View Our Fleet</button>
                  </div>
                </div>
              </div>
              <img
                src={item.src}
                alt="car,rent-a-car"
                className={styles["slider-img"]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
