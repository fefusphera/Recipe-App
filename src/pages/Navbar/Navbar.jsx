import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.MainNavbar}>
      {/* <img
        src="https://im.ezgif.com/tmp/ezgif-1-da85a17f5b.png"
        alt="logo"
        className={styles.NavbarImg}
      /> */}
      <div className={styles.Navbar}>
        <Link to="/" className={styles.li}>
          Home
        </Link>
        <Link to="/catalogo" className={styles.li}>
          Catalogue
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
