import React from 'react';
import styled from 'styled-components';
import RoadmapSection from './RoadmapSection';

const StyledRoadmap = styled.div`
  display: flex;
`;

function buildRoadmap(data) {
  var firstExists = false;
  data.map((level) => {
    if (!firstExists) {
      firstExists = true;
      console.log('here1');
      return <RoadmapSection first />;
    } else {
      console.log('here2');
      return <RoadmapSection />;
    }
  });
}

function Roadmap({ data, children, ...props }) {
  console.log('data', data);
  var rightPosition = -35;
  return (
    <StyledRoadmap {...props}>
      {data
        ? data.map((level) => {
            rightPosition = rightPosition + 35;
            return (
              <RoadmapSection
                style={{ position: 'relative', right: `${rightPosition}px` }}
              />
            );
          })
        : null}

      {/* <RoadmapSection />
      <RoadmapSection style={{ position: 'relative', right: '35px' }} />
      <RoadmapSection style={{ position: 'relative', right: '70px' }} />
      <RoadmapSection style={{ position: 'relative', right: '105px' }} /> */}
    </StyledRoadmap>
  );
}

export default Roadmap;
