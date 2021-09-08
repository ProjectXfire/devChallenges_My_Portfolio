import React from "react";
// Providers
import { Pagination } from "semantic-ui-react";
// Styles
import { Title } from "../styles/shared";
import { Card, CardsContainer, Content, Photo, Item } from "../styles/card";

export const Certificates = ({ certificates, handlePage, totalPages }) => {
  return (
    <>
      <Title>Certificates</Title>
      <CardsContainer>
        {certificates.map((certificate, index) => (
          <Card key={index} column={1}>
            <Photo contain>
              <img src={certificate.image} alt="certificate_image" />
            </Photo>
            <Content>
              <Item>
                <strong>{certificate.name}</strong>
              </Item>
              <Item>{certificate.school}</Item>
            </Content>
          </Card>
        ))}
      </CardsContainer>
      <Pagination
        defaultActivePage={1}
        boundaryRange={0}
        siblingRange={1}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={totalPages}
        onPageChange={handlePage}
      />
    </>
  );
};
