import React from 'react'
import ReviewPayrollComponent from './ReviewPayrollComponent'
import {ReviewPayrollData} from './ReviewPayrollData'
const ReviewPayroll = () => {
  return (
    <div>
   <ReviewPayrollComponent config={ReviewPayrollData}/>
    </div>
  )
}

export default ReviewPayroll
