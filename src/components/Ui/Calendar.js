import { useEffect, useState } from "react";
import format from "date-fns/format";
import { styled } from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  addDays,
  addMonths,
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  isSameDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import Days from "./Days";
import Cell from "./Cell";

const Calendar = ({ taskData, changeSelectedDate, selectedDate }) => {
  const date = ["SUN", "MON", "TUS", "WED", "THRS", "FRI", "SAT"];
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthStart, setMonthStart] = useState(startOfMonth(currentMonth));
  const [monthEnd, setMonthEnd] = useState(endOfMonth(currentMonth));
  const [calendarStartDate, setCalendarStartDate] = useState(
    startOfWeek(monthStart)
  );
  const [calendarEndDate, setCalendarEndDate] = useState(endOfWeek(monthEnd));

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  useEffect(() => {
    setMonthStart(startOfMonth(currentMonth));
    setMonthEnd(endOfMonth(currentMonth));
  }, [currentMonth]);

  useEffect(() => {
    setCalendarStartDate(startOfWeek(monthStart));
    setCalendarEndDate(endOfWeek(monthEnd));
  }, [monthEnd, monthStart]);

  const [monthArray, setMonthArray] = useState([]);
  useEffect(() => {
    let ma = [];
    let day = calendarStartDate;
    while (differenceInCalendarDays(calendarEndDate, day) >= 0) {
      ma.push(day);
      day = addDays(day, 1);
    }
    setMonthArray(ma);
  }, [calendarEndDate, calendarStartDate, currentMonth]);

  const filterTask = (standardDate) => {
    const filteredArray = taskData.filter((task) =>
      isSameDay(standardDate, task.date)
    );
    return filteredArray;
  };

  const isSelectedDate = (cellDate) => {
    return isSameDay(selectedDate, cellDate);
  };
  return (
    <Wrapper>
      <header>
        <div className="left">
          <span>{format(currentMonth, "M")}월</span>
          <span>{format(currentMonth, "yyyy")}</span>
        </div>
        <div className="right">
          <button onClick={prevMonth}> &#60;</button>
          <button onClick={nextMonth}> &#62;</button>
        </div>
      </header>
      <DragDropContext>
        <CalendarWrapper>
          <section className="days">
            {date.map((d, index) => (
              <Days day={d} key={index} />
            ))}
          </section>
          <body>
            <CalendarGrid>
              {monthArray.map((d) => (
                <Droppable droppableId="droppable-1" type="test1">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {provided.placeholder}
                      <Cell
                        day={d}
                        task={filterTask(d)}
                        changeSelectedDate={changeSelectedDate}
                        isSelected={isSelectedDate(d)}
                      />
                    </div>
                  )}
                </Droppable>
              ))}
            </CalendarGrid>
          </body>
        </CalendarWrapper>
      </DragDropContext>
    </Wrapper>
  );
};

export default Calendar;

const Wrapper = styled.div`
  width: 30%;
  header {
    background-color: gainsboro;
    width: 100%;
    height: 50px;
    border: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      width: 100%;
      display: flex;
      align-items: center;
      height: 100%;

      span:first-child {
        font-weight: bold;
        font-size: 24px;
        margin-right: 6px;
      }
      span:last-child {
        font-weight: 200;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-right: 10px;
      button {
        border: 0;
        outline: 0;
        border-radius: 10px;
        width: 30px;
        height: 30px;
        margin: 0 5px;
      }
    }
  }
  section {
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 6px;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const CalendarWrapper = styled.div`
  background-color: gainsboro;
`;
