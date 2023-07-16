import { styled } from "styled-components";
import Task from "./Task";
import getDate from "date-fns/getDate";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Cell = ({ day, task, isSelected, changeSelectedDate }) => {
  const showDate = getDate(day);

  return (
    <Wrapper
      isSelectedDate={isSelected}
      onClick={() => changeSelectedDate(day)}
    >
      <DateLabel>{showDate}</DateLabel>
      {task.map((t, index) => (
        <Draggable key={t.id} draggableId={t.id.toString()} index={t.id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Task task={t} />
            </div>
          )}
        </Draggable>
      ))}
    </Wrapper>
  );
};

export default Cell;

const Wrapper = styled.div`
  width: 50px;
  height: 100px;
  margin: 4px 0;
  border-radius: 15px;
  background-color: ${(props) => (props.isSelectedDate ? "#AAAAAA" : "white")};
`;

const DateLabel = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
  margin-top: 5px;
`;
