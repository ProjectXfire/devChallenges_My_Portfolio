import styled from "styled-components";

export const Button = styled.button`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: ${(props) => (props.revert ? "white" : props.color)};
  border-radius: 5px;
  color: ${(props) => (props.revert ? props.color : "white")};
  outline: none;
  border: ${(props) => (props.revert ? `1px solid ${props.color}` : "none")};
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.revert ? "white" : props.color)};
    opacity: ${(props) => (props.revert ? 0.5 : 0.7)};
  }
  &:active {
    transform: scale(0.9);
  }
  & a {
    color: ${(props) => (props.revert ? props.color : "white")};
  }
`;

export const Title = styled.h1`
  margin-bottom: 5px;
  font-family: "Indie Flower", cursive;
`;
