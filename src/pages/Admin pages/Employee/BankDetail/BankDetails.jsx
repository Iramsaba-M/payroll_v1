import React from 'react'
import BankDetailForm from '../../../../components/form/BankDetailForm/BankDetailForm'
import {formContent} from './BankDetailsContent'

const BankDetails = ({ handleNextClick, employeeId }) => {
  return (
    <div className='bankdeatils '>
      <BankDetailForm configs={formContent} handleNextClick={handleNextClick} employeeId={employeeId} />
    </div>
  )
}

export default BankDetails
