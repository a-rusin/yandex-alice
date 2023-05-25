import { motion } from "framer-motion";

import "./audio.scss";
import video from "./../../assets/video/audio.mp4";
import bgVideo from "./../../assets/video/audio-bg.mp4";

import { fadeRight, fadeLeft } from "../../const/transition";

function Audio() {
  return (
    <motion.section viewport={{ amount: 0.4, once: true }} initial="hidden" whileInView="visible" className="audio">
      <div className="audio__content">
        <div className="audio__bg-block">
          <motion.video
            custom={3}
            variants={fadeRight}
            autoPlay
            loop
            muted
            src={bgVideo}
            className="audio__bg-img"
          ></motion.video>
          <motion.video
            custom={3}
            variants={fadeLeft}
            autoPlay
            loop
            muted
            src={video}
            className="audio__alice-img"
          ></motion.video>
        </div>

        <div className="audio__text-block">
          <div className="container-title">
            <motion.h3 variants={fadeRight} custom={1} className="title audio__title">
              Звук
            </motion.h3>
            <motion.h4 variants={fadeRight} custom={2} className="description audio__description">
              Слушайте любимую музыку с чистым объёмным звучанием, куда бы ни поставили колонку
            </motion.h4>
            <motion.p variants={fadeRight} custom={3} className="audio__label">
              Апериодическая решётка
            </motion.p>
            <motion.p variants={fadeRight} custom={4} className="audio__text">
              Защищает звук от искажений при воспроизведении
            </motion.p>
            <motion.p variants={fadeRight} custom={5} className="audio__label">
              Room Correction
            </motion.p>
            <motion.p variants={fadeRight} custom={6} className="audio__text">
              Подстраивает звучание под размеры и форму помещения
            </motion.p>
            <motion.p variants={fadeRight} custom={7} className="audio__label">
              30 Вт
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Audio;
