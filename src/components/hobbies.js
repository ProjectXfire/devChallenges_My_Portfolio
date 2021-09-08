import React from "react";
// Styles
import { Title } from "../styles/shared";
import { Card, Photo, Content, Item, CardsContainer } from "../styles/card";

export const Hobbies = ({ hobbies }) => {
  return (
    <>
      <Title>Hobbies</Title>
      <CardsContainer>
        {hobbies.map((hobbie, index) => (
          <Card key={index} column={1}>
            <Photo>
              <img src={hobbie.image} alt="hobbie_image" />
            </Photo>
            <Content>
              <Item>
                <strong>{hobbie.name}</strong>
              </Item>
              <Item>{hobbie.description}</Item>
            </Content>
          </Card>
        ))}
      </CardsContainer>
    </>
  );
};
