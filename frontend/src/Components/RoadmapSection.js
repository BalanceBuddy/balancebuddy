import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import Milestone from './Milestone';

const StyledRoadmapSection = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ProgressSection = styled.div`
  display: flex;
  align-items: center;
`;

const InfoBubble = styled.div`
  background-color: lightGray;
  width: 150px;
  font-size: 12px;
  padding: 5px;
  position: relative;
  left: -25px;
`;

function RoadmapSection({
  value,
  title,
  img,
  description,
  complete,
  ...props
}) {
  return (
    <StyledRoadmapSection {...props}>
      <ProgressSection>
        <ProgressBar value={value} width={'150px'} />
        <Milestone title={title} img={img} complete={complete}></Milestone>
      </ProgressSection>

      <InfoBubble>
        <p>{description}</p>
      </InfoBubble>
    </StyledRoadmapSection>
  );
}

export default RoadmapSection;
