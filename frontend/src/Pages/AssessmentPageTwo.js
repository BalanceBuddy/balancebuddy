import React from 'react';
import styled from 'styled-components';
import Side from '../Components/SignupBar';
import SignupButton from '../Components/SignupButton'
import AnswerGroup from '../Components/AssessmentAnswerGroup';

const WholeContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
`;

const Col1 = styled.div`
  width: 20%;
`;

const Col2 = styled.div` 
  width: 70%;
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 5%;
`;

const Question = styled.div`
text-align: left;

`;

const BottomButtons = styled.div`
    height: 100px;
    width: 70%;
    flex: none;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;

    #assessmentPageOneBackButton {
        opacity: 0;
    }
`;

const Button = styled.button`
    background-color: #62bdca;
    height: 30px;
    width: 100%;
    border: 0px;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 16px;

    :hover {
        opacity: 70%;
    }
`;

function Signup() {

  return (
    <>
      <WholeContainer>
        <Col1><Side/></Col1>
        <Col2>
          <h2>Assessment</h2>
          <p>The assessment will help tailor this experience to you specifically</p>
          <div>
            <Question>
                <p>4. Which of the following have you worked on?</p>
                <AnswerGroup>
                    <input type="checkbox" id="workedOna1" name="workedOn" value="createResume"></input>
                    <label for="workedOna1">Creating Resume</label><br></br>
                </AnswerGroup>
                <AnswerGroup>
                    <input type="checkbox" id="workedOna2" name="workedOn" value="wroteCoverLetter"></input>
                    <label for="workedOna2">Writing Cover Letter</label><br></br>
                </AnswerGroup>
                <AnswerGroup>
                    <input type="checkbox" id="workedOna3" name="workedOn" value="LinkedIn"></input>
                    <label for="workedOna3">Creating/Updating LinkedIn</label><br></br>
                </AnswerGroup>
                <AnswerGroup>
                    <input type="checkbox" id="workedOna4" name="workedOn" value="networking"></input>
                    <label for="workedOna4">Networking</label><br></br>
                </AnswerGroup>
                <AnswerGroup>
                    <input type="checkbox" id="workedOna5" name="workedOn" value="preparingForBehavioralInterview"></input>
                    <label for="workedOna5">Preparing for Behavioral Interview</label><br></br>
                </AnswerGroup>
                <AnswerGroup>
                    <input type="checkbox" id="workedOna6" name="workedOn" value="preparingForTechnicalInterview"></input>
                    <label for="workedOna6">Preparing for Technical Interview</label><br></br>
                </AnswerGroup>
            </Question>
            <Question>
                <p>5. Which of the following would you like to get out of using BalanceBuddy?</p>
                <AnswerGroup>
                    <input type="checkbox" id="getOutOfa1" name="getOutOf" value="getOutOfa1"></input>
                    <label for="getOutOfa1">Make consistent and steady progress</label><br></br>
                </AnswerGroup>
                <AnswerGroup>
                    <input type="checkbox" id="getOutOfa2" name="getOutOf" value="getOutOfa2"></input>
                    <label for="getOutOfa2">Stay motivated throughout the application process</label><br></br>
                </AnswerGroup>
                <AnswerGroup>
                    <input type="checkbox" id="getOutOfa3" name="getOutOf" value="getOutOfa3"></input>
                    <label for="getOutOfa3">Improve my application documents</label><br></br>
                </AnswerGroup>
                <AnswerGroup>
                    <input type="checkbox" id="getOutOfa4" name="getOutOf" value="getOutOfa4"></input>
                    <label for="getOutOfa4">Find helpful resources</label><br></br>
                </AnswerGroup>
                <AnswerGroup>
                    <input type="checkbox" id="getOutOfa5" name="getOutOf" value="getOutOfa5"></input>
                    <label for="getOutOfa5">Find guidance throughout the steps of the application process</label><br></br>
                </AnswerGroup>
            </Question>
          </div>
          <BottomButtons>
            <a href="/assessment-page1"><Button>Back</Button></a>
            <a href="/loading-dashboard"><Button>Next</Button></a>
          </BottomButtons>
        </Col2>
      </WholeContainer>
    </>
  );
}

export default Signup;
