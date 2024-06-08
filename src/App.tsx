import ButtonComponent from "./components/ButtonComponent";
import Alert from "./components/Alert";
const label = "MyButton1";
const onClick = () => {
  console.log("Clicked");
};

function App() {
  return (
    <div>
      <ButtonComponent color="danger" onClick={onClick}>
        {label}
      </ButtonComponent>
    </div>
  );
}
export default App;
