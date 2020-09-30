import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => (props.background ? props.background : "black")};
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 1vh;

  :active {
    opacity: 0.75;
  }
`;
