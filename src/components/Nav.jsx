import css from "../components/Nav.module.css";
import logo from "../../public/Logo/Group.svg";
import dark from "../../public/Logo/theme.svg";
import menu from "../../public/Logo/Menu.svg";

function Nav() {
  return (
    <div className={css["nav-bar"]}>
      <div className={css["img-container"]}>
        <img src={logo} alt="logo" />
      </div>
      <div className={css["img-right"]}>
        <img src={dark} alt="dark" />
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
}

export default Nav;
