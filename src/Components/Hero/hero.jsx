import { motion } from "framer-motion";

import { fadeUp } from "../../const/transition";

import "./hero.scss";

import video from "./../../assets/video/alice-hero.mp4";

function Hero() {
  return (
    <motion.section className="hero" viewport={{ amount: 0.2, once: true }} initial="hidden" whileInView="visible">
      <div className="hero__content">
        <motion.h1 custom={1} variants={fadeUp} className="hero__title title">
          Новая Яндекс Станция
        </motion.h1>
        <motion.h2 custom={2} variants={fadeUp} className="hero__subtitle">
          Умная колонка второго поколения с лаконичным дизайном и чистым звуком станет центром вашего умного дома
          с Алисой
        </motion.h2>
        <div className="hero__img-content">
          <motion.video
            custom={3}
            variants={fadeUp}
            autoPlay
            loop
            muted
            src={video}
            className="hero__img"
          ></motion.video>
        </div>
        <div className="hero__btn">
          <motion.a custom={4} variants={fadeUp} href="yandex.ru" className="hero__link">
            <svg
              className="hero__play-icon"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 13.1484V2.85165C0 0.713874 2.32997 -0.608488 4.16535 0.487638L12.7858 5.63599C14.5747 6.70436 14.5747 9.29564 12.7859 10.364L4.16535 15.5124C2.32998 16.6085 0 15.2861 0 13.1484Z"
                fill="#161616"
              />
            </svg>

            <div className="hero__btn-text">Смотреть видео</div>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
