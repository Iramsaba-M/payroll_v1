
import ErrorScreen from '../../../errorhandling/ErrorScreen'

const NotificationsComponent = () => {
  const errorCode=404
  return (
    <div>
      <ErrorScreen errorCode={errorCode} />
    </div>
  )
} 

export default NotificationsComponent