import React from 'react';
import { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from 'recharts';
import Card from '../../configurations/Card/CardConfig';
import axios from 'axios';
import { exmpContent, exmpContent1, exmpContent2, cardContent, cardContent2, cardContent3, internContent, insuranceContent, pfContent } from './ReportsContent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Home_and_Report_BarGraphdata, Home_and_Reportdata } from '../../api/EndPoints';
import { getApiUrl, getApiUrl2 } from '../../api/GetAPI';

const Barchart3 = ({ graphdata }) => {

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
        <YAxis />
        <Tooltip />
        <Legend />
        {graphdata.map(({ year }, index) => (
          <Bar key={year} dataKey={year} stackId="a"
            fill={defaultColors[index % defaultColors.length]}
            barSize={30} />

        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}


const Barchart = ({ graphdata }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart

        // width={500}
        // height={30}
        data={graphdata}
        margin={{
          top: 20,
          right: 30,
          left: 10,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" stackId="a" fill="#8884d8"
          barSize={55}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
const Pichart = ({ graphdata }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF00FF', '#00FF00'];
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
  const [selectedDateTop, setSelectedDateTop] = useState(null);

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
    // setSelectedDateTop(endDate);
    setSelectedDate(startDate);
    setSelectedDate1(endDate);
  }, []);
  // useEffect(() => {
  //   const selectedDateTop = new Date(); // This is a redeclaration
  //   setSelectedDateTop(selectedDateTop);
  // }, []);
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

          const response = await axios.get('http://localhost:3000/home_report_graphdata')

          // const response = await axios.post(getApiUrl2(Home_and_Report_BarGraphdata), {
          //   from: formattedStartDate,
          //   to: formattedEndDate,
          // });
          console.log('Post Response graph :', response.data);
          setBarGraphData(response.data);
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
    const fetchData2 = async () => {
      try {
        console.log('Fetching data from cardpiedata endpoint...');
        const year = selectedDateTop.getFullYear();
        const month = selectedDateTop.toLocaleString('en-us', { month: 'short' }).toLowerCase();
        // Rest of your code

        const response = await axios.get('http://localhost:3000/home_report_carddata')
        
        // const response = await axios.post(getApiUrl(Home_and_Reportdata), {
        //   year: year,
        //   month: month,
        // });
        console.log('Post Response cards:', response.data);
        setCardData(response.data);
        console.log('setCardData:', cardData);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
    fetchData2();
  }, [selectedDateTop]);


  return (
    <div className='flex flex-col'>
      <div className='flex '>
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
            className='w-[12vh]  on hover:border-blue-500 text-center  focus:outline-none '
            showMonthYearPicker
          />
        </div>


        <div className='ml-[54vh] border-2 w-[14vh] rounded-md h-10 p-2'>
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
      </div>
      <div className='flex flex-row '>
        <div className=' drop-shadow-inner'>

          <Card Config={exmpContent} comp={<Barchart3 graphdata=
            {bargraphData}
          />} />
          <div className='flex flex-row ml-6 '>
            <Card Config={exmpContent1} comp={<Pichart graphdata={cardData.departments} />} />
            <Card Config={exmpContent2} comp={<Pichart graphdata={cardData.branches} />} />
          </div>

        </div>
        <div>
          <Card Config={cardContent} contentvalue={cardData.employees} />
          <Card Config={cardContent2} contentvalue={cardData.esic} />
          <Card Config={cardContent3} contentvalue={cardData.pt} />
        </div>
        <div>
          <Card Config={internContent} contentvalue={cardData.interns} />
          <Card Config={insuranceContent} contentvalue={cardData.insurance} />
          <Card Config={pfContent} contentvalue={cardData.pf} />
        </div>
      </div>

      <div className='flex justify-end   text-slate-400 mt-8  '><p className='w-60 '>Payroll summary report</p></div>
    </div>
  )
}

export default ReportsComponent