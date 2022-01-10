import React, { useState } from "react"

export default function App() {
  //React's useState Hook, add local state
  const [count, setCount] = useState(0)

  //Ternary Operator: if the user decrements less than 0 --> an alert is displayed to the user and the set the count back to 0.
  //Else if the count is equal to or more than 0 --> it console logs the current count.
  count < 0 ? (alert("You can't decrement while the count equals 0, please press increment."), setCount(0)) : console.log("Count = ", count)

  return (
    <div className="text-center m-5">
      <h1>Counter App</h1>
      <div>
        <p className="display-1 count m-5">{count}</p>
      </div>
      <div className="d-flex justify-content-center gap-5">
        <button className="btn btn-primary col-1" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="btn btn-danger col-1" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}