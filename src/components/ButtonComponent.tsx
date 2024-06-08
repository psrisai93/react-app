interface Props {
  children: string;
}
const ButtonComponent = ({ children }: Props) => {
  return (
    <button type="button" className="btn btn-primary">
      {children}
    </button>
  );
};
export default ButtonComponent;
