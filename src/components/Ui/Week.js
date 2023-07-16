import { styled } from "styled-components";
import Cell from "./Cell";

const Week = (day) => {
  return (
    <Wrapper>
      <Cell day={day} />
    </Wrapper>
  );
};

export default Week;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  margin: 2px;
`;
