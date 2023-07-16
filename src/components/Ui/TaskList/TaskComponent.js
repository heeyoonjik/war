import { styled } from "styled-components";

const TaskComponent = ({ title }) => {
  return (
    <Wrapper>
      <TitleWrapper>{title}</TitleWrapper>
    </Wrapper>
  );
};

export default TaskComponent;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(233, 233, 233);
  border-radius: 15px;
  background-color: rgb(233, 233, 233);
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const TitleWrapper = styled.div`
  color: gray;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;
