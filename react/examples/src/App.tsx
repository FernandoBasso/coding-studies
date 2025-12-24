// import { UseStateComp } from "./components/UseStateComp/UseStateComp";
// import { UseEffectComp } from "./components/UseEffect";
// import { UseContextComp } from "./components/UseContext/UseContextComp";
// import { CounterUseReducer } from "./components/UseReducer/UseReducerComp";
// import { UseRefFocusInput } from "./components/UseRefExamples/UseRefFocusInput";
// import { UseFetchDataComp } from "./components/UseFetchData/UseFetchDataComp";
import { RickMortySearch } from "./rick-morty-search/RickMortySearch";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <RickMortySearch />
    </div>
  );

  // return (
  //   <div className="wrapper">
  //     <UseFetchDataComp />
  //
  //     <hr />
  //     <UseRefFocusInput />
  //
  //     <hr />
  //     <CounterUseReducer />
  //
  //     <hr />
  //     <UseContextComp />
  //
  //     <hr />
  //     <UseEffectComp />
  //
  //     <hr />
  //     <UseStateComp />
  //   </div>
  // );
}

export default App;
