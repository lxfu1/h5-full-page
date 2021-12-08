import cls from "classNames";
import "./style.scss";

interface IProps {
  /** 演示需要 */
  style?: React.CSSProperties;
  className?: string;
}
export default ({ style, className }: IProps) => {
  return (
    <div className={cls("header", className)} style={style}>
      <span>header</span>
    </div>
  );
};
