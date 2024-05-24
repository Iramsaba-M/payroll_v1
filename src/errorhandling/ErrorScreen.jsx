//ErrorScreen.jsx

import React from 'react'; 
import Button from '../configurations/Button/Button';
import { ButtonsConfig } from './ErrorConfig';

import servererror from '../assets/Images/servererror.jpg';
import errorimg from '../assets/Images/errorimg.png'
import error from '../assets/Images/error.jpg'
import gatewaytimeouterror from '../assets/Images/gatewaytimeouterror.jpg'
import pnferror from '../assets/Images/pnferror.jpg'


const ErrorScreen = ({ errorCode }) => {
  let errorMessage = '';
  let errortitle = '';
  let errorImage = '';
  let errordesc = ''

  switch (errorCode) {
    case 404:
      errorMessage = 'Error 404';
      errortitle = 'Page Not Found'
      errorImage = pnferror;
      errordesc = 'The requested URL/page was not found on this server' // Change this to your image path for 404 error
      break;

    case 500:
      errorMessage = 'Error 500 ';
      errortitle = 'Internal Server Error'
      errorImage = servererror; // Change this to your image path for 500 error
      errordesc = 'We re experiencing an internal server problem. Please try again later.' // Change this to your image path for 404 error
      break;

    case 400:
      errorMessage = '400 ';
      errortitle = 'Bad Request'
      errorImage = error; // Change this to your image path for 500 error
      errordesc = 'This page is not working' // Change this to your image path for 404 error
      break;

    case 403:
      errorMessage = 'Unauthorized';
      errorImage = error; // Change this to your image path for 500 error
      errordesc = 'Sorry, Your request could not be processed' // Change this to your image path for 404 error
      break;

    case 504:
      errorMessage = 'Error 504';
      errortitle = 'Gateway Timeout'
      errorImage = gatewaytimeouterror; // Change this to your image path for 500 error
      errordesc = 'Sorry, Your request could not be processed' // Change this to your image path for 404 error
      break;

    default:
      errorMessage = 'Oops! Something went wrong.';
      errorImage = error; // Change this to your default image path
      break;
  }

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className='flex justify-center'>

      <div className=''>
        <div className='items-center ml-[30%] w-[57vh] mt-[30%] '>
          <div className='text-gray-200 text-6xl font-bold'>{errorMessage}</div>
          <div className='text-gray-900 text-4xl font-bold mt-4'>{errortitle}</div>
          <div className='text-md text-gray-header mt-4'>{errordesc}  </div>
          <div className='mt-4'>
            <Button Configs={ButtonsConfig} onClick={handleClick} />
          </div>
        </div>
      </div>

      <div className=''>
        <img src={errorImage} alt="" className='object-cover w-[90vh]'/>
      </div>

    </div>
  );
};


export default ErrorScreen;
