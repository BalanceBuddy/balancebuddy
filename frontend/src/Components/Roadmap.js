import React from 'react';
import styled from 'styled-components';
import RoadmapSection from './RoadmapSection';

const StyledRoadmap = styled.div`
  display: flex;
`;

function Roadmap({ children, ...props }) {
  return (
    <StyledRoadmap {...props}>
      <RoadmapSection first />
      <RoadmapSection />
    </StyledRoadmap>
  );
}

export default Roadmap;
