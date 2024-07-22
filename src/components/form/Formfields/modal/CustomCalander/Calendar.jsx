// import  { useState } from 'react';
// import calendarStyles from'./CalendarStyles';
// import PropTypes from 'prop-types';

// const Calendar = ({ onRangeChange }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
//   const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [selectingStartDate, setSelectingStartDate] = useState(true);

//   const handleDateClick = (date) => {
//     if (startDate && endDate) {
//       setStartDate(date);
//       setEndDate(null);
//       setSelectedDate(date);
//       setSelectingStartDate(false);
//     } else if (!startDate && !endDate) {
//       setStartDate(date);
//       setSelectingStartDate(false);
//     } else {
//       if (date < startDate) {
//         setEndDate(startDate);
//         setStartDate(date);
//       } else {
//         setEndDate(date);
//       }
//       setSelectingStartDate(true);
//       onRangeChange(startDate, date);
//     }
//   };
//   console.log('selectingStartDate',selectingStartDate);
//   const handleMonthChange = (e) => {
//     setSelectedMonth(parseInt(e.target.value));
//     updateSelectedDate(selectedYear, parseInt(e.target.value));
//   };

//   const handleYearChange = (e) => {
//     setSelectedYear(parseInt(e.target.value));
//     updateSelectedDate(parseInt(e.target.value), selectedMonth);
//   };

//   const updateSelectedDate = (year, month) => {
//     const newDate = new Date(year, month, 1);
//     setSelectedDate(newDate);
//   };

//   const renderCalendar = () => {
//     const startOfMonth = new Date(selectedYear, selectedMonth, 1);
//     const endOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
//     const daysInMonth = [];

//     const daysInPrevMonth = new Date(selectedYear, selectedMonth, 0).getDate();
//     const startDay = startOfMonth.getDay();

//     for (let i = daysInPrevMonth - startDay + 1; i <= daysInPrevMonth; i++) {
//       const date = new Date(selectedYear, selectedMonth - 1, i);
//       daysInMonth.push(
//         <div key={`prev-${i}`} className={`${calendarStyles.day} ${calendarStyles.prevMonth}`} onClick={() => handleDateClick(date)}>
//           {i}
//         </div>
//       );
//     }

//     for (let i = 1; i <= endOfMonth.getDate(); i++) {
//       const date = new Date(selectedYear, selectedMonth, i);
//       const dayClasses = `${calendarStyles.day} ${isHighlighted(date) ? calendarStyles.highlighted : ''} ${isToday(date) ? calendarStyles.today : ''}`;
//       daysInMonth.push(
//         <div key={i} className={dayClasses} onClick={() => handleDateClick(date)}>
//           {i}
//         </div>
//       );
//     }

//     const totalDays = daysInMonth.length;
//     const remainingDays = totalDays % 7 === 0 ? 0 : 7 - totalDays % 7;
//     for (let i = 1; i <= remainingDays; i++) {
//       const date = new Date(selectedYear, selectedMonth + 1, i);
//       daysInMonth.push(
//         <div key={`next-${i}`} className={`${calendarStyles.day} ${calendarStyles.nextMonth}`} onClick={() => handleDateClick(date)}>
//           {i}
//         </div>
//       );
//     }

//     return <div className={calendarStyles.calendarGrid}>{daysInMonth}</div>;
//   };

//   const isHighlighted = (date) => {
//     if (startDate && endDate) {
//       return date >= startDate && date <= endDate;
//     }
//     return false;
//   };

//   const isToday = (date) => {
//     const today = new Date();
//     return date.toDateString() === today.toDateString();
//   };

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   const years = [];
//   const currentYear = new Date().getFullYear();
//   for (let year = currentYear - 10; year <= currentYear + 10; year++) {
//     years.push(year);
//   }

