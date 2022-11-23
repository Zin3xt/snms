import Link from "next/link";
import navStyles from "../styles/Navigation.module.css";
import DarkSwitch from "./DarkSwitch";
const Nav = () => {
  return (
    <div className="position-relative">
      {/* <nav className={navStyles.nav}> */}
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li id="about">
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/table">table</Link>
          </li>
        </ul>
      </nav>
      <DarkSwitch />
    </div>
  );
};

export default Nav;
