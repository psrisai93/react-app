interface Props {
  setVisible: () => void;
}
const Alert = ({ setVisible }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      Alert
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={setVisible}
      ></button>
    </div>
  );
};
export default Alert;
