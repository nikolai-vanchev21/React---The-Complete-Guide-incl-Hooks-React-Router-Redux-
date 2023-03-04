import styles from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}>
            Your Cart
            </HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} />
      </div>
    </>
  );
};

export default Header;
