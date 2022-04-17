import React from 'react';
import styled from 'styled-components';
import AnswerGroup from '../../Components/AssessmentAnswerGroup';
import WholeContainer from '../../Components/WholeContainer';
import Button from '../../Components/Button';

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

function Signup() {
  return (
    <>
      <WholeContainer assessment>
        <h2>Assessment</h2>
        <p>
          The assessment will help tailor this experience to you specifically
        </p>
        <div>
          <Question>
            <p>1. What is your grade?</p>
            <AnswerGroup>
              <input
                type='radio'
                id='gradea1'
                name='grade'
                value='highschool'
              ></input>
              <label for='gradea1'>In High School</label>
              <br></br>
            </AnswerGroup>
            <AnswerGroup>
              <input
                type='radio'
                id='gradea2'
                name='grade'
                value='freshman'
              ></input>
              <label for='gradea2'>Undergraduate Freshman</label>
              <br></br>
            </AnswerGroup>
            <AnswerGroup>
              <input
                type='radio'
                id='gradea3'
                name='grade'
                value='sophomore'
              ></input>
              <label for='gradea3'>Undergraduate Sophomore</label>
              <br></br>
            </AnswerGroup>
            <AnswerGroup>
              <input
                type='radio'
                id='gradea4'
                name='grade'
                value='junior'
              ></input>
              <label for='gradea4'>Undergraduate Junior</label>
              <br></br>
            </AnswerGroup>
            <AnswerGroup>
              <input
                type='radio'
                id='gradea5'
                name='grade'
                value='senior'
              ></input>
              <label for='gradea5'>Undergraduate Senior</label>
              <br></br>
            </AnswerGroup>
          </Question>
          <Question>
            <p>
              2. How much experience do you have preparing for jobs and/or
              internships?
            </p>
            <AnswerGroup>
              <input
                type='radio'
                id='experiencea1'
                name='experience'
                value='noExperience'
              ></input>
              <label for='experiencea1'>No experience at all</label>
              <br></br>
            </AnswerGroup>
            <AnswerGroup>
              <input
                type='radio'
                id='experiencea2'
                name='experience'
                value='littleExperience'
              ></input>
              <label for='experiencea2'>A little experience</label>
              <br></br>
            </AnswerGroup>
            <AnswerGroup>
              <input
                type='radio'
                id='experiencea3'
                name='experience'
                value='someExperience'
              ></input>
              <label for='experiencea3'>Some experience</label>
              <br></br>
            </AnswerGroup>
            <AnswerGroup>
              <input
                type='radio'
                id='experiencea4'
                name='experience'
                value='lotExperience'
              ></input>
              <label for='experiencea4'>A lot of experience</label>
              <br></br>
            </AnswerGroup>
          </Question>
          <Question>
            <p>
              3. How far along are you in your internship/job search process?
            </p>
            <AnswerGroup>
              <input
                type='radio'
                id='progressa1'
                name='progress'
                value='noProgress'
              ></input>
              <label for='progressa1'>No progress at all</label>
              <br></br>
            </AnswerGroup>
            <AnswerGroup>
              <input
                type='radio'
                id='progressa2'
                name='progress'
                value='littleProgress'
              ></input>
              <label for='progressa2'>A little progress</label>
              <br></br>
            </AnswerGroup>
            <AnswerGroup>
              <input
                type='radio'
                id='progressa3'
                name='progress'
                value='someProgress'
              ></input>
              <label for='progressa3'>Some progress</label>
              <br></br>
            </AnswerGroup>
            <AnswerGroup>
              <input
                type='radio'
                id='progressa4'
                name='progress'
                value='lotProgress'
              ></input>
              <label for='progressa4'>A lot of progress</label>
              <br></br>
            </AnswerGroup>
          </Question>
        </div>
        <BottomButtons>
          <a id='assessmentPageOneBackButton' href='/assessment-page1'>
            <Button>Back</Button>
          </a>
          <a href='/assessment-page2'>
            <Button>Next</Button>
          </a>
        </BottomButtons>
      </WholeContainer>
    </>
  );
}

export default Signup;
