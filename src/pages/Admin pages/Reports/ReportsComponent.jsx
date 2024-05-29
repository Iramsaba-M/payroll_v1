
import { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from 'recharts';
import Card from '../../../configurations/Card/CardConfig';
import { exmpContent, exmpContent1, exmpContent2, cardContent, cardContent2, cardContent3, internContent, insuranceContent, pfContent } from './ReportsContent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Home_and_Report_BarGraphdata, Home_and_Reportdata } from '../../../api/EndPoints';
import { postData } from '../../../services/APIService';
import ErrorScreen from '../../../errorhandling/ErrorScreen'
import { Navigate } from 'react-router-dom';

const Barchart = ({ graphdata }) => {

  if (!graphdata || !Array.isArray(graphdata)) {
    console.error("Invalid graphdata:", graphdata);
    return null;
  }
  const data = graphdata.flatMap(({ year, month, value }) => month.map((m, index) => ({
    // name: `${m} ${year}`,
    name: `${m} `,
    [year]: value[index]
  }))
  );

  const defaultColors = ["#8884d8", "#82ca9d", "#FFBB28"];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 10,
          bottom: 5,
        }}      
      >
        <XAxis dataKey="name" />
        <YAxis axisLine={false}/>
        <Tooltip />
        <Legend />
        {/* <CartesianGrid strokeDasharray="3" /> */}
        {graphdata.map(({ year }, index) => (
          <Bar key={year} dataKey={year} stackId="a"
            fill={defaultColors[index % defaultColors.length]}
            barSize={30} />

        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

const Pichart = ({ graphdata }) => {
  const COLORS = ['#6495ED', '#008B8B', '#00CED1'];
  if (!graphdata) {
    return null;
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={100} height={100}>
        <Pie
          data={graphdata}
          cx="40%"
          cy="40%"
          labelLine={false}
          outerRadius={50}
          dataKey="value"
        >
          {graphdata.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}


const ReportsComponent = () => {
  const [cardData, setCardData] = useState([]);
  const [bargraphData, setBarGraphData] = useState([]);
  const [barArray, setBarArray] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDateTop, setSelectedDateTop] = useState(new Date());
  const [errorCode, setErrorCode] = useState(null); 

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    // If the current month is February, set selectedDateTop to the previous month (January)
    // If the current month is January, set selectedDateTop to December of the previous year
    const defaultMonth = currentMonth === 1 ? 0 : currentMonth === 0 ? 11 : currentMonth - 1;
    const selectedDateTop = new Date(
      currentMonth === 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear(),
      defaultMonth
    );
    setSelectedDateTop(selectedDateTop);
  }, []);
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Set the end date to the last day of the previous month
    const endDate = new Date(currentYear, currentMonth, 0);

    // If the current month is February, adjust the start date to exclude it
    const startDate = new Date(
      currentMonth === 1 ? currentYear - 1 : currentYear,
      currentMonth === 1 ? 0 : currentMonth - 12,
      1
    );
    setSelectedDate(startDate);
    setSelectedDate1(endDate);
  }, []);
  
  const handleDateChangeTop = (date) => {
    setSelectedDateTop(date);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDateChange1 = (date) => {
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setSelectedDate1(lastDayOfMonth);
  };

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
          console.log('before Post Response:', formattedStartDate, formattedEndDate);

          // const response = await axios.get('http://localhost:3000/home_report_graphdata')

          const response = await postData(Home_and_Report_BarGraphdata, {
            from_: formattedStartDate,
            to: formattedEndDate,
          });

          console.log('Post Response graph :', response);
          setBarGraphData(response);
        } else {
          console.log('Please select both "From" and "To" dates');
        }
      } catch (error) {
        console.error('Error posting data:', error);
       Navigate('/errorscreen')// Set error code based on response
      }
    };
    fetchData();
  }, [selectedDate, selectedDate1]);
  

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        console.log('Fetching data from cardpiedata endpoint...');
        const year = selectedDateTop.getFullYear();
        const month = selectedDateTop.toLocaleString('en-us', { month: 'short' }).toLowerCase();
        // Rest of your code

        // const response = await axios.get('http://localhost:3000/home_report_carddata')

        const response = await postData(Home_and_Reportdata, {
          year: year,
          month: month,
        });
        
        console.log('Post Response cards:', response);
        setCardData(response);
        console.log('setCardData:', cardData);
      } catch (error) {
        console.error('Error posting data:', error);
        setErrorCode(error.response ? error.response.status : 500); // Set error code based on response
      }
    };
    fetchData2();
  }, [selectedDateTop]);

  if (errorCode) {
    return <ErrorScreen errorCode={errorCode} />; // Render ErrorScreen if an error occurred
  }

  return (
    <div className='flex flex-col mt-4 ml-4'>
      <div className='flex '>
        <div className='flex  border-t border-s-2 border-b-2 border-r w-[28vh] h-8 rounded-md ml-4 '>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MMM-yyyy"
            placeholderText='From'
            className='w-[12vh]  on hover:border-blue-500 text-center  focus:outline-none '
            showMonthYearPicker
          />
          <div className='text-gray-400'>~</div>
          <DatePicker
            selected={selectedDate1}
            onChange={handleDateChange1}
            placeholderText='To'
            dateFormat="MMM-yyyy"
            style={{ appearance: 'none', background: 'transparent' }}
            className='w-[12vh]  on hover:border-blue-500 text-center  focus:outline-none '
            showMonthYearPicker
          />
        </div>


        <div className='ml-[54.5vh] border-t border-s-2 border-b-2 border-r w-[20vh] h-8 rounded-md '>
          <DatePicker
            selected={selectedDateTop}
            onChange={handleDateChangeTop}
            placeholderText='To'
            dateFormat="MMMM-yyyy"
            style={{ appearance: 'none', background: 'transparent'  }}
            className='w-[18vh] on hover:border-blue-500 text-center  focus:outline-none '
            showMonthYearPicker
          />
        </div>
      </div>
      <div className='flex flex-row '>
        <div className=''>

          <Card Config={exmpContent} comp={<Barchart graphdata=
            {bargraphData}
          />} />
          <div className='flex flex-row  justify-between '>
            <Card Config={exmpContent1} comp={<Pichart graphdata={cardData.departments} />} />
            <Card Config={exmpContent2} comp={<Pichart graphdata={cardData.branches} />} />
          </div>

        </div>
        <div>
          <Card Config={cardContent} contentvalue={cardData.employees?.toString()} />
          <Card Config={cardContent2} contentvalue={cardData.esic?.toString()} />
          <Card Config={cardContent3} contentvalue={cardData.pt?.toString()} />
        </div>
        <div>
          <Card Config={internContent} contentvalue={cardData.interns?.toString()} />
          <Card Config={insuranceContent} contentvalue={cardData.insurance?.toString()} />
          <Card Config={pfContent} contentvalue={cardData.pf?.toString()} />
        </div>
      </div>

      <div className='flex justify-end   text-slate-400 mt-20  '><p className='w-60 '>Payroll summary report</p></div>
    </div>
  )
}

export default ReportsComponent