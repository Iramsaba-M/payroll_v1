
import ErrorScreen from '../../../errorhandling/ErrorScreen';

const LoanComponent = () => {
  const errorCode = 404;
  return (
    <div>
      <ErrorScreen errorCode={errorCode} />
    </div>
  )
}

export default LoanComponent