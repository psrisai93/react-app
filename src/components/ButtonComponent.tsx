interface Props {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
}
const ButtonComponent = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
export default ButtonComponent;
