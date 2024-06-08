import { useEffect, useState } from 'react'
import { useButtonState } from "../../../context/ButtonStateContext"
import { Admin, Personal } from "../../Admin pages/Home/HomeContent"
import Button from '../../../configurations/Button/Button';
import { UserHomeconfig, picard } from './UserHomeContent'
import TextStyle from '../../../components/form/Formfields/text/TextStyle';
import TextComponent from '../../../components/form/Formfields/text/TextComponent';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import CardConfig from '../../../configurations/Card/CardConfig';
import { BASIC_DETAILS_API_Get, DOCUMENT_DETAILS_API_GET, ENDUSER_HOME_EMPLOYEE_CTC } from '../../../api/EndPoints';
import { fetchData } from '../../../services/APIService';
import PropTypes from 'prop-types';


const Pichart = ({ data }) => {
  const COLORS = ['#6C6BF0', '#AEAEF7', '#CFCFFA'];

  if (!data) {
    return null;
  }
  return (
    <ResponsiveContainer >
      <PieChart >
        <Pie
          data={data}
          cx={90}
          cy={80}
          innerRadius={50}
          outerRadius={85}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend verticalAlign='middle' align="right" layout='vertical' width={200} iconType="circle" margin={{ top: 200, left: 0, right: 0, bottom: 0 }} />
      </PieChart>

    </ResponsiveContainer>
  );
};
Pichart.propTypes = {
  data: PropTypes.array, // Ensure data is an array
};


const UserHomeComponent = () => {
  const { isAdmin, isPersonal, handleAdminClick, handlePersonalClick } = useButtonState();
  console.log(UserHomeconfig);

  const [employee, setEmployee] = useState([])
  const [documentvalue, setDocumentvalue] = useState();
  const [pidata, setPidata] = useState();

  const Fetchemployee = async () => {
    try {
      const employee_id = 'IK100022'
      const employee_id1 = 'IK01'
      const basicDetailsUrl = `${BASIC_DETAILS_API_Get}/${employee_id}`;
      const documentsUrl = `${DOCUMENT_DETAILS_API_GET}/${employee_id}`;
      const ctcstructureurl = `${ENDUSER_HOME_EMPLOYEE_CTC}?employee_id=${employee_id1}`;

      try {
        const basicDetailsResponse = await fetchData(basicDetailsUrl);
        console.log("Basic Details Result:", basicDetailsResponse);
        setEmployee(basicDetailsResponse);
      } catch (error) {
        console.error("Error fetching basic details:", error);
      }

      try {
        const documentsDetailsResponse = await fetchData(documentsUrl);
        console.log("Documents Details Result:", documentsDetailsResponse);
        setDocumentvalue(documentsDetailsResponse);
      } catch (error) {
        console.error("Error fetching documents details:", error);
      }

      try {
        const ctcstructure = await fetchData(ctcstructureurl);
        const data = ctcstructure;

        // const ctcstructure = await axios.get('http://localhost:3000/enduser_home')
        // const data=ctcstructure.data;


        const transformedData = [
          { name: 'Deductions', value: parseFloat(data[0].deduction.toFixed(2)) },
          { name: 'Earnings', value: parseFloat(data[0].earnings.toFixed(2)) },
          { name: 'Annual CTC', value: parseFloat(data[0].annual_ctc.toFixed(2)) }
        ];

        setPidata(transformedData)
        console.log('employee2', transformedData);

      } catch (error) {
        console.error("Error ctc :", error);
      }

    } catch (error) {
      console.error('Error in fetching data:', error);
    }

  };
  useEffect(() => {
    Fetchemployee();
  }, []);

  console.log('employee', employee, documentvalue);
  return (
    <div className=' ml-12  mt-2  px-2 '>
      <div className='flex ml-[119.5vh] '>
        <Button onClick={handleAdminClick} Configs={Admin} activeButton={isAdmin ? 'Admin' : ''} />
        <Button onClick={handlePersonalClick} Configs={Personal} activeButton={isPersonal ? 'Personal' : ''} />
      </div>

      <div className=''>
        <div className='p-2 px-6 lg:w-[143vh] border lg:h-20 shadow-md bg-white rounded w-[147vh] h-24'>
          Announcements :(Reading salary,ESIC,EPF contributions)
        </div>

        <div className='flex mt-4'>
          <div className='md:w-3/10 border rounded  shadow-md  px-11'>

            <div className='  '>
              <h2 className='font-bold text-gray-600 lg:text-sm py-1 text-lg'>PROFILE IMAGE</h2>
              {(employee.photo_content) && (
                <>
                  <img
                    src={`data:image/png;base64, ${employee.photo_content}`}
                    alt='Uploaded'
                    className={'lg:w-40 justify-center items-center w-52'}
                  />
                </>
              )}
            </div>
            <div>
              <div className="form-field ">
                <h2 className='font-bold lg:text-base py-1 text-lg' style={{ color: '#6C6BF0' }}>EMPLOYEE DETAILS </h2>
                {UserHomeconfig.slice(0, 5).map((field, index) => (
                  <div key={index} className={`form-field py-1 `}>
                    <label className={TextStyle[field.textcss].label}>
                      {field.label}

                    </label>
                    {field.type === "text" && (
                      <TextComponent
                        name={field.name}
                        placeholder={field.placeholder}
                        value={employee[field.name] || ""}
                        textcss={TextStyle[field.textcss].input}
                        readonly={field.readonly}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='md:w-7/10 mx-7 px-2'>

            <h2 className=' lg:text-2xl font-bold  text-3xl'>
              Welcome Back <span className='text-blue-800 '>{employee ? employee.first_name : ''} </span> !
            </h2>
            <div className='mt-2'>
              <CardConfig Config={picard} comp={<Pichart data={pidata} />} />
            </div>
            <div className='border px-7 rounded-md shadow-md py-1'>
              <h className='font-semibold text-gray-700 '>MY Documents : </h>
              {UserHomeconfig.slice(5, 9).map((field, index) => (

                <div key={index} className='lg:h-8 border-2 my-2 h-12  ' style={{ backgroundColor: '#D1D1F8' }}>
                  <span className='flex lg:text-sm text-lg'>
                    <label className=' text-gray-700 lg:p-1 px-3 font-semibold w-32   p-2'>
                      {field.label}
                    </label>
                    <div >
                      <span className=''></span>
                      {documentvalue && documentvalue.map((doc, index) => (
                        doc.document_type === field.name ? (
                          <div key={index} className=' ml-3 mt-2 lg:mt-1 text-gray-500 font-semibold'>:{'  '} {doc.document_number}</div>
                        ) : ' '
                      ))}
                    </div>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserHomeComponent