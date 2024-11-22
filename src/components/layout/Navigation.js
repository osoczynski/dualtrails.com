import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Navigation.module.css";
import Logo from "../../assets/logoblack.png";

import CartButton from "./CartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Cart from "../cart/Cart";

function Navigation(props) {
  const locale = props.locale;

  const handleLanguageChange = () => {
    if (locale === "pl") {
      props.languageChange("en");
    } else {
      props.languageChange("pl");
    }
  };
  const [navClick, setNavClick] = useState(false);
  const handelNavClick = () => {
    if (cartClick) setCartClick(!cartClick);
    setNavClick(!navClick);
  };
  const [cartClick, setCartClick] = useState(false);
  const handelCartClick = () => {
    if (navClick) setNavClick(!navClick);
    setCartClick(!cartClick);
  };
  const handleLogoClick = () => {
    if (navClick) setNavClick(!navClick);
    if (cartClick) setCartClick(!cartClick);
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.hamburger} onClick={handelNavClick}>
        {navClick ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>

      <div className={styles.navbarImage} onClick={handleLogoClick}>
        <Link href="/">
          <Image
            src={Logo}
            alt="logoimg"
            width={630}
            height={224}
            priority={true}
          />
        </Link>
      </div>

      <div className={`${styles.backdrop} ${navClick ? styles.active : ""}`}>
        <ul className={`${styles.navbarMenu} ${navClick ? styles.active : ""}`}>
          <li>
            <Link href="/products" onClick={handelNavClick}>
              {locale === "en" ? "products" : "produkty"}
            </Link>
          </li>
          {/* <li>
            <Link href="/cracworx" onClick={handelNavClick}>
              cracworx
            </Link>
          </li>
          <li>
            <Link href="/about-us" onClick={handelNavClick}>
              {locale === "en" ? "about us" : "o nas"}
            </Link>
          </li> */}
        </ul>
      </div>
      <div className={styles.languageAndCart}>
        <div className={styles.globe} onClick={handleLanguageChange}>
          <FontAwesomeIcon icon={faGlobe} />
          <p>{locale}</p>
        </div>
        <CartButton onClick={handelCartClick} />
      </div>
      <Cart
        clicked={cartClick}
        onHide={handelCartClick}
        locale={props.locale}
      />
    </nav>
  );
}

export default Navigation;
