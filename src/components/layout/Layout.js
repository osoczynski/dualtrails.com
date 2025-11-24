import styles from "@/styles/Layout.module.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function Layout(props) {
  const router = useRouter();
  const locale = router.locale;

  const languageChange = (l) => {
    const path = router.asPath;
    router.push(path, path, { locale: l });
    Cookies.set("language", l);
  };

  return (
    <div>
      {/*<Navigation languageChange={languageChange} locale={locale} />*/}
      <div className={styles.layout}>{props.children}</div>
      {/* <Footer locale={locale} /> */}
    </div>
  );
}

export default Layout;
