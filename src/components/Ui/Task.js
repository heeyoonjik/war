import { styled } from "styled-components";

const Task = ({ task }) => {
  return <Wrapper>{task.title}</Wrapper>;
};

export default Task;

const Wrapper = styled.div`
  width: 50px;
  height: 15px;
  background-color: greenyellow;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 2px 0px;
`;
