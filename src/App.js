import "./styles.css";
import { useMemo, useState } from "react";
export default function App() {
  const [add, setAdd] = useState(1);
  const [sub, setSub] = useState(100);
  const handleAdd = () => {
    setAdd(add + 1);
  };
  const handleSubtract = () => {
    setSub(sub - 1);
  };

  // const Multiply = () => {
  //   console.log(
  //     "testing Memo, NOITHING TO DO WITH SUBTRACT BUT STILL GETTING CALLED WHEN I AM CLICKING ON SUBTRACT BUTTON"
  //   );
  //   return add * 10;
  // };
  const Multiplication = useMemo(() => {
    console.log("check for add");
    return add * 10;
  }, [add]);
  return (
    <div className="App">
      {add}
      <button onClick={handleAdd}>Add</button>
      <br />
      {/* {Multiply()} */}
      {Multiplication}
      <br />
      <br />
      {sub}
      <button onClick={handleSubtract}>Subtract</button>
    </div>
  );
}
