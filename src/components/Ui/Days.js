import { styled } from "styled-components";

const Days = ({ day, today }) => {
  return (
    <Wrapper>
      <span>{day}</span>
    </Wrapper>
  );
};

export default Days;

const Wrapper = styled.div`
  border-radius: 20px;
  height: 25px;
  width: 50px;
  margin: 0 4px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;
