import Toolbar from "../../components/toolbar";
import Header from "../../components/header";
import styles from "./style.module.scss";

export default () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.body}>
        <h5>media body</h5>
      </div>
      <Toolbar className={styles.toolbar} />
    </div>
  );
};
