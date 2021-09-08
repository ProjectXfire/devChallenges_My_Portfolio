import styled from "styled-components";
import { device } from "../utils/screens";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: ${(props) =>
      props.column === 1 ? "1fr" : "1.5fr 2fr"};
    grid-template-rows: 250px;
  }
  @media ${device.desktop} {
    display: grid;
    grid-template-rows: 250px;
    grid-template-columns: ${(props) =>
      props.column === 1 ? "1fr" : "1fr 2fr"};
  }
`;

export const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const BlankCard = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const Photo = styled.div`
  & img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    object-fit: ${(props) => (props.contain ? "contain" : "cover")};
  }
  @media ${device.tablet} {
    margin-right: 10px;
    & img {
      height: 250px;
      object-fit: ${(props) => (props.contain ? "contain" : "cover")};
    }
  }
  @media ${device.desktop} {
    margin-right: 10px;
    & img {
      height: 250px;
      object-fit: ${(props) => (props.contain ? "contain" : "cover")};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    justify-content: space-between;
  }
  @media ${device.desktop} {
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Body = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Item = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  & span {
    margin-left: 5px;
    font-size: 0.9rem;
  }
`;

export const Tag = styled.span`
  font-size: 0.8rem;
  margin-right: 10px;
  font-weight: 500;
`;
