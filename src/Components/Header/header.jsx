import NavItem from "./NavItem/nav-item";
import logo from "./../../assets/img/logo.svg";
import logo2 from "./../../assets/img/logo-2.svg";
import BtnSolid from "../Buttons/btn-solid";

import "./header.scss";
import { useState } from "react";

const url = "https://yandex.ru/alice/station-gen2";

export default function Header({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__left">
            <div onClick={() => setIsOpen(!isOpen)} className={`header__burger ` + (isOpen ? `active` : ``)}>
              <span></span>
            </div>
            <a href={url} className="header__logo">
              <img src={logo} alt="Яндекс Станция" className="header__logo_big" />
              <img src={logo2} alt="Яндекс Станция" className="header__logo_small" />
            </a>
          </div>
          <ul className={`header__center ` + (isOpen ? `active` : ``)}>
            {navItems.map((item) => {
              return <NavItem key={item.id} item={item} />;
            })}
          </ul>
          <div className="header__right">
            <BtnSolid title="Купить" url="ya.ru" classBtn="header__btn" />
          </div>
        </div>
      </div>
    </nav>
  );
}
