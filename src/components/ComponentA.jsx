// TASK-2

// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//     </div>
//   );
// }

// export default Counter;

// TASK-1

import React, { useState } from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

function ComponentA() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ComponentB count={count} />
      <ComponentC setCount={setCount} />
    </div>
  );
}

export default ComponentA;
