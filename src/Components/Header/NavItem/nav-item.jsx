import "./nav-item.scss";

export default function NavItem({ item }) {
  return (
    <li className="header__menu-item">
      <a href={item.url} className="header__link">
        {item.title}
      </a>
    </li>
  );
}
