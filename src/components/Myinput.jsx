// TASK-2

// import React from "react";

// function MyInput({ text, setText }) {
//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleChange} />
//     </div>
//   );
// }

// export default MyInput;

// TASK-3

import React from "react";

function MyInput({ color, setColor }) {
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={color}
        onChange={handleChange}
        placeholder="Enter a color"
      />
    </div>
  );
}

export default MyInput;
