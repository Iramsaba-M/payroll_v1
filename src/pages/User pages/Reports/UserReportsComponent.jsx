// import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CardConfig from '../../../configurations/Card/CardConfig';
import { postData } from '../../../services/APIService'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { sickleaveContent, exmpContent1, casualleaveContent, presentdayContent } from './UserReportsContent';
import { EndUser_leaves_report } from '../../../api/EndPoints';
import ErrorScreen from '../../../errorhandling/ErrorScreen';
import PropTypes from 'prop-types';


const Barchart = ({ graphdata }) => {
  if (!graphdata || !Array.isArray(graphdata)) {
    return null;
  }

  const hasSick = graphdata.some(item => item.sick !== undefined);
  const hasCasual = graphdata.some(item => item.casual !== undefined);
  const hasPresent = graphdata.some(item => item.present_days !== undefined);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={graphdata}
        margin={{
          top: 20,
          right: 30,
          left: 10,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" align="center" height={36} iconType="circle" />
        {hasSick && <Bar dataKey="sick" fill="#6C6BF0" barSize={40} />}
        {hasCasual && <Bar dataKey="casual" fill="#A5A4F6" barSize={40} />}
        {hasPresent && <Bar dataKey="present_days" fill="#C7C7F9" barSize={40} />}
      </BarChart>
    </ResponsiveContainer>
  );
};

Barchart.propTypes = {
  graphdata: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    sick: PropTypes.number,
    casual: PropTypes.number,
    present_days: PropTypes.number,
  })).isRequired,
};

const UserReportsComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [barGraphData, setBarGraphData] = useState(null);
  const [sickData, setSickData] = useState([]);
  const [casualData, setCasualData] = useState([]);
  const [presentData, setPresentData] = useState([]);
  const [errorCode, setErrorCode] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateChange1 = (date) => {
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setSelectedDate1(lastDayOfMonth);
  };

  const transformData = useCallback((graphdata) => {
    const transformedData = [];
    const transformedSickData = [];
    const transformedCasualData = [];
    const transformedPresentData = [];

    graphdata.forEach((item) => {
      const year = item.year;

      Object.keys(item).forEach((key) => {
        if (key !== "year") {
          const month = key;
          const obj = {
            name: `${month}-${year}`,
            sick: item[key].sick,
            casual: item[key].casual,
            present_days: item[key].present_days
          };
          transformedSickData.push({ name: `${month}-${year}`, sick: item[key].sick });
          transformedCasualData.push({ name: `${month}-${year}`, casual: item[key].casual });
          transformedPresentData.push({ name: `${month}-${year}`, present_days: item[key].present_days });

          transformedData.push(obj);
        }
      });
    });

    return { transformedData, transformedSickData, transformedCasualData, transformedPresentData };
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const endDate = new Date(currentYear, currentMonth, 0);

    const startDate = new Date(
      currentMonth === 1 ? currentYear - 1 : currentYear,
      currentMonth === 1 ? 0 : currentMonth - 4,
      1
    );
    setSelectedDate(startDate);
    setSelectedDate1(endDate);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedDate && selectedDate1) {
          const formattedStartDate = {
            year: selectedDate.getFullYear(),
            month: selectedDate.toLocaleString('en-us', { month: 'short' }),
          };

          const formattedEndDate = {
            year: selectedDate1.getFullYear(),
            month: selectedDate1.toLocaleString('en-us', { month: 'short' }),
          };

          const emp = 'IK02';
          const response = await postData(`${EndUser_leaves_report}?employee_id=${emp}`, {
            from_: formattedStartDate,
            to_: formattedEndDate,
          });

          const { transformedData, transformedSickData, transformedCasualData, transformedPresentData } = transformData(response);

          setBarGraphData(transformedData);
          setSickData(transformedSickData);
          setCasualData(transformedCasualData);
          setPresentData(transformedPresentData);
        } else {
          console.log('Please select both "From" and "To" dates');
        }
      } catch (error) {
        console.error('Error posting data:', error);
        setErrorCode(error.response ? error.response.status : 500);
      }
    };
    fetchData();
  }, [selectedDate, selectedDate1, transformData]);

  if (errorCode) {
    return <ErrorScreen errorCode={errorCode} />;
  }

  return (
    <div >
       <div className='flex  border-t border-s-2 border-b-2 bg-white mt-2 border-r lg:w-[28vh] lg:h-8  rounded-md ml-4 w-[32vh] h-12'>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMM-yyyy"
          placeholderText='From'
          className='lg:w-[12vh] lg:mt-0 w-[15vh] mt-2  on hover:border-blue-500 text-center  focus:outline-none '
          showMonthYearPicker
        />
        <div className='text-gray-400'>~</div>
        <DatePicker
          selected={selectedDate1}
          onChange={handleDateChange1}
          placeholderText='To'
          dateFormat="MMM-yyyy"
          className='lg:w-[12vh] lg:mt-0 w-[15vh] mt-2  on hover:border-blue-500 text-center  focus:outline-none '
          showMonthYearPicker
        />
      </div>
      <div className='-mt-2'>
        <CardConfig Config={exmpContent1} comp={<Barchart graphdata={barGraphData} />} />
      </div>
      <div className='flex -mt-2'>
        <div>
          <CardConfig Config={casualleaveContent} comp={<Barchart graphdata={casualData} />} />
        </div>
        <div className='ml-'>
          <CardConfig Config={presentdayContent} comp={<Barchart graphdata={presentData} />} />
        </div>
        <div className='ml-'>
          <CardConfig Config={sickleaveContent} comp={<Barchart graphdata={sickData} />} />
        </div>
      </div>
    </div>
  );
};

export default UserReportsComponent;
