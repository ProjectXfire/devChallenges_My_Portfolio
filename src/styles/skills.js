import styled from "styled-components";
import { device } from "../utils/screens";

export const ProgressBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 40px;
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 40px;
  }
`;
