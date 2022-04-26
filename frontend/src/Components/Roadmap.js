import React from 'react';
import styled from 'styled-components';
import RoadmapSection from './RoadmapSection';

const StyledRoadmap = styled.div`
  display: flex;
`;

function Roadmap({ data, children, ...props }) {
  console.log('data', data);
  var rightPosition = -35;
  return (
    <StyledRoadmap {...props}>
      {data
        ? data.map((level) => {
            rightPosition = rightPosition + 35;
            const progress =
              (level.completedTasks.length / level.totalTasks) * 100;
            return (
              <RoadmapSection
                style={{ position: 'relative', right: `${rightPosition}px` }}
                value={progress}
                complete={progress === 100 ? true : false}
              />
            );
          })
        : null}
    </StyledRoadmap>
  );
}

export default Roadmap;