//   return (
//     <div className={calendarStyles.calendarContainer}>
//       <div className={calendarStyles.selectContainer}>
//         <select value={selectedMonth} onChange={handleMonthChange} className={calendarStyles.select}>
//           {months.map((month, index) => (
//             <option key={index} value={index}>
//               {month}
//             </option>
//           ))}
//         </select>
//         <select value={selectedYear} onChange={handleYearChange} className={calendarStyles.select}>
//           {years.map((year) => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className={calendarStyles.weekdays}>
//         <div>Sun</div>
//         <div>Mon</div>
//         <div>Tue</div>
//         <div>Wed</div>
//         <div>Thu</div>
//         <div>Fri</div>
//         <div>Sat</div>
//       </div>
//       {renderCalendar()}
//     </div>
//   );
// };

// Calendar.propTypes = {
//   onRangeChange: PropTypes.func.isRequired,
// };

// export default Calendar;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// import  { useState } from 'react';

// const calendarStyles = {
//   calendarContainer: 'w-full max-w-md mx-auto font-sans',
//   calendarGrid: 'grid grid-cols-7 gap-1 p-2 w-[60vh]',
//   weekdays: 'grid grid-cols-7 gap-1 py-2 font-bold ml-6 w-[58vh]',
//   day: 'p-2 text-center cursor-pointer border border-transparent rounded',
//   prevMonth: 'text-gray-400',
//   nextMonth: 'text-gray-400',
//   highlighted: 'bg-blue-200',
//   today: 'bg-black text-white border-black',
//   selectContainer: 'flex justify-center mb-2',
//   select: 'm-1 p-1 border border-gray-300 rounded',
//   buttonsContainer: 'flex justify-around mb-4',
//   button: 'px-4 py-2 rounded',
//   activeButton: 'bg-blue-500 text-white',
//   inactiveButton: 'bg-gray-100 text-gray-700',
// };

// const Calendar = ({ onRangeChange }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [rangeType, setRangeType] = useState('daily');
//   const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
//   const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     console.log('Selected date:', date); // Log the selected date
//   };

//   const handleMonthChange = (e) => {
//     setSelectedMonth(parseInt(e.target.value));
//     updateSelectedDate(selectedYear, parseInt(e.target.value));
//   };

//   const handleYearChange = (e) => {
//     setSelectedYear(parseInt(e.target.value));
//     updateSelectedDate(parseInt(e.target.value), selectedMonth);
//   };

//   const updateSelectedDate = (year, month) => {
//     const newDate = new Date(year, month, 1);
//     setSelectedDate(newDate);
//     onRangeChange(newDate, newDate); // Notify parent component about the new range
//   };

//   const handleDaily = () => {
//     setRangeType('daily');
//     updateSelectedDate(selectedYear, selectedMonth);
//   };

//   const handleWeekly = () => {
//     setRangeType('weekly');
//     const startOfWeek = new Date(selectedYear, selectedMonth, selectedDate.getDate() - selectedDate.getDay());
//     const endOfWeek = new Date(selectedYear, selectedMonth, selectedDate.getDate() + (6 - selectedDate.getDay()));
//     setSelectedDate(startOfWeek);
//     onRangeChange(startOfWeek, endOfWeek); // Notify parent component about the new range
//   };

//   const handleMonthly = () => {
//     setRangeType('monthly');
//     const startOfMonth = new Date(selectedYear, selectedMonth, 1);
//     const endOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
//     setSelectedDate(startOfMonth);
//     onRangeChange(startOfMonth, endOfMonth); // Notify parent component about the new range
//   };

//   const handleYearly = () => {
//     setRangeType('yearly');
//     const startOfYear = new Date(selectedYear, 0, 1);
//     const endOfYear = new Date(selectedYear, 11, 31);
//     setSelectedDate(startOfYear);
//     onRangeChange(startOfYear, endOfYear); // Notify parent component about the new range
//   };

//   const handleCustom = () => {
//     setRangeType('custom');
//     // Implement custom range selection logic here
//     // For now, let's just log a message
//     console.log('Custom range selected');
//   };

//   const renderCalendar = () => {
//     const startOfMonth = new Date(selectedYear, selectedMonth, 1);
//     const endOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
//     const daysInMonth = [];

//     // Calculate the number of days in the previous month
//     const daysInPrevMonth = new Date(selectedYear, selectedMonth, 0).getDate();

