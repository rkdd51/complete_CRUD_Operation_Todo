import { useState } from "react";

const Todo = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [editID, setEditId] = useState(0);
  const handleTodo = (e) => {
    setTodoValue(e.target.value);
  };
  const addTodoValue = () => {
    if (todoValue !== "") {
      setTodoArr([{ id: Math.random(), todoValue }, ...todoArr]);
      setTodoValue("");
    }
    //FOR EDITING
    if (editID) {
      let dataEdited = todoArr.find((value) => value.id === editID);
      const updateTodo = todoArr.map((el) =>
        el.id == dataEdited.id
          ? (el = { id: el.id, todoValue })
          : { id: el.id, todoValue: el.todoValue }
      );
      setTodoArr(updateTodo);
      setEditId(0);
      setTodoValue("");
      return;
    }
  };
  const removeTodo = (index) => {
    // let newArr = [...todoArr];
    // newArr.splice(index, 1);
    let newArr = todoArr.filter((value, id) => value.id !== index);
    setTodoArr(newArr);
  };

  const editTodo = (i) => {
    let editTodoValue = todoArr.find((id) => {
      return id.id === i;
    });
    // console.log(editTodoValue);
    setTodoValue(editTodoValue.todoValue);
    setEditId(i);
  };
  const removeAll = () => {
    setTodoArr([]);
  };
  return (
    <>
      <label>ADD TODO ------</label>
      &nbsp;
      <input
        type="text"
        placeholder="Todo"
        value={todoValue}
        onChange={handleTodo}
      />
      <button onClick={addTodoValue}>{editID ? "Edit" : "ADD"} </button>
      {todoArr.map((val) => {
        return (
          <div
            key={val.id}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <li>{val.todoValue}</li>
            <button onClick={() => removeTodo(val.id)}>Delete</button>
            <button onClick={() => editTodo(val.id)}>Edit</button>
          </div>
        );
      })}
      {todoArr.length ? <button onClick={removeAll}>Remove All</button> : null}
    </>
  );
};
export default Todo;
