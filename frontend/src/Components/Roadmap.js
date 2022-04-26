import React from 'react';
import styled from 'styled-components';
import RoadmapSection from './RoadmapSection';

const StyledRoadmap = styled.div`
  display: flex;
`;

function Roadmap({ roadmapData, levelData, children, ...props }) {
  var rightPosition = -35;
  return (
    <StyledRoadmap {...props}>
      {roadmapData
        ? roadmapData.map((level) => {
            const levelId = level.level_id;
            var levelInfo = levelData.find((x) => x._id === levelId);
            rightPosition = rightPosition + 35;
            const progress =
              (level.completedTasks.length / level.totalTasks) * 100;
            console.log('levelInfo', levelInfo);
            return (
              <RoadmapSection
                style={{ position: 'relative', right: `${rightPosition}px` }}
                value={progress}
                title={levelInfo.title}
                img={require(`../Assets/milestone-icons/${levelInfo.icon}`)}
                description={levelInfo.description}
                complete={progress === 100 ? true : false}
              />
            );
          })
        : null}
    </StyledRoadmap>
  );
}

export default Roadmap;
