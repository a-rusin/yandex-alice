import { motion } from "framer-motion";

import { fadeRight, fadeUp } from "../../const/transition";

import logo from "./../../assets/img/logo-2.svg";
import bg from "./../../assets/img/alice-bg.png";

import "./alice.scss";

function Alice() {
  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ amount: 0.35, once: true }} className="alice">
      <div className="alice__content">
        <div className="container-title alice__header">
          <div className="alice__titles">
            <motion.h3 custom={1} variants={fadeRight} className="title">
              Алиса
            </motion.h3>
            <motion.h4 custom={2} variants={fadeRight} className="description">
              Голосовой помощник, который понимает вас, помогает в делах и знает, что вы любите
            </motion.h4>
          </div>
          <div className="alice__logo">
            <motion.img custom={3} variants={fadeRight} src={logo} alt="Логотип" />
          </div>
        </div>
        <div className="alice__block container-title">
          <div className="alice__group">
            <div className="alice__cmds">
              <motion.h5 custom={4} variants={fadeRight} className="alice__alice-name">
                — Алиса…
              </motion.h5>
              <motion.p custom={5} variants={fadeRight} className="alice__cmd">
                Включи музыку везде
              </motion.p>
              <motion.p custom={6} variants={fadeRight} className="alice__cmd alice__cmd-opacity_hight">
                Напомни погулять с собакой через полчаса
              </motion.p>
              <motion.p custom={7} variants={fadeRight} className="alice__cmd alice__cmd-opacity_medium">
                Поставь будильник на 7 утра
              </motion.p>
              <motion.p custom={8} variants={fadeRight} className="alice__cmd alice__cmd-opacity_low">
                Приглуши свет
              </motion.p>
            </div>
            <div className="alice__info">
              <motion.p custom={9} variants={fadeRight} className="alice__title-icon">
                Шепот
              </motion.p>
              <motion.p custom={10} variants={fadeRight} className="alice__text">
                Когда все уснут, можно пошептаться. Для этого достаточно понизить голос — Алиса подхватит.
              </motion.p>
            </div>
          </div>
        </div>

        <motion.div className="alice__bg-img" variants={fadeUp} custom={0}>
          <img src={bg} alt="Алиса" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Alice;
