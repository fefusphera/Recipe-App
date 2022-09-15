import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      {/* <ul>
        <li>Home</li>
        <li>Catalog</li>
      </ul> */}
      <Link to="/" className={styles.li}>
        Home
      </Link>
      <Link to="/catalogo" className={styles.li}>
        Catalogue
      </Link>
    </div>
  );
};

export default Navbar;
