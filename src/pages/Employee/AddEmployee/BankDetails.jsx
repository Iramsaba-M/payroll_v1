import React from 'react'
import BankDetailForm from '../../../components/form/BankDetailForm/BankDetailForm'
import BankDetailData from '../../../components/form/BankDetailForm/BankDetailData'

const BankDetails = ({ handleNextClick, employeeId }) => {
  return (
    <div className='bankdeatils '>
      <BankDetailForm configs={BankDetailData} handleNextClick={handleNextClick} employeeId={employeeId} />
    </div>
  )
}

export default BankDetails