//     // Determine the starting day of the current month
//     const startDay = startOfMonth.getDay(); // 0 (Sunday) to 6 (Saturday)

//     // Fill the previous month's days
//     for (let i = daysInPrevMonth - startDay + 1; i <= daysInPrevMonth; i++) {
//       const date = new Date(selectedYear, selectedMonth - 1, i);
//       daysInMonth.push(
//         <div key={`prev-${i}`} className={`${calendarStyles.day} ${calendarStyles.prevMonth}`} onClick={() => handleDateClick(date)}>
//           {i}
//         </div>
//       );
//     }

//     // Fill the current month's days
//     for (let i = 1; i <= endOfMonth.getDate(); i++) {
//       const date = new Date(selectedYear, selectedMonth, i);
//       const dayClasses = `${calendarStyles.day} ${isHighlighted(date) ? calendarStyles.highlighted : ''} ${isToday(date) ? calendarStyles.today : ''}`;
//       daysInMonth.push(
//         <div key={i} className={dayClasses} onClick={() => handleDateClick(date)}>
//           {i}
//         </div>
//       );
//     }

//     // Fill the next month's days to complete the grid
//     const totalDays = daysInMonth.length;
//     const remainingDays = totalDays % 7 === 0 ? 0 : 7 - totalDays % 7;
//     for (let i = 1; i <= remainingDays; i++) {
//       const date = new Date(selectedYear, selectedMonth + 1, i);
//       daysInMonth.push(
//         <div key={`next-${i}`} className={`${calendarStyles.day} ${calendarStyles.nextMonth}`} onClick={() => handleDateClick(date)}>
//           {i}
//         </div>
//       );
//     }

//     return <div className={calendarStyles.calendarGrid}>{daysInMonth}</div>;
//   };

//   const isHighlighted = (date) => {
//     const selected = new Date(selectedDate);
//     if (rangeType === 'weekly') {
//       return date.getDay() === selected.getDay();
//     } else if (rangeType === 'monthly') {
//       return date.getDate() === selected.getDate();
//     } else if (rangeType === 'yearly') {
//       return date.getMonth() === selected.getMonth();
//     }
//     return date.toDateString() === selected.toDateString();
//   };

//   const isToday = (date) => {
//     const today = new Date();
//     return date.toDateString() === today.toDateString();
//   };

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   const years = [];
//   const currentYear = new Date().getFullYear();
//   for (let year = currentYear - 10; year <= currentYear + 10; year++) {
//     years.push(year);
//   }

//   return (
//     <div className={calendarStyles.calendarContainer}>
//       <div className={calendarStyles.selectContainer}>
//         <select value={selectedMonth} onChange={handleMonthChange} className={calendarStyles.select}>
//           {months.map((month, index) => (
//             <option key={index} value={index}>
//               {month}
//             </option>
//           ))}
//         </select>
//         <select value={selectedYear} onChange={handleYearChange} className={calendarStyles.select}>
//           {years.map((year) => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className={calendarStyles.buttonsContainer}>
//         <button onClick={handleDaily} className={`${calendarStyles.button} ${rangeType === 'daily' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Daily</button>
//         <button onClick={handleWeekly} className={`${calendarStyles.button} ${rangeType === 'weekly' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Weekly</button>
//         <button onClick={handleMonthly} className={`${calendarStyles.button} ${rangeType === 'monthly' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Monthly</button>
//         <button onClick={handleYearly} className={`${calendarStyles.button} ${rangeType === 'yearly' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Yearly</button>
//         <button onClick={handleCustom} className={`${calendarStyles.button} ${rangeType === 'custom' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Custom</button>
//       </div>
//       <div className={calendarStyles.weekdays}>
//         <div>Sun</div>
//         <div>Mon</div>
//         <div>Tue</div>
//         <div>Wed</div>
//         <div>Thu</div>
//         <div>Fri</div>
//         <div>Sat</div>
//       </div>
//       {renderCalendar()}
//     </div>
//   );
// };

// export default Calendar;

// import  { useState } from 'react';
// import PropTypes from 'prop-types';
// import { calendarStyles } from './CalendarStyles';

