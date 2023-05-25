import { motion } from "framer-motion";

import { fadeDown, fadeUp } from "../../const/transition";

import "./light.scss";

import video from "./../../assets/video/light-bg.mp4";
import imgQr from "./../../assets/img/light-qr.png";

function Light() {
  return (
    <motion.section className="light" viewport={{ amount: 0.35, once: true }} initial="hidden" whileInView="visible">
      <div className="light__content">
        <div className="light__img-content">
          <div className="light__img-block">
            <motion.video
              custom={1}
              variants={fadeUp}
              autoPlay
              loop
              muted
              src={video}
              className="light__img"
            ></motion.video>
          </div>
        </div>
        <div className="light__text-content">
          <div className="light__text-block">
            <motion.div custom={2} variants={fadeDown} className="light__text-item">
              <h5 className="light__title">Включайте из приложения в одно касание</h5>
              <p className="light__text-description">
                Детальная настройка и удобные виджеты — в отдельном приложении Дом с Алисой
              </p>
              <div className="light__download">Скачайте Дом с Алисой</div>
              <img src={imgQr} alt="QR код" />
            </motion.div>
            <motion.div custom={3} variants={fadeUp} className="light__text-item">
              <h5 className="light__title-cmd">—Алиса, включи свет</h5>
            </motion.div>
            <motion.div custom={4} variants={fadeDown} className="light__text-item">
              <h5 className="light__title">Управляйте голосом</h5>
              <p className="light__text-description">
                Просто говорите Алисе, что делать, — и она будет включать свет и выполнять другие команды
              </p>
              <h5 className="light__title">Создавайте сценарии</h5>
              <p className="light__text-description">
                Например, чтобы по одной команде гас свет, затихал пылесос и включались звуки леса
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Light;
