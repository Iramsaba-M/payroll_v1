// // import React from 'react'

// // const ReportsComponent = () => {
// //   return (
// //     <div>Reports</div>
// //   )
// // }

// // export default ReportsComponent

import React, { PureComponent } from 'react';
import  { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from 'recharts';
import Card from '../../configurations/Card/CardConfig';
import axios from 'axios';
// import SettingContent from '../Settings/SettingContent';
// import { cardContent } from '../Employee/EmployeePage/EmployeeContent';
const data01 = [
  { name: 'Testing', value: 10 },
  { name: 'Front End', value: 15 },
  { name: 'Back End', value: 20 },
  { name: 'Data Enginer', value: 15 },
  { name: 'Devops', value: 10 },

];
const data02 = [
  {
    name: 'Page A',
    // uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    // uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    // uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    // uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    // uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    // uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    // uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Barchart =({data})=>{
  console.log('Barchart Data:', data);
  return(
  <ResponsiveContainer width="100%" height="100%">
              <BarChart
  
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
              </BarChart>
            </ResponsiveContainer>
      )
  }
  const Pichart=({data})=>{
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF00FF', '#00FF00'];
    return(
      <ResponsiveContainer width="100%" height="100%">
      <PieChart width={100} height={100}>
        <Pie
          data={data}
            cx="40%"
            cy="40%"
            labelLine={false} 
            outerRadius={50}
            dataKey="value"
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    )
  }
 const exmpcardContent = [
  { card: 'style1', title: 'Total CTC', contentKey: 'total_ctc' },
  { card: 'style2', title: 'Total Monthly CTC', contentKey: 'total_monthly_ctc' },
  { card: 'style3', title: 'Total Employees', contentKey: 'total_employees' },
  // Add more card data as needed
];

const exmpContent = [
  { card:'style5',chart:'barchart',heading:'Monthely Expense on PayRoll' },
  
];
const exmpContent1 = [
  
  { card:'style3',chart:'pichart', comp: <Pichart data={data01} /> ,heading:'Departments' },
  { card:'style3',chart:'pichart', comp: <Pichart data={data01} /> ,heading:'Branches'},
  
];




// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF00FF', '#00FF00'];

const ReportsComponent = () => {
  const [cardData, setCardData] = useState([]);

  const fetchCardData = async () => {
    try {
  
      const response = await axios.get('http://localhost:8000/graph_data');
      
      console.log('Card Data:', response.data);
      setCardData(response.data);
    } catch (error) {
      console.error(`Error :`, error);
    }
  };
  
  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <div className='flex justify-between'>
      <div className=''>
      <div className=''>
          
      {/* <Barchart data={data02}/> */}
          <Card Config={exmpContent} comp={<Barchart data={cardData} />} />
          <Card Config={exmpContent1}  />
        
      </div>
      {/* <div className='w-[100vh] h-[50vh]'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={80}
              // fill="#82ca9d"
              label
            >
              {data01.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div> */}
      </div>
      {/* <Card Config={exmpcardContent}  /> */}
    </div>
  )
}

export default ReportsComponent