// const Calendar = ({ onRangeChange  }) => { //, rec
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [rangeType, setRangeType] = useState('daily');
//   const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
//   const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());
//   const [mode, setMode] = useState('normal');
//   const [rangeStart, setRangeStart] = useState(null);
//   const [rangeEnd, setRangeEnd] = useState(null);
//   const highlighted = null ;

//   const handleDateClick = (date) => {
//     if (mode === 'range picker') {
//       if (!rangeStart || (rangeStart && rangeEnd)) {
//         setRangeStart(date);
//         setRangeEnd(null);
//       } else {
//         if (date >= rangeStart) {
//           setRangeEnd(date);
//           // onRangeChange(formatDate(rangeStart), formatDate(date));
//         } else {
//           setRangeStart(date);
//           setRangeEnd(null);
//         }
//       }
//     } else {
//       setSelectedDate(date);
//       console.log('Selected date:', date);
//     }
//   };

//   const handleMonthChange = (e) => {
//     setSelectedMonth(parseInt(e.target.value));
//     updateSelectedDate(selectedYear, parseInt(e.target.value));
//   };

//   const handleYearChange = (e) => {
//     setSelectedYear(parseInt(e.target.value));
//     updateSelectedDate(parseInt(e.target.value), selectedMonth);
//   };

//   const updateSelectedDate = (year, month) => {
//     const newDate = new Date(year, month, 1);
//     setSelectedDate(newDate);
//     // onRangeChange(newDate, newDate);
//   };

//   const handleDaily = () => {
//     setRangeType('daily');
//     updateSelectedDate(selectedYear, selectedMonth);
//   };

//   const handleWeekly = () => {
//     setRangeType('weekly');
//     const startOfWeek = new Date(selectedYear, selectedMonth, selectedDate.getDate() - selectedDate.getDay());
//     const endOfWeek = new Date(selectedYear, selectedMonth, selectedDate.getDate() + (6 - selectedDate.getDay()));
//     setSelectedDate(startOfWeek);
//     console.log(startOfWeek,endOfWeek);
//     // onRangeChange(startOfWeek, endOfWeek);

//   };

//   const handleMonthly = () => {
//     setRangeType('monthly');
//     const startOfMonth = new Date(selectedYear, selectedMonth, 1);
//     const endOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
//     setSelectedDate(startOfMonth);
//     // onRangeChange(startOfMonth, endOfMonth);
//   };

//   const handleYearly = () => {
//     setRangeType('yearly');
//     const startOfYear = new Date(selectedYear, 0, 1);
//     const endOfYear = new Date(selectedYear, 11, 31);
//     setSelectedDate(startOfYear);
//     // onRangeChange(startOfYear, endOfYear);
//   };

//   const handleCustom = () => {
//     setRangeType('custom');
//     console.log('Custom range selected');
//   };
//   const handleSave = () => {
//     if (rangeStart && rangeEnd ) {
//       onRangeChange(formatDate(rangeStart),formatDate(rangeEnd), highlighted );
//     }

//   };

//   const renderCalendar = () => {
//     const startOfMonth = new Date(selectedYear, selectedMonth, 1);
//     const endOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
//     const daysInMonth = [];

//     const daysInPrevMonth = new Date(selectedYear, selectedMonth, 0).getDate();
//     const startDay = startOfMonth.getDay();

//     for (let i = daysInPrevMonth - startDay + 1; i <= daysInPrevMonth; i++) {
//       const date = new Date(selectedYear, selectedMonth - 1, i);
//       daysInMonth.push(
//         <div key={`prev-${i}`} className={`${calendarStyles.day} ${calendarStyles.prevMonth}`} onClick={() => handleDateClick(date)}>
//           {i}
//         </div>
//       );
//     }

//     for (let i = 1; i <= endOfMonth.getDate(); i++) {
//       const date = new Date(selectedYear, selectedMonth, i);
//       const dayClasses = `${calendarStyles.day} ${isHighlighted(date) ? calendarStyles.highlighted : ''} ${isToday(date) ? calendarStyles.today : ''}`;
//       daysInMonth.push(
//         <div key={i} className={dayClasses} onClick={() => handleDateClick(date)}>
//           {i}
//         </div>
//       );
//     }

