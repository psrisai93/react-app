import { useState } from "react";
import Alert from "./Alert";
interface Props {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
}
const ButtonComponent = ({ children, color = "primary", onClick }: Props) => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible && <Alert setVisible={() => setAlertVisibility(false)} />}
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => setAlertVisibility(!alertVisible)}
      >
        {children}
      </button>
    </>
  );
};
export default ButtonComponent;
