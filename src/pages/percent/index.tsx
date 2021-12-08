import Toolbar from "../../components/toolbar";
import Header from "../../components/header";
import styles from "./style.module.scss";

export default () => {
  return (
    <div className={styles.container}>
      <Header style={{ height: "10%" }} />
      <div className={styles.body}>
        <h5>flex body</h5>
      </div>
      <Toolbar style={{ height: "10%" }} />
    </div>
  );
};
