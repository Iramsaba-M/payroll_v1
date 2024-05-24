import React from 'react'
import ErrorScreen from '../../../errorhandling/ErrorScreen';

export const CTC_CalculatorComponent = () => {
  const errorCode=404;
  return (
    <div>
       <ErrorScreen errorCode={errorCode} />
    </div>
    
  )
}

export default CTC_CalculatorComponent