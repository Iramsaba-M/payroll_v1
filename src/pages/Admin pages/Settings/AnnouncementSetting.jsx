import React from 'react';
import ErrorScreen from '../../../errorhandling/ErrorScreen';

const AnnouncementSetting = () => {
  const errorCode=404
  return (
    <div>
      <ErrorScreen errorCode={errorCode} />
    </div>
  )
}

export default AnnouncementSetting;
