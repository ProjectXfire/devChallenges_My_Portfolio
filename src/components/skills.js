import React from "react";
// Styles
import { Title } from "../styles/shared";
import { ProgressBarContainer } from "../styles/skills";
import { BlankCard } from "../styles/card";
// Components
import { ProgressBar } from "../components/progressBar";

export const Skills = ({ skillsFrontEnd, skillsBackEnd }) => {
  return (
    <>
      <BlankCard>
        <Title>Front End</Title>
        <ProgressBarContainer>
          {skillsFrontEnd.map((skill, index) => (
            <ProgressBar key={index} skill={skill} />
          ))}
        </ProgressBarContainer>
      </BlankCard>
      <BlankCard>
        <Title>Back End</Title>
        <ProgressBarContainer>
          {skillsBackEnd.map((skill, index) => (
            <ProgressBar key={index} skill={skill} />
          ))}
        </ProgressBarContainer>
      </BlankCard>
    </>
  );
};
