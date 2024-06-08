import ButtonComponent from "./components/ButtonComponent";
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
