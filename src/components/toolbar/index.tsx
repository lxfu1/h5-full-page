import { NavLink } from "react-router-dom";
import cls from "classNames";
import "./style.scss";

const TOOLBAR = [
  {
    name: "percent",
    path: "/percent",
  },
  {
    name: "rem",
    path: "/rem",
  },
  {
    name: "media",
    path: "/media",
  },
  {
    name: "flex",
    path: "/flex",
  },
];

interface IProps {
  /** 演示需要 */
  style?: React.CSSProperties;
  className?: string;
}

export default ({ style, className }: IProps) => {
  return (
    <div className={cls("toolbar", className)} style={style}>
      {TOOLBAR.map((item) => (
        <NavLink key={item.name} state="active" to={item.path}>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};
