import React from 'react'
import PayslipComponent from './PayslipComponent'
import { PayslipData } from './PayslipData'
const Payslip = () => {
  return (
    <div>
      <PayslipComponent  config={PayslipData}/>
    </div>
  )
}

export default Payslip
