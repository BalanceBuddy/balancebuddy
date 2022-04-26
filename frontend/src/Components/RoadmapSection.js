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

function RoadmapSection({ value, complete, ...props }) {
  return (
    <StyledRoadmapSection {...props}>
      <ProgressSection>
        <ProgressBar value={value} width={'150px'} />
        <Milestone
          title='Resume Description'
          img={require('../Assets/milestone-icons/resume.png')}
          complete={complete}
        ></Milestone>
      </ProgressSection>

      <InfoBubble>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </InfoBubble>
    </StyledRoadmapSection>
  );
}

export default RoadmapSection;
