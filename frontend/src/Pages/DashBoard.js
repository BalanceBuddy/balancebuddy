import styled from 'styled-components';
import DefaultContainer from '../Components/DefaultContainer';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Col = styled.div`
  width: 45%;
  border-radius: 10px;
  border: 2px solid black;
`;

function DashBoard() {
  return (
    <DefaultContainer>
      <h1>Dashboard</h1>
      <Row>
        <Col>
          <h2>title</h2>
          <p>description lorem ipsum</p>
        </Col>

        <Col>
          <h2>Motivation</h2>
          <p>lorem ipsum</p>
        </Col>
      </Row>
    </DefaultContainer>
  );
}

export default DashBoard;
