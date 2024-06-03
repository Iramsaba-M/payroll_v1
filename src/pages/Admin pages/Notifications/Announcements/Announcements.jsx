import ErrorScreen from '../../../../errorhandling/ErrorScreen';

const Announcements = () => {
  const errorCode = 404
  return (
    <div>
      <ErrorScreen errorCode={errorCode} />
    </div>
  )
}

export default Announcements;
