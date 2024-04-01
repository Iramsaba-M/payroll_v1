
import React from 'react'
import { useState, useEffect,useRef } from 'react'
import { AttendanceButtons, Attendanccard,Attendanccard2, leavesdata2, radiocontent, leavehistorytable } from './AttendanceContent'
import { leavecard1, leavecard2,leavecard3, leavecard4, leavecard5, leavecard6,leavecard7,leavecard8 } from './AttendanceContent'
import Card from '../../configurations/Card/CardConfig'
import Calendar from 'react-calendar';
import MyLeave from './MyLeave'
import TableComponent from '../../configurations/tables/TableComponent'
import axios from 'axios'
import ButtonConfig from '../../configurations/Button/ButtonConfig'
import { FaPlay } from "react-icons/fa6";

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
  handleScroll(-260);
};

const scrollToRight = () => {
  handleScroll(260);
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
        ref={containerRef}
      >
        {config.map((item,index) => (
          <div
            key={index}
            className=" border-4 border-gray-100  p-1   h-28 bg-gray-100 flex flex-col  justify-betwee w-40  "
          >
            <div className='w-[10vh] mt-2 borde h-24 flex justify-center'>
            <h1 className="     text-center">
              {item.heading}
            </h1>
            </div>
            {data &&
            Object.entries(data).map(([key, value], cloneIndex) => {
              if (item.name === key) {
                return <div key={cloneIndex} className='flex justify-center items-baseline border w-10 ml-4 bg-white -mt-12'>
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
              left: "-14px",
              transform: "translateY(-50%)",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color:"gray",
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
              color:"gray",
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


const MyAttendanceComponent = () => {


  const [value, onChange] = useState(new Date());
  const [applyleave, SetApplyleave] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [punchin, setPunchin] = useState(null);
  const [punchout, setPunchout] = useState(null);
  const [leavehistory, setLeavehistory] = useState(null);
  const [leavebalance, setLeavebalance] = useState(null);


  const Buttonclick = (label) => {
    if (label === 'Punch In' && !punchout) {
      handlePunchin(true);
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
    
  }



  const customTileClassName = ({ date, view }) => {
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
      className = ' bg-green-300  w-10 font-bold border-2';//bg-lime-400 or bg-green-300 bg-green-300
    }
    
    
    return className.trim();
  };


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
      {!applyleave && (<div className='ml-10 mt-5  '> 
        <div className='flex justify-end'>
          <ButtonConfig Config={AttendanceButtons} onClick={Buttonclick} />
        </div>
        <div className='flex w-[130vh] justify-between p-2  border-2  '>
        
          <Card Config={Attendanccard}  comp={ <Slider config={leavesdata2} data={leavebalance} />}
          />
          <Card Config={Attendanccard2} 
          comp={leavehistory && (
            <TableComponent config={leavehistorytable} data={leavehistory} />
          )}
          />
        </div>

        <div className='mt-6'>

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
            
            tileClassName={customTileClassName}
          />
        </div>
        <div>
        </div>
      </div>)}
      {applyleave && <MyLeave config={radiocontent} applyleave={SetApplyleave}/>}
    </div>
  )
}

export default MyAttendanceComponent