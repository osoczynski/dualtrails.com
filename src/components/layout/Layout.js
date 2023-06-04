import styles from "@/styles/Layout.module.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function Layout(props) {
  const { locale, locales, push } = useRouter();

  const languageChange = (l) => {
    push("/", undefined, { locale: l });
    Cookies.set("language", l);
  };

  return (
    <div>
      <Navigation languageChange={languageChange} locale={locale} />
      <div className={styles.layout}>{props.children}</div>
      <Footer locale={locale} />
    </div>
  );
}

export default Layout;
