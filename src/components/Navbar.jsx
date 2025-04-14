import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close, profileImage } from "../assets";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [active, setActive] = React.useState("");
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        <Link
          to="/"
          className={styles.logoWrapper}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={profileImage} alt="logo" className={styles.logoImg} />
          <p className={styles.logoText}>
            Shin Jeongyeob <span className={styles.logoSubText}>| Dev</span>
          </p>
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <li
              key={`${link.id}-${index}`}
              className={`${styles.navItem} ${
                active === link.title ? styles.active : ""
              }`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className={styles.mobileIcon}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={styles.menuIcon}
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${styles.mobileMenu} ${
              toggle ? styles.show : styles.hide
            }`}
          >
            <ul className={styles.mobileMenuList}>
              {navLinks.map((link, index) => (
                <li
                  key={`${link.id}-${index}`}
                  className={`${styles.mobileNavItem} ${
                    active === link.title ? styles.active : ""
                  }`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