//     const totalDays = daysInMonth.length;
//     const remainingDays = totalDays % 7 === 0 ? 0 : 7 - totalDays % 7;
//     for (let i = 1; i <= remainingDays; i++) {
//       const date = new Date(selectedYear, selectedMonth + 1, i);
//       daysInMonth.push(
//         <div key={`next-${i}`} className={`${calendarStyles.day} ${calendarStyles.nextMonth}`} onClick={() => handleDateClick(date)}>
//           {i}
//         </div>
//       );
//     }

//     return <div className={calendarStyles.calendarGrid}>{daysInMonth}</div>;
//   };

//   const isHighlighted = (date) => {
//     if (mode === 'range picker' && rangeStart && rangeEnd) {
//       return date >= rangeStart && date <= rangeEnd;
//     }
//     const selected = new Date(selectedDate);
//     // if (rangeType === 'weekly') {
//     //   return date.getDay() === selected.getDay();
//     // } else if (rangeType === 'monthly') {
//     //   return date.getDate() === selected.getDate();
//     // } else if (rangeType === 'yearly') {
//     //   return date.getMonth() === selected.getMonth();
//     // }
//     // let highlighted = false;
//     if(mode === 'normal'){
//       return date.toDateString() === selected.toDateString();
//     }
    
//     if (rangeType === 'weekly') {


//       highlighted = date.getDay() === selected.getDay() && date >= selected;

//     } else if (rangeType === 'monthly') {
//       highlighted = date.getDate() === selected.getDate();
//     } else if (rangeType === 'yearly') {
//       highlighted = date.getMonth() === selected.getMonth();
//     }
//     if (highlighted) {
//       console.log('Highlighted date:', date);
//       // rec(highlighted)
//     }
//     return highlighted;
    
//     // return date.toDateString() === selected.toDateString();
//   };




//   const isToday = (date) => {
//     const today = new Date();
//     return date.toDateString() === today.toDateString();
//   };

//   const formatDate = (date) => {
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   const years = [];
//   const currentYear = new Date().getFullYear();
//   for (let year = currentYear - 10; year <= currentYear + 10; year++) {
//     years.push(year);
//   }

//   return (
//     <div className={calendarStyles.calendarContainer}>
//       <div className={calendarStyles.selectContainer}>
//         <select value={selectedMonth} onChange={handleMonthChange} className={calendarStyles.select}>
//           {months.map((month, index) => (
//             <option key={index} value={index}>
//               {month}
//             </option>
//           ))}
//         </select>
//         <select value={selectedYear} onChange={handleYearChange} className={calendarStyles.select}>
//           {years.map((year) => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className={calendarStyles.buttonsContainer}>
//         <button onClick={() => setMode('normal')} className={`${calendarStyles.button} ${mode === 'normal' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Normal</button>
//         <button onClick={() => setMode('range picker')} className={`${calendarStyles.button} ${mode === 'range picker' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Range Picker</button>
//         <button onClick={() => setMode('recursive')} className={`${calendarStyles.button} ${mode === 'recursive' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Recursive</button>
//       </div>
//       {mode === 'recursive' && (
//         <div className={calendarStyles.buttonsContainer}>
//           <button onClick={handleDaily} className={`${calendarStyles.button} ${rangeType === 'daily' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Daily</button>
//           <button onClick={handleWeekly} className={`${calendarStyles.button} ${rangeType === 'weekly' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Weekly</button>
//           <button onClick={handleMonthly} className={`${calendarStyles.button} ${rangeType === 'monthly' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Monthly</button>
//           <button onClick={handleYearly} className={`${calendarStyles.button} ${rangeType === 'yearly' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Yearly</button>
//           <button onClick={handleCustom} className={`${calendarStyles.button} ${rangeType === 'custom' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Custom</button>
//         </div>
//       )}
//       {mode === 'range picker' && (
//       <div className={calendarStyles.buttonsContainer}>
//         <div>
//           Start Date: {rangeStart ? formatDate(rangeStart) : 'Not Selected'}
//         </div>
//         <div>
//           End Date: {rangeEnd ? formatDate(rangeEnd) : 'Not Selected'}
//         </div>
//       </div>)}
//              <div className={calendarStyles.weekdays}>
//         <div>Sun</div>
//          <div>Mon</div>
//          <div>Tue</div>
//          <div>Wed</div>
//          <div>Thu</div>
//          <div>Fri</div>
//          <div>Sat</div>
//        </div>
//       {renderCalendar()}
//       <div className={calendarStyles.buttonsContainer}>
//         <button onClick={handleSave} className={`${calendarStyles.button} ${calendarStyles.saveButton}`}>Save</button>
//       </div>
//     </div>
//   );
// };

