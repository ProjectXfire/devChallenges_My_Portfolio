import React from "react";
// Provider
import { Email, Phone } from "@material-ui/icons";
// Images
import photoProfile from "../images/pp.jpg";
// Styles
import {
  CardProfile,
  Photo,
  Header,
  Content,
  Icon,
  Item,
  Body,
  CardsContainer,
} from "../styles/card";
// Components
import { Skills } from "./skills";

export const Profile = ({ skillsFrontEnd, skillsBackEnd }) => {
  return (
    <CardsContainer>
      <CardProfile>
        <Photo>
          <img src={photoProfile} alt="profile" />
        </Photo>
        <Content>
          <Header>
            <Item>
              <p>
                <strong>Gabriel Vargas Bravo</strong>
              </p>
              <p>Front-end developer</p>
            </Item>
            <Item>
              <Icon>
                <Email />
                <span>gabriel.vargas.bravo@gmail.com</span>
              </Icon>
              <Icon>
                <Phone />
                <span>(+011) 51 990 994 750</span>
              </Icon>
            </Item>
          </Header>
          <Body>
            <Item>
              Self-motivated developer. I would like to know and learn more
              about of the world of Web Applications Development, using
              technologies as react, angular or vue, and sharing knowledge
              between the community.
            </Item>
          </Body>
        </Content>
      </CardProfile>
      <CardsContainer>
        <Skills skillsFrontEnd={skillsFrontEnd} skillsBackEnd={skillsBackEnd} />
      </CardsContainer>
    </CardsContainer>
  );
};
