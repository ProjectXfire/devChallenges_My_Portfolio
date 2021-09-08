// Styles
import {
  Card,
  Photo,
  Content,
  Tag,
  Item,
  CardsContainer,
  BlankCard,
} from "../styles/card";
import { Button, Title } from "../styles/shared";

export const Projects = ({ projects, tags, filterByTag, activeButton }) => {
  return (
    <section>
      <Title>Projects ({projects.length})</Title>
      <BlankCard>
        {tags.map((tag, index) => (
          <Button
            key={index}
            color={activeButton === index ? "blue" : "grey"}
            revert
            onClick={() => filterByTag(tag.name, index)}
          >
            {tag.name}
          </Button>
        ))}
      </BlankCard>
      <CardsContainer>
        {projects.map((project, index) => (
          <Card key={index} column={1}>
            <Photo>
              <img src={project.image} alt="project_image" />
            </Photo>
            <Content>
              <Item>
                {project.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Item>
              <Item>
                <strong>{project.name}</strong>
              </Item>
              <Item>{project.description}</Item>
              <Item>
                <Button color="blue">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </Button>
                <Button color="blue" revert>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </Button>
              </Item>
            </Content>
          </Card>
        ))}
      </CardsContainer>
    </section>
  );
};
