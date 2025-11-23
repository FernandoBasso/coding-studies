import { UseStateComp } from "./components/UseStateComp/UseStateComp";
import { UseEffectComp } from "./components/UseEffect";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <UseEffectComp />
      <UseStateComp />
    </div>
  );
}

export default App;
