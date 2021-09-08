import styled from "styled-components";
import { device } from "../utils/screens";

export const ProgressContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  gap: 5px;
  align-items: center;
  font-size: 0.8rem;
  @media ${device.mobileL} {
    grid-template-columns: 1fr 3fr;
  }
`;

export const Progress = styled.div`
  height: 10px;
  width: 100%;
  border-radius: 5px;
  background-color: #e0e0e0;
  & div {
    height: 10px;
    border-radius: 5px;
    width: ${(props) => props.percent};
    background-color: #42a5f5;
  }
`;
