import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>-Styled Components -</STitle>
      <SBttuon>Fight!</SBttuon>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 5px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;
const SBttuon = styled.button`
  background-color: #abedd8;
  border: none;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcd;
    color: #fff;
    cursor: pointer;
  }
`;
