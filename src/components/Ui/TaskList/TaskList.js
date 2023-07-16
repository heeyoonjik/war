import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";
import TaskComponent from "./TaskComponent";

const TaskList = ({ taskData, addTask, selectedDate }) => {
  const [inputValue, setInputValue] = useState("");
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const addTaskHandler = () => {
    addTask({
      id: 12,
      title: inputValue,
      completed: false,
      date: selectedDate,
    });
    setInputValue("");
  };
  const addTaskEnter = (e) => {
    if (e.key === "Enter") {
      addTaskHandler();
    }
  };
  return (
    <Wrapper>
      <TaskAddWrapper>
        <TaskAddInput
          placeholder="task를 입력하시오."
          onChange={inputChangeHandler}
          value={inputValue}
          onKeyPress={addTaskEnter}
        />
        <button onClick={addTaskHandler}>+</button>
      </TaskAddWrapper>
      {taskData.map((t) => (
        <TaskComponent title={t.title} key={t.id} />
      ))}
    </Wrapper>
  );
};

export default TaskList;
const Wrapper = styled.div`
  background-color: gainsboro;
  width: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskAddWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  background-color: rgb(233, 233, 233);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  button {
    background-color: gray;
    border: 0;
    outline: 0;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 30px;
  }
`;

const TaskAddInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 15px;
  border: 0;
  outline: none;
  border-radius: 15px;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
`;
