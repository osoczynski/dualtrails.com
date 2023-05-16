import styles from "@/styles/Layout.module.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <Navigation />
      <div className={styles.layout}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
