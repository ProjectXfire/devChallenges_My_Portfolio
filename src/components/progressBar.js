import React from "react";
// Styles
import { ProgressContainer, Progress } from "../styles/progress";

export const ProgressBar = ({ skill }) => {
  return (
    <ProgressContainer>
      <span>{skill.name}</span>
      <Progress percent={`${skill.percent}%`}>
        <div></div>
      </Progress>
    </ProgressContainer>
  );
};
