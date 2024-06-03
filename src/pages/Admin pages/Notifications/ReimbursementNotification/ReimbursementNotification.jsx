
import ErrorScreen from '../../../../errorhandling/ErrorScreen';

const ReimbursementNotification = () => {
  const errorCode = 404
  return (
    <div>
      <ErrorScreen errorCode={errorCode} />
    </div>
  )
}

export default ReimbursementNotification;
