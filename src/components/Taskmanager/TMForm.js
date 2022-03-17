import React, { useState, useEffect, useRef } from "react";

function TMForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="tm-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            defaultValue={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="task-input edit"
          />
          <button onClick={handleSubmit} className="task-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a task"
            defaultValue={input}
            name="text"
            className="tm-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="tm-button">Add Task</button>
        </>
      )}
    </form>
  );
}

export default TMForm;
