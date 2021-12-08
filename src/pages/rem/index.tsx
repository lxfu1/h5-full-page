import Toolbar from "../../components/toolbar";
import Header from "../../components/header";
import styles from "./style.module.scss";

export default () => {
  return (
    <div className={styles.container}>
      <Header style={{ height: "6rem" }} />
      <div className={styles.body}>
        <h5>rem body</h5>
      </div>
      <Toolbar style={{ height: "6rem" }} />
    </div>
  );
};
