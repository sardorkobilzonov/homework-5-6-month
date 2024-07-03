import { useState } from "react";
import "./App.css";
import MyInput from "./components/Myinput";
import Container from "./components/Container";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";

// TASK-1
// function App() {
//   return (
//     <div>
//       <ComponentA />
//       <ComponentB />
//       <ComponentC />
//     </div>
//   );
// }

// export default App;

// TASK - 2;
// function App() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       {/* TASK-2 */}
//       <h1>Text: {text}</h1>
//       <MyInput text={text} setText={setText} />
//     </div>
//   );
// }

// export default App;

// TASK-3
function App() {
  const [color, setColor] = useState("");

  return (
    <div>
      <MyInput color={color} setColor={setColor} />
      <Container color={color} />
    </div>
  );
}

export default App;
