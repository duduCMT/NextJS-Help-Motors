
type PProps = React.HTMLAttributes<HTMLHeadingElement>;

export type ParagraphSize = "small" | "regular";

type ParagraphProps = PProps & {
  color?: SoftTextTheme; 
  size?: ParagraphSize;
};

export default ParagraphProps;
