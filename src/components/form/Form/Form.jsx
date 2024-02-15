import React from 'react'
import FormComponent from './FormComponent';


const Form = ({configs}) => {

  return (
    <div>
      <h1>Form components</h1>
        <FormComponent config={configs} />
    </div>
  )
  }

export default Form;

