import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Hadhaan</h3>
      <button className={styles.btn}>Login</button>
    </div>
  );
};

export default Header;
