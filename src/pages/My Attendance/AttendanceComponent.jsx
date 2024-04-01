  import React from 'react'
  import { useState, useEffect,useRef } from 'react'
  import { AttendanceButtons, Attendanccard,Attendanccard2, leavesdata2, radiocontent, leavehistorytable } from './AttendanceContent'
  import Button from '../../configurations/Button/Button'
  import Card from '../../configurations/Card/CardConfig'
  // import DatePicker from 'react-datepicker';
  import Calendar from 'react-calendar';
  import MyLeave from './MyLeave'
  import TableComponent from '../../configurations/tables/TableComponent'
  import axios from 'axios'
  import ButtonConfig from '../../configurations/Button/ButtonConfig'
  import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
  import { FaPlay } from "react-icons/fa6";
  // import dayjs from 'dayjs'; // Import dayjs for date formatting
  // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  /////////
  // import {Calendar,dateFnsLocalizer} from "react-big-calendar"
  export const Slider =({config,data})=>{
   
    const containerRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);

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
    handleScroll(-240);
  };

  const scrollToRight = () => {
    handleScroll(240);
  };

  return (
    <div className=" ">
      <div
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
        style={{ position: "relative" }}
      >
        <div
          className='flex w-[48.7vh] rounded-md  overflow-hidden  '
          // style={{ display: "flex", overflowX: "hidden" }}
          ref={containerRef}
        >
          {config.map((item,index) => (
            <div
              key={index}
              className=" border-4 border-gray-100    p-2 h-28 bg-gray-100 flex flex-col  justify-betwee w-40  "
            >
              
              <h1 className="  w-24 h-24 borde border-white flex text-center">
                {item.heading}
              </h1>
              {data &&
              Object.entries(data).map(([key, value], cloneIndex) => {
                if (item.name === key) {
                  return <div className='flex justify-center items-baseline border w-10 ml-6 bg-white -mt-10'>
                  {value}
                  </div>;
                }
                return null;
              })}
              
              {/* <div className='flex justify-center items-baseline border w-10 ml-6 bg-white -mt-10'>
                {item.value}
                </div> */}

              
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
                left: "-10px",
                transform: "translateY(-50%)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                color:"gray"
                // backgroundColor: "white",
                // borderRadius: "50%",
                // height: "70px",
                // width: "50px",
              }}
            >
              <FaPlay size={25} className="text-blue ml-3 rotate-180 " />
            </button>
            <button
              onClick={scrollToRight}
             
              style={{
                position: "absolute",
                top: "55%",
                right: "-5px",
                transform: "translateY(-50%)",
                backgroundColor: "transparent",
                border: " none",
                cursor: "pointer",
                color:"gray"
                // backgroundColor: "white",
                // borderRadius: "50%",
                // height: "50px",
                // width: "50px",
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


  const AttendanceComponent = () => {

    // type Value = ValuePiece | [ValuePiece, ValuePiece];

    const [value, onChange] = useState(new Date());
    const [applyleave, SetApplyleave] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [punchin, setPunchin] = useState(null);
    const [punchout, setPunchout] = useState(null);
    const [leavehistory, setLeavehistory] = useState(null);
    const [leavebalance, setLeavebalance] = useState(null);


    // console.log(value);
    const Buttonclick = (label) => {
      if (label === 'Punch In' && !punchout) {
        // SetApplyleave(true);
        handlePunchin(true);
        // console.log('p1');
      } else if (label === 'Punch Out' && punchin) {
        handlePunchout(true);
      } else if (label === 'Apply Leave') {
        SetApplyleave(true);
      }
    };
    const handlePunchin = () => {
      setSelectedDate(value);
      setPunchin(value);
      console.log('punch in',value)
    }
    const handlePunchout = () => {
      const punchouttime=new Date().toLocaleString();
      setSelectedDate(punchouttime);
      setPunchout(punchouttime);
      console.log('punch out',punchouttime)
      // console.log('punch in')
    }

  

    const customTileClassName = ({ date, view }) => {
      // console.log(date.getMonth(),new Date().getMonth())
      let className = '';
      if (date.toDateString() === new Date().toDateString()   ) {
        className += ' font-bold border-2 bg-blue-300   border-black w-10  ';
      }
      if (view === 'month') {
        className += 'border-4 bg-white hover:bordre-blue-800 hover:border  border-blue-100 p-2 rounded-md  ';
       
      }
      // if( date.getMonth() !== new Date().getMonth){
      //   className +='text-black '
      // }
      if (selectedDate && date.toDateString() === new Date().toDateString()) {
        className = ' bg-lime-300 w-10 font-bold border-2';//bg-lime-400 or bg-green-300
      }
      
      
      return className.trim();
    };

    // const customTileContent = ({ date, view }) => {
    //   // Check if the current date is the selected date
    //   if (date.toDateString() === new Date().toDateString()) {
    //     retuen= 'bg-blue-800 text-white w-10';
    //   }
    //   return null; // Return null otherwise
    // };

    const fetchData = async () => {
      try {
        

        const response = await axios.get('http://localhost:3000/end_user_attendance')

        // const response = await postData(Home_and_Report_BarGraphdata, {
        //   year: year,
        //   month: month,
        // });
        console.log('Post Response cards:', response.data);
        setLeavehistory(response.data.history);
        setLeavebalance(response.data.leave_balance)
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);


    return (
      <div >
        {!applyleave && (<div className='ml-10 '> 
          <div className='flex justify-end'>
            <ButtonConfig Config={AttendanceButtons} onClick={Buttonclick} />
          </div>
          <div className='flex justify-center p-2  border-2 '>
          
            <Card Config={Attendanccard}  comp={ <Slider config={leavesdata2} data={leavebalance} />}
            />
            <Card Config={Attendanccard2} 
            comp={leavehistory && (
              <TableComponent config={leavehistorytable} data={leavehistory} />
            )}
            />
          </div>

          <div className='mt-2 '>
            {/* <Calendar onChange={onChange} value={value} 
            // style={{ appearance: 'none', background: 'transparent'  }}
            className=' border-2 hover:border-blue-500 bg-blue-50 text-center  py-5 '
            /> */}

            <Calendar
              onChange={onChange}
              value={value}
              className="border-2  bg-blue-100 text-center text-sm py-1" //hover:border-blue-500
              navigationLabel={({ label }) => (
                <span className=" p-4  mt-20  text-center text-xl font-bold   px-10">{label}</span> // Change arrow color and position
              )}
              prev2Label={null}
              nextLabel={<span className="w-fit  p-1 text-2xl ">{'>'}</span>}
              prevLabel={<span className="w-fit  p-1 text-2xl ">{'<'}</span>}
              next2Label={null}
              // tileClassName={({ date, view }) =>
              //   view === 'month' ? 'hover:bg-blue-600 p-2 rounded-md ' : ""
              // }
              tileClassName={customTileClassName}
            // tileContent={customTileContent}

            />
          </div>
          <div>
          </div>
        </div>)}
        {applyleave && <MyLeave config={radiocontent} applyleave={SetApplyleave}/>}
      </div>
    )
  }

  export default AttendanceComponent