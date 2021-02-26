import React, { useState } from "react";

function AddNumbers() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState();

  function calculateSum() {
    setSum(num1 + num2);
  }
  var enabled = num1 && num2;
  return (
    <div>
      <h1>Add Two Numbers </h1>
      Enter First Number:
      <input
        type="number"
        id="Text1"
        onChange={(e) => setNum1(+e.target.value)}
        placeholder="enter a number"
      />
      <br></br>
      Enter Second Number:
      <input
        type="number"
        id="Text2"
        onChange={(e) => setNum2(+e.target.value)}
        placeholder="enter a number"
      />
      <br></br>
      Result:
      <input type="number" id="txtresult" value={sum} />
      <br></br>
      <button disabled={!enabled} name="clickbtn" onClick={calculateSum}>
        Display result
      </button>
    </div>
  );
}

export default AddNumbers;
