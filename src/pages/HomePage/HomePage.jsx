import styles from "./index.module.scss";
// import Navbar from "../Navbar";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      {/* <Navbar /> */}
      {/* <h1 className={styles.Title}>Home</h1> */}
      <p className={styles.Paragraph}>Browse our catalogue to get started</p>
      <img
        className={styles.HomePageImg}
        src="https://t4.ftcdn.net/jpg/00/39/88/01/360_F_39880142_LKhikUlSj863r3V1O5dCVJgrQrt1PTHa.jpg"
        alt=""
      />
      <p className={styles.ParagraphHappy}>Happy Cooking!</p>
    </div>
  );
};

export default HomePage;
