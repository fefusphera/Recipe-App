import styles from "./index.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.ErrorPage}>
      {/* <h1>please check another page</h1> */}
      <img
        className={styles.ErrorImg}
        src="https://pbs.twimg.com/media/FNagTqKXsAA_f3b?format=jpg&name=medium"
        alt="error"
      />
    </div>
  );
};

export default ErrorPage;
