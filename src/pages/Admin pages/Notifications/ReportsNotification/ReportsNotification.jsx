
import ErrorScreen from '../../../../errorhandling/ErrorScreen';

const ReportsNotification = () => {
  const errorCode = 404
  return (
    <div>
      <ErrorScreen errorCode={errorCode} />
    </div>
  )
}

export default ReportsNotification;
