import Calendar from "../components/Ui/Calendar";
import TaskList from "../components/Ui/TaskList/TaskList";
import { styled } from "styled-components";
import TimeTable from "../components/TimeTable/TimeTable";
import { useEffect, useState } from "react";
import { format, getDate, getMonth, getYear, isSameDay } from "date-fns";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Cell from "../components/Ui/Cell";

const Main = () => {
  const [task, setTask] = useState([
    { id: 1, title: "Study React", completed: false, date: new Date() },
    { id: 2, title: "Do laundry", completed: false, date: new Date() },
    { id: 3, title: "Walk the dog", completed: false, date: new Date() },
    { id: 4, title: "Buy groceries", completed: false, date: new Date() },
    {
      id: 5,
      title: "아 니드 섬 도파민",
      completed: false,
      date: new Date("2023-07-12"),
    },
    {
      id: 6,
      title: "웹 컨퍼런스",
      completed: false,
      date: new Date("2023-07-15"),
    },
    {
      id: 7,
      title: "부활",
      completed: false,
      date: new Date("2023-07-2"),
    },
    {
      id: 8,
      title: "웅냥",
      completed: false,
      date: new Date("2023-07-4"),
    },
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [taskListData, setTaskListData] = useState([]);
  const selectedDateString = `${format(selectedDate, "yyyy년 M월 d일")}`;

  const chagneSelectedDateHandler = (date) => {
    setSelectedDate(date);
  };

  const addTaskHandler = (task) => {
    setTask((existing) => [...existing, task]);
  };

  useEffect(() => {
    setTaskListData(task.filter((task) => isSameDay(selectedDate, task.date)));
  }, [task, selectedDate]);

  const sibal = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <SelectedDate>{selectedDateString}</SelectedDate>
      <Wrapper>
        <Calendar
          taskData={task}
          changeSelectedDate={chagneSelectedDateHandler}
          selectedDate={selectedDate}
        />
        <TimeTable />
        <TaskList
          taskData={taskListData}
          addTask={addTaskHandler}
          selectedDate={selectedDate}
        />
      </Wrapper>
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  background-color: black;
`;

const SelectedDate = styled.div`
  width: 100%;
  height: 25px;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropArea = styled.ul`
  width: 300px;
  height: 300px;
  background-color: red;
  li {
    width: 50px;
    height: 50px;
    background-color: green;
    margin: 20px;
    border: 1px solid black;
  }
`;

const DraggableBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: green;
  margin: 20px;
  border: 1px solid black;
`;
