import { motion } from "framer-motion";

import { fadeRight, fadeLeft } from "../../const/transition";

import "./sale.scss";
import logo from "./../../assets/img/logo.svg";
import video from "./../../assets/video/sale.mp4";

function Sale() {
  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ amount: 0.4, once: true }} className="sale">
      <div className="sale__content">
        <div className="sale__text-block">
          <div className="container-title">
            <div className="sale__block">
              <motion.img custom={1} variants={fadeRight} src={logo} alt="Лого" className="sale__logo" />
              <motion.h4 custom={2} variants={fadeRight} className="sale__title">
                Умная колонка второго поколения
              </motion.h4>
              <div className="sale__btns-group">
                <motion.a custom={3} variants={fadeRight} href="https://ya.ru/" className="btn sale__btn-buy">
                  Купить за 16 990 ₽*
                </motion.a>
                <motion.a
                  custom={4}
                  variants={fadeRight}
                  href="https://ya.ru/"
                  className="border-btn sale__btn-compare"
                >
                  Сравнить с другими
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        <div className="sale__img-block">
          <motion.video variants={fadeLeft} custom={1} autoPlay loop muted playsInline className="sale__bg-img">
            <source src={video} type="video/mp4" />
          </motion.video>
        </div>
      </div>
    </motion.section>
  );
}

export default Sale;