// Calendar.propTypes = {
//   onRangeChange: PropTypes.string,
// };

// export default Calendar;

import { useState } from 'react';
import PropTypes from 'prop-types';
import { calendarStyles } from './CalendarStyles';

const Calendar = ({ onRangeChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rangeType, setRangeType] = useState('daily');
  const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());
  const [mode, setMode] = useState('normal');
  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);
  const [highlightedDates, setHighlightedDates] = useState([]);

  const handleDateClick = (date) => {
    if (mode === 'range picker') {
      if (!rangeStart || (rangeStart && rangeEnd)) {
        setRangeStart(date);
        setRangeEnd(null);
      } else {
        if (date >= rangeStart) {
          setRangeEnd(date);
        } else {
          setRangeStart(date);
          setRangeEnd(null);
        }
      }
    } else {
      setSelectedDate(date);
      console.log('Selected date:', date);
    }
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
    updateSelectedDate(selectedYear, parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
    updateSelectedDate(parseInt(e.target.value), selectedMonth);
  };

  const updateSelectedDate = (year, month) => {
    const newDate = new Date(year, month, 1);
    setSelectedDate(newDate);
  };

  const handleDaily = () => {
    setRangeType('daily');
    updateSelectedDate(selectedYear, selectedMonth);
  };

  const handleWeekly = () => {
    setRangeType('weekly');
    const startOfWeek = new Date(selectedYear, selectedMonth, selectedDate.getDate() - selectedDate.getDay());
    const endOfWeek = new Date(selectedYear, selectedMonth, selectedDate.getDate() + (6 - selectedDate.getDay()));
    setSelectedDate(startOfWeek);
    console.log(startOfWeek, endOfWeek);
  };

  const handleMonthly = () => {
    setRangeType('monthly');
    const startOfMonth = new Date(selectedYear, selectedMonth, 1);
    const endOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
    setSelectedDate(startOfMonth);
  };

  const handleYearly = () => {
    setRangeType('yearly');
    const startOfYear = new Date(selectedYear, 0, 1);
    const endOfYear = new Date(selectedYear, 11, 31);
    setSelectedDate(startOfYear);
  };

  const handleCustom = () => {
    setRangeType('custom');
    console.log('Custom range selected');
  };

  const handleSave = () => {
    console.log('sabve',rangeStart,highlightedDates,rangeEnd);
    if ( rangeStart && rangeEnd) {
      onRangeChange(formatDate(rangeStart), formatDate(rangeEnd), highlightedDates.map(date => formatDate(date)));
    }
     else if (highlightedDates.length > 0) {
      onRangeChange(highlightedDates.map(date => formatDate(date)));
    }
  };

  const renderCalendar = () => {
    const startOfMonth = new Date(selectedYear, selectedMonth, 1);
    const endOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
    const daysInMonth = [];

    const daysInPrevMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const startDay = startOfMonth.getDay();

    for (let i = daysInPrevMonth - startDay + 1; i <= daysInPrevMonth; i++) {
      const date = new Date(selectedYear, selectedMonth - 1, i);
      daysInMonth.push(
        <div key={`prev-${i}`} className={`${calendarStyles.day} ${calendarStyles.prevMonth}`} onClick={() => handleDateClick(date)}>
          {i}
        </div>
      );
    }

    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      const date = new Date(selectedYear, selectedMonth, i);
      const dayClasses = `${calendarStyles.day} ${isHighlighted(date) ? calendarStyles.highlighted : ''} ${isToday(date) ? calendarStyles.today : ''}`;
      daysInMonth.push(
        <div key={i} className={dayClasses} onClick={() => handleDateClick(date)}>
          {i}
        </div>
      );
    }

    const totalDays = daysInMonth.length;
    const remainingDays = totalDays % 7 === 0 ? 0 : 7 - totalDays % 7;
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(selectedYear, selectedMonth + 1, i);
      daysInMonth.push(
        <div key={`next-${i}`} className={`${calendarStyles.day} ${calendarStyles.nextMonth}`} onClick={() => handleDateClick(date)}>
          {i}
        </div>
      );
    }

    return <div className={calendarStyles.calendarGrid}>{daysInMonth}</div>;
  };

  const isHighlighted = (date) => {
    if (mode === 'range picker' && rangeStart && rangeEnd) {
      return date >= rangeStart && date <= rangeEnd;
    }
    const selected = new Date(selectedDate);
    if (mode === 'normal') {
      return date.toDateString() === selected.toDateString();
    }

    let highlighted = false;
    if (rangeType === 'weekly') {
      highlighted = date.getDay() === selected.getDay() && date >= selected;
    } else if (rangeType === 'monthly') {
      highlighted = date.getDate() === selected.getDate();
    } else if (rangeType === 'yearly') {
      highlighted = date.getMonth() === selected.getMonth();
    }

    if (highlighted) {
      if (!highlightedDates.some(d => d.getTime() === date.getTime())) {
        setHighlightedDates([...highlightedDates, date]);
      }
      console.log('Highlighted date:', date);
    }
    return highlighted;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear - 10; year <= currentYear + 10; year++) {
    years.push(year);
  }

  return (
    <div className={calendarStyles.calendarContainer}>
      <div className={calendarStyles.selectContainer}>
        <select value={selectedMonth} onChange={handleMonthChange} className={calendarStyles.select}>
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select value={selectedYear} onChange={handleYearChange} className={calendarStyles.select}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className={calendarStyles.buttonsContainer}>
        <button onClick={() => setMode('normal')} className={`${calendarStyles.button} ${mode === 'normal' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Normal</button>
        <button onClick={() => setMode('range picker')} className={`${calendarStyles.button} ${mode === 'range picker' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Range Picker</button>
        <button onClick={() => setMode('recursive')} className={`${calendarStyles.button} ${mode === 'recursive' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Recursive</button>
      </div>
      {mode === 'recursive' && (
        <div className={calendarStyles.buttonsContainer}>
          <button onClick={handleDaily} className={`${calendarStyles.button} ${rangeType === 'daily' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Daily</button>
          <button onClick={handleWeekly} className={`${calendarStyles.button} ${rangeType === 'weekly' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Weekly</button>
          <button onClick={handleMonthly} className={`${calendarStyles.button} ${rangeType === 'monthly' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Monthly</button>
          <button onClick={handleYearly} className={`${calendarStyles.button} ${rangeType === 'yearly' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Yearly</button>
          <button onClick={handleCustom} className={`${calendarStyles.button} ${rangeType === 'custom' ? calendarStyles.activeButton : calendarStyles.inactiveButton}`}>Custom</button>
        </div>
      )}
      {mode === 'range picker' && (
        <div className={calendarStyles.buttonsContainer}>
          <div>
            Start Date: {rangeStart ? formatDate(rangeStart) : 'Not Selected'}
          </div>
          <div>
            End Date: {rangeEnd ? formatDate(rangeEnd) : 'Not Selected'}
          </div>
        </div>
      )}
      <div className={calendarStyles.weekdays}>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      {renderCalendar()}
      <div className={calendarStyles.buttonsContainer}>
        <button onClick={handleSave} className={`${calendarStyles.button} ${calendarStyles.saveButton}`}>Save</button>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  onRangeChange: PropTypes.func.isRequired,
};

export default Calendar;

