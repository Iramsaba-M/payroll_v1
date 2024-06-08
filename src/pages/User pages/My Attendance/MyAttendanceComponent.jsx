
import { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types';
import { AttendanceButtons, Attendanccard, Attendanccard2, leavesdata2, radiocontent, leavehistorytable } from './AttendanceContent'
import Card from '../../../configurations/Card/CardConfig'
import Calendar from 'react-calendar';
import MyLeave from './MyLeave'
import ButtonConfig from '../../../configurations/Button/ButtonConfig'
import { FaPlay } from "react-icons/fa6";
import { EndUser_Get_Attendance, EndUser_Leave_Balance, EndUser_punch_status } from '../../../api/EndPoints'
import { fetchData, postData } from '../../../services/APIService'
import Table2 from '../../../configurations/table2/Table2';
import '../../../assets/Styles/CalendarStyle.css'
import ErrorScreen from '../../../errorhandling/ErrorScreen';

export const Slider = ({ config, data }) => {

  const containerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const currentPosition = container.scrollLeft;
      const targetPosition = currentPosition + scrollOffset;
      const duration = 500;
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const easing = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
        if (elapsedTime < duration) {
          container.scrollLeft =
            currentPosition +
            (targetPosition - currentPosition) * easing(elapsedTime / duration);
          requestAnimationFrame(animateScroll);
        } else {
          container.scrollLeft = targetPosition;
        }
      };
      requestAnimationFrame(animateScroll);
    }
  };

  const scrollToLeft = () => {
    handleScroll(-280);
  };

  const scrollToRight = () => {
    handleScroll(260);
  };

  return (
    <div className=" w-[55vh] bg-gray-100 flex justify-center ">
      <div
        style={{ position: "relative" }}
      >
        <div
          className='flex w-[48vh] rounded-md  overflow-hidden  '
          ref={containerRef}
        >
          {config.map((item, index) => (
            <div
              key={index}
              className=" border-4 border-gray-100  p-1  lg:h-28 h-24 flex flex-col  justify-betwee w-40  "
            >
              <div className='lg:w-[10vh] w-[13vh] mt-2 borde lg:h-24 h-20 flex justify-center'>
                <h1 className=" text-center">
                  {item.heading}
                </h1>
              </div>
              {data &&
                Object.entries(data).map(([key, value], cloneIndex) => {
                  if (item.name === key) {
                    return <div key={cloneIndex} className='flex justify-center items-baseline border lg:w-10 w-12 lg:ml-4 ml-5 bg-white -mt-12'>
                      {value}
                    </div>;
                  }
                  return null;
                })}
            </div>
          ))}
        </div>

        {(
          <>
            <button
              onClick={scrollToLeft}

              style={{
                position: "absolute",
                top: "55%",
                left: "-30px",
                transform: "translateY(-50%)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                color: "gray",
              }}
            >
              <FaPlay size={25} className="text-blue ml-3 rotate-180 " />
            </button>
            <button
              onClick={scrollToRight}

              style={{
                position: "absolute",
                top: "55%",
                right: "-20px",
                transform: "translateY(-50%)",
                backgroundColor: "transparent",
                border: " none",
                cursor: "pointer",
                color: "gray",
              }}
            >
              <FaPlay size={25} className="text-blue ml-3" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

Slider.propTypes = {
  config: PropTypes.array.isRequired,
  data: PropTypes.object,
};

const MyAttendanceComponent = () => {


  const [value, onChange] = useState(new Date());
  const [applyleave, SetApplyleave] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [leavehistory, setLeavehistory] = useState(null);
  const [leavebalance, setLeavebalance] = useState(null);
  const [punchstatus, setPunchstatus] = useState(null);
  const [errorCode, setErrorCode] = useState(null);

  const Buttonclick = (label) => {
    if (label === 'Punch In') {
      handlePunchin(true);
    } else if (label === 'Punch Out') {
      handlePunchout(true);
    } else if (label === 'Apply Leave') {
      SetApplyleave(true);
    }
  };
  const handlePunchin = () => {
    setSelectedDate(true);
    setPunchstatus('punchin')

  }
  const handlePunchout = () => {
    setPunchstatus('punchout')


  }

  const customTileClassName = ({ date, view }) => {
    let className = '';
    if (selectedDate && date.toDateString() === new Date().toDateString()) {
      className = ' bg-green-300  font-bold border-2';//bg-lime-400 or bg-green-300 bg-green-300
    }
    if (date.toDateString() === new Date().toDateString()) {
      className += ' font-bold   text-gray-700  transfor-none ring ring-gray-400 ';
    }
    if (view === 'month') {
      className += '   hover:border  py-1 rounded-md scale-75';

    }
    


    return className.trim();
  };
  const fetchgetData = async () => {
    try {


      // const response = await axios.get('http://localhost:3000/end_user_attendance')

      const queryParams = { employee_id: 'IK02' };
      const endpoint = `${EndUser_Leave_Balance}?employee_id=${queryParams.employee_id}`; // Construct endpoint URL
      const response = await fetchData(endpoint);


      console.log('Post leave', response, endpoint);

      // setLeavebalance(response.data.leave_balance)
      setLeavebalance(response.leave_balance)
    } catch (error) {
      console.error('Error posting data:', error);
      setErrorCode(error.response ? error.response.status : 500);
    }
  };


  const fetchAttendanceData = async () => {
    try {


      // const response = await axios.get('http://localhost:3000/end_user_attendance')

      const queryParams = { employee_id: 'IK03' };
      const endpoint = `${EndUser_Get_Attendance}?employee_id=${queryParams.employee_id}`; // C`onstruct endpoint URL
      const response = await fetchData(endpoint);
      setLeavehistory(response.leave_history);
      // setLeavehistory(response.data.history);
      console.log('leave history', response);
    } catch (error) {
      console.error('Error posting data:', error);
      setErrorCode(error.response ? error.response.status : 500);
    }

  };

  console.log('errorCode', errorCode);



  const punch = useCallback(async () => {

    try {
      const emp = 'IK04';

      const formData = {
        employee_id: emp,
        action: punchstatus
      }
      console.log('form data', formData)
      const response = await postData(EndUser_punch_status, formData);


      console.log('Data sent:', response);

    } catch (error) {
      console.error('Error:', error);
    }
  }, [punchstatus]);

  useEffect(() => {
    fetchgetData();
    fetchAttendanceData();
  }, []);

  useEffect(() => {
    if (punchstatus) {
      punch();
    }
  }, [punchstatus, punch]);

  if (errorCode) {
    return <ErrorScreen errorCode={errorCode} />;
  }


  return (
    <div >
      {!applyleave && (<div className='ml-10 mt-5  '>
        <div className='flex justify-end'>
          <ButtonConfig Config={AttendanceButtons} onClick={Buttonclick} />
        </div>
        <div className='flex w-[130vh] justify-between p-2  border-2 shadow-sm border-gray-100 '>

          <Card Config={Attendanccard} comp={<Slider config={leavesdata2} data={leavebalance} />}
          />
          <Card Config={Attendanccard2}
            comp={leavehistory && (
              <Table2 config={leavehistorytable} data={leavehistory} />
            )}
          />
        </div>

        <div className='mt-6 '>


          <Calendar
            onChange={onChange}
            value={value}
            className="border-2 shadow-md border-gray-100  w[100vh] h[30vh] bg text-center text-xl py-3" //hover:border-blue-500
            navigationLabel={({ label }) => (
              <span className=" p-4  mt-20  text-center text-xl font-bold   px-10">{label}</span> // Change arrow color and position
            )}
            prev2Label={null}
            nextLabel={<span className="w-fit  p-1 text-2xl ">{'>'}</span>}
            prevLabel={<span className="w-fit  p-1 text-2xl ">{'<'}</span>}
            next2Label={null}

            tileClassName={customTileClassName}

          />

        </div>
        <div>
        </div>
      </div>)}
      {applyleave && <MyLeave config={radiocontent} applyleave={SetApplyleave} />}
    </div>
  )
}

export default MyAttendanceComponent