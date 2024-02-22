
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from 'recharts';
import Card from '../../configurations/Card/CardConfig';
// import SettingContent from '../Settings/SettingContent';
// import { cardContent } from '../Employee/EmployeePage/EmployeeContent';
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },

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
    return(
      <ResponsiveContainer width="100%" height="100%">
      <PieChart width={150} height={150}>
        <Pie
          data={data}
            cx="50%"
            cy="50%"
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
  { card:'style5',chart:'barchart', comp: <Barchart data={data02}/> },
  // { card:'style3',chart:'pichart', comp: <Pichart data={data01}/> ,heading:'Departments' },
  // { card:'style3',chart:'pichart', comp: <Pichart data={data01}/> ,heading:'Branches'},
  
];
const exmpContent1 = [
  
  { card:'style3',chart:'pichart', comp: <Pichart data={data01}/> ,heading:'Departments' },
  { card:'style3',chart:'pichart', comp: <Pichart data={data01}/> ,heading:'Branches'},
  
];

// const fetchCardData = async () => {
//   try {

//     const response = await axios.get(getApiUrl(CARDS_API));
    
   
//     setCardData(response.data);
//   } catch (error) {
//     console.error(`Error fetching ${CARDS_API} data:`, error);
//   }
// };

// useEffect(() => {
//   fetchCardData();
// }, []);


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF00FF', '#00FF00'];

const HomeComponent = () => {
  return (


    <div className='flex justify-between'>
      <div className=''>
      <div className='w-[100vh] h-[100vh]'>
          
      <Barchart data={data02} />
          {/* <Card Config={exmpContent}  /> */}
          {/* <Card Config={exmpContent1}  /> */}
        
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


  


export default HomeComponent