import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;

    label {
    font-size: 12px;
    margin-bottom: 1px;
    }

    input {
    margin-bottom: 5px;
    }

    .form-control {
    height: 30px;
    border: 1px solid #62bdca;
    border-radius: 5px;
    padding-left: 10px;
    }

    input::placeholder {
        font-size: 16px;
        text-content: center;
    }

    input:focus {
        outline: 2px solid #62bdca;  
    }
`

function returnForm({children}) {
  return (
      <Form>
          {children}
      </Form>
  )
}

export default returnForm