import { useState } from "react";
import { motion } from "framer-motion";

import { slideNavItems } from "../../const/slideNavItems";
import { fadeRight, fadeUp } from "../../const/transition";

import "./design.scss";

function Design() {
  const [slideNav, setSlideNav] = useState(slideNavItems);

  function onClickSliderNav(id) {
    setSlideNav((prev) => {
      return prev.map((item) => {
        item.active = false;
        if (item.id === id) {
          item.active = true;
        }
        return item;
      });
    });
  }

  function getActiveSlide() {
    return slideNav.filter((item) => item.active)[0].id;
  }

  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ amount: 0.35, once: true }} className="design">
      <div className="design__content">
        <div className="container-title design__title">
          <motion.h3 custom={0} variants={fadeRight} className="title">
            Дизайн
          </motion.h3>
          <motion.h4 custom={1} variants={fadeRight} className="description">
            Преемственность форм, световая панель управления и четыре новых цвета
          </motion.h4>
        </div>
        <div className="container">
          <div className="design__main-block">
            <motion.div
              custom={1}
              variants={fadeUp}
              className="design__slider"
              style={{ left: `-${getActiveSlide() * 100}%` }}
            >
              {slideNavItems.map((item, index) => {
                return (
                  <img
                    key={item.id}
                    src={item.img}
                    alt={`Слайд номер ${index + 1}`}
                    className="design__bg-img"
                    style={{ left: `${100 * index}%` }}
                  />
                );
              })}
            </motion.div>
            <div className="design__text">
              <motion.p custom={3} variants={fadeRight} className="design__title-text">
                Свет
              </motion.p>
              <motion.p custom={4} variants={fadeRight} className="design__title-description">
                Полноценная световая панель управления вместо канонического кольца Алисы
              </motion.p>
              <motion.p custom={5} variants={fadeRight} className="design__title-text">
                Ткань
              </motion.p>
              <motion.p custom={6} variants={fadeRight} className="design__title-description">
                Более сложное плетение ткани, которое подходит под разный интерьер
              </motion.p>
              <motion.p custom={7} variants={fadeRight} className="design__title-text">
                Форма
              </motion.p>
              <motion.p custom={8} variants={fadeRight} className="design__title-description">
                Узнаваемая форма и более изящный эмоциональный силуэт
              </motion.p>
            </div>
          </div>
          <motion.div
            className="design__slider-nav"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.35, once: true }}
          >
            {slideNav.map((item, index) => {
              let classes = item.active
                ? `design__nav-item design__nav-item_${item.classStyle} active`
                : `design__nav-item design__nav-item_${item.classStyle}`;
              return (
                <motion.div
                  key={item.id}
                  custom={index + 1}
                  variants={fadeUp}
                  className={classes}
                  onClick={() => onClickSliderNav(item.id)}
                ></motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Design;
