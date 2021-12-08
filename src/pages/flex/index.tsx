import Toolbar from "../../components/toolbar";
import Header from "../../components/header";
import styles from "./style.module.scss";

export default () => {
  return (
    <div className={styles.container}>
      <Header style={{ height: "60px" }} />
      <div className={styles.body}>
        {/* flex-grow start */}
        <div style={{ height: 400, flex: 1, border: "1px solid red" }}>
          flex: 1
        </div>
        <div style={{ height: 400, flex: 2, border: "1px solid green" }}>
          flex: 2
        </div>

        {/* grandson no limit，导致无法触发 resize */}
        {/* <div style={{ height: 100, border: "1px solid pink" }}>children1</div>
        <div style={{ flex: 1, border: "1px solid red" }}>
          <div style={{ height: 200 }}>grandson1</div>
        </div>
        <div style={{ flex: 1, border: "1px solid green" }}>
          <div style={{ height: 300 }}>grandson2</div>
        </div>
        <div style={{ flex: 1, border: "1px solid yellow" }}>
          <div style={{ height: 400 }}>grandson3</div>
        </div> */}
        {/* grandson limit，导致无法触发 resize */}
        {/* <div style={{ height: 100, border: "1px solid pink" }}>children1</div>
        <div style={{ flex: 1, height: 1, border: "1px solid red" }}>
          <div style={{ height: 200 }}>grandson1</div>
        </div>
        <div style={{ flex: 1, height: 1, border: "1px solid green" }}>
          <div style={{ height: 300 }}>grandson2</div>
        </div>
        <div style={{ flex: 1, height: 1, border: "1px solid yellow" }}>
          <div style={{ height: 400 }}>grandson3</div>
        </div> */}
        {/* flex-grow end */}

        {/* flex-shrink start */}
        {/* <div style={{ height: 500, flexShrink: 1, border: "1px solid red" }}>
          children1
        </div>
        <div style={{ height: 500, flexShrink: 3, border: "1px solid green" }}>
          children2
        </div> */}
        {/* flex-shrink end */}

        {/* flex-basic start */}
        {/* <div style={{ flexGrow: 1, flexBasis: 60, border: "1px solid red" }}>
          children1
        </div>
        <div style={{ flexGrow: 1, flexBasis: 100, border: "1px solid green" }}>
          children2
        </div> */}
        {/* flex-basic end */}
      </div>
      <Toolbar style={{ height: "60px", position: "inherit" }} />
    </div>
  );
};
