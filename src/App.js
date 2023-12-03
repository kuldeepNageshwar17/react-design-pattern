import { SplitScreen } from "./SplitScreen";
import "./App.css";

const LeftHandComponent = ({ name }) => {
  return <h1>{name}</h1>;
};
const RightHandComponent = ({ message }) => {
  return <h1>{message}</h1>;
};
function App() {
  return (
    <SplitScreen LeftWeight={1} RightWeight={3}>
      <LeftHandComponent name={"shawn"} />
      <RightHandComponent message={"How are you shawn"} />
    </SplitScreen>
  );
}

export default App;
