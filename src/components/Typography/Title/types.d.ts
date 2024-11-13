
type H1Props = React.HTMLAttributes<HTMLHeadingElement>;

export type H1Size = "large" | "regular";

type TitleProps = H1Props & {
  color?: TextTheme; 
  size?: H1Size;
};

export default TitleProps;
