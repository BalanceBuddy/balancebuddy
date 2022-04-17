import React from 'react'
import styled from 'styled-components'

const Answers = styled.div`
    text-align: left;
    margin-left: 15px;
    margin-bottom: 5px;
    
    input[type="radio"] {
        accent-color: #62bdca;
    }

    input[type="checkbox"] {
        accent-color: #62bdca;
    }

`

function AnswerGroup({children}) {
  return (
      <Answers>
          {children}
      </Answers>
  )
}

export default AnswerGroup