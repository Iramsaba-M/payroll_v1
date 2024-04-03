//clean code
import React from 'react'
import RequestForLoanComponent from './RequestForLoanComponent'
import { RequestForLoanData } from './RequestForLoanData'

const RequestForLoan = () => {
  return (
    <div className=''>
      <RequestForLoanComponent config={RequestForLoanData} />
    </div>
  )
}

export default RequestForLoan
