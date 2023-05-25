import { motion } from "framer-motion";

import BtnSolid from "../Buttons/btn-solid";
import BtnBorder from "../Buttons/btn-border";

import { fadeRight } from "../../const/transition";

import imgSmartHome1 from "./../../assets/img/smart-home-1.jpg";
import imgSmartHome2 from "./../../assets/img/smart-home-2.jpg";
import imgSmartHome3 from "./../../assets/img/smart-home-3.jpg";
import imgSmartHome4 from "./../../assets/img/smart-home-4.jpg";
import cleaner from "./../../assets/img/cleaner.gif";
import socket from "./../../assets/img/socket.gif";

import "./smart-home.scss";

function SmartHome() {
  return (
    <motion.section
      className="smart-home"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="smart-home__content">
        <div className="container-title">
          <div className="smart-home__header">
            <motion.h3 variants={fadeRight} custom={1} className="title smart-home__title">
              Умный дом
            </motion.h3>
            <motion.h4 variants={fadeRight} custom={2} className="description">
              Сделайте Станцию центром умного дома с Алисой — и он будет слушаться вашего голоса
            </motion.h4>
          </div>
        </div>
        <div className="container">
          <div className="smart-home__group">
            <div className="smart-home__row">
              <div className="smart-home__column">
                <motion.div variants={fadeRight} custom={4} className="smart-home__block">
                  <h5 className="smart-home__label">Устройства Zigbee</h5>
                  <p className="smart-home__text-description">
                    Встроенный хаб управления Zigbee позволяет таким устройствам общаться с колонкой напрямую, без
                    интернета — и быстрее реагировать на ваши команды.
                  </p>
                  <BtnSolid title="Посмотреть" url="ya.ru" classBtn="smart-home__btn" />
                  <a href="https://ya.ru/" className="smart-home__link">
                    Все поддерживаемые категории устройств
                  </a>
                  <div className="smart-home__bg-img">
                    <img src={imgSmartHome1} alt="Умный дом 1" />
                  </div>
                </motion.div>
              </div>
              <motion.div variants={fadeRight} custom={6} className="smart-home__column smart-home__column_first">
                <h5 className="smart-home__subtitle">Экономия электроэнергии</h5>
                <p className="smart-home__subdescription">
                  Датчики и другие устройства работают от батареек, которых хватает надолго
                </p>
                <div className="smart-home__bg-img">
                  <img src={imgSmartHome2} alt="Умный дом 2" />
                </div>
              </motion.div>
              <motion.div variants={fadeRight} custom={8} className="smart-home__column smart-home__column_second">
                <h5 className="smart-home__subtitle">Простое подключение</h5>
                <p className="smart-home__subdescription">Достаточно попросить: «Алиса, найди устройство»</p>
                <a href="https://ya.ru/" className="smart-home__link">
                  Подробнее
                </a>
                <div className="smart-home__bg-img">
                  <img src={imgSmartHome3} alt="Умный дом 3" />
                </div>
              </motion.div>
              <motion.div variants={fadeRight} custom={10} className="smart-home__column smart-home__column_second">
                <h5 className="smart-home__subtitle">Быстрое управление</h5>
                <p className="smart-home__subdescription">
                  Команды от колонки передаются устройствам напрямую, не через облако
                </p>
                <p className="smart-home__subdescription">Алиса, какая температура в квартире?</p>
                <div className="smart-home__bg-img">
                  <img src={imgSmartHome4} alt="Умный дом 4" />
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }}>
            <motion.div variants={fadeRight} custom={1} className="smart-home__other-devices">
              <div className="smart-home__other-title-block">
                <h5 className="smart-home__other-title">Тысячи других устройств</h5>
                <BtnBorder title="Посмотреть" url="ya.ru" classBtn="smart-home__btn-border" />
              </div>
              <p className="smart-home__other-description">
                Работает по Wi-Fi с лампочками, чайниками, пылесосами и другими устройствами самых разных
                производителей.
              </p>
              <img src={cleaner} alt="Пылесос" className="smart-home__cleaner-img" />
              <img src={socket} alt="Розетка" className="smart-home__socket" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default SmartHome;
