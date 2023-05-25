import { motion } from "framer-motion";

import "./footer.scss";

const textAnimation = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "tween",
      ease: "easeOut",
    },
  },
};

function Footer() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="footer__content"
    >
      <motion.div className="footer__group" variants={textAnimation}>
        <p className="footer__text">0+</p>
        <p className="footer__text">Для предзаказа доступна колонка в цвете «антрацит».</p>
        <p className="footer__text">Продавец устройств на Яндекс Маркете: ООО «Простор», ОГРН 1127747074377,</p>
        <p className="footer__text">
          ул. Выборгская, дом 22, строение 2, комната № 4 Б, г. Москва, 125130. Цена в других магазинах может
          отличаться.
        </p>
        <p className="footer__text">
          1 Весь аудиоконтент, кроме радио, колонка проигрывает при наличии активной подписки Яндекс Плюс или иной,
          её включающей.
        </p>
        <p className="footer__text">
          2 Для управления умным домом нужны устройства, которые работают с Алисой. Подробнее:
          <a href="https://yandex.ru/alice/smart-home">https://yandex.ru/alice/smart-home</a>
        </p>
      </motion.div>
      <motion.p variants={textAnimation} className="footer__text">
        © 2015–2023 Яндекс
      </motion.p>
    </motion.div>
  );
}

export default Footer;
