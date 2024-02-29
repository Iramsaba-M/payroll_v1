
/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import Card from '../../configurations/Card/CardConfig';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { total_employees, total_payroll, tds, pt, epf, esic, insurance ,exmpContent,exmpContent1} from "./HomeContent";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Home_and_Report_BarGraphdata,Home_and_Reportdata } from '../../api/EndPoints';
import { getApiUrl,getApiUrl2 } from '../../api/GetAPI';

const Barchart = ({ graphdata }) => {

  if (!graphdata || !Array.isArray(graphdata)) {
    // Handle the case when graphdata is not defined or not an array
    console.error("Invalid graphdata:", graphdata);
    return null;
  }
  const data = graphdata.flatMap(({ year, month, value }) => month.map((m, index) => ({
    name: `${m}`,
    [year]: value[index]
  }))
  );

  const defaultColors = ["#8884d8", "#82ca9d", "#FFBB28"];
  return (
    <ResponsiveContainer width={1100} height={450}>
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
        <YAxis />
        {/* <Tooltip /> */}
        <Legend />
        {graphdata.map(({ year }, index) => (
          <Bar key={year} dataKey={year} stackId="a"
            fill={defaultColors[index % defaultColors.length]}
                // fill=" #4e4cc8" 
            barSize={60} />

        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

const Pichart = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF00FF', '#00FF00'];

  if (!data) {
    return null;
  }

  return (
    <ResponsiveContainer width={200} height={200} margin={{ left: 40 }}>
      <PieChart>
        <Pie
          data={data}
          cx={80}
          cy={80}
          innerRadius={30}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

  const HomeComponent = () => {
  const [cardData, setCardData] = useState([]);
  // const [selectedValue, setSelectedValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);//to
  const [selectedDate1, setSelectedDate1] = useState(null);//from
  const [graphData, setGraphData] = useState([]);
  const [selectedDateTop, setSelectedDateTop] = useState(null);

  useEffect(() => {
    const selectedDateTop = new Date(); // This is a redeclaration
    setSelectedDateTop(selectedDateTop);
  }, []);
  const handleDateChangeTop = (date) => {
    setSelectedDateTop(date);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);

  };


  const handleDateChange1 = (date) => {
    // Ensure the end date is set to the last day of the selected month
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setSelectedDate1(lastDayOfMonth);
  };

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
    const fetchData2 = async () => {
      try {
        console.log('Fetching data from cardpiedata endpoint...');
        const year = selectedDateTop.getFullYear();
        const month = selectedDateTop.toLocaleString('en-us', { month: 'short' }).toLowerCase();
        // Rest of your code

        const response = await axios.get('http://localhost:3000/home_report_carddata')

        //   const response =await axios.post(getApiUrl(Home_and_Reportdata), {
        //   year: year,
        //   month: month,
        // });
        console.log('Post Response:', response.data);
        setCardData(response.data);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
    fetchData2();
  }, [ selectedDateTop ]);

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
          console.log('Request Payload:', {
            from: formattedStartDate,
            to: formattedEndDate,
          });

          const response = await axios.get('http://localhost:3000/home_report_graphdata')

          //   const response =await axios.post(getApiUrl2(Home_and_Report_BarGraphdata), {
          //   from: formattedStartDate,
          //   to: formattedEndDate,
          // });
     
          console.log('Graph Response:', response.data);
          setGraphData(response.data);
        } else {
          console.log('Please select both "From" and "To" dates');
        }
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    fetchData();
  }, [selectedDate, selectedDate1]);

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
  
  return (
    <div className="ml-">
      <div className='ml-2 border-2 w-[13vh] rounded-md'>
         <DatePicker
      selected={selectedDateTop}
      onChange={handleDateChangeTop}
      placeholderText='To'
      dateFormat="MM/yyyy"
      style={{ appearance: 'none', background: 'transparent' }}
      className='w-[12vh] on hover:border-blue-500 text-center  focus:outline-none '
      showMonthYearPicker
    />
    </div>
  
      <div className='w-[60vh]' style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '20px' }}>
          <div className="flex ">
            <Card Config={total_employees} contentvalue={cardData.employees} />
            <Card Config={total_payroll} contentvalue={cardData.total_payroll} />
            <div className="ml-4 ">
              <Card Config={exmpContent1} comp={<Pichart data={cardData.branches} />} contentvalue2={cardData.total_payroll}/>
            </div>
          </div>
          <div className="flex -mt-[23vh] ">
            <Card Config={tds} contentvalue={cardData.pt} />
            <Card Config={pt} contentvalue={cardData.pt} />
          </div>
          <div className="flex -mt-3 ">
            <Card Config={esic} contentvalue={cardData.esic} />
            <Card Config={epf} contentvalue={cardData.pf} />
            <Card Config={insurance} contentvalue={cardData.insurance} />
          </div>
        </div>
      </div>
      {/* <RangePicker onChange={handleDateRangeChange}/> */}
      <div className='flex p-2 border-2 w-[28vh] rounded-md ml-4 '>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/yyyy"
          placeholderText='From'
          className='w-[12vh]  on hover:border-blue-500 text-center  focus:outline-none '
          showMonthYearPicker
        />
        <div className='text-gray-400'>~</div>
        <DatePicker
          selected={selectedDate1}
          onChange={handleDateChange1}
          placeholderText='To'
          dateFormat="MM/yyyy"
          style={{ appearance: 'none', background: 'transparent' }}
          className='w-[12vh] on hover:border-blue-500 text-center  focus:outline-none '
          showMonthYearPicker
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}></div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Card Config={exmpContent} comp={<Barchart graphdata={graphData} />} />
      </div>
    </div>
  );
};

export default HomeComponent;
