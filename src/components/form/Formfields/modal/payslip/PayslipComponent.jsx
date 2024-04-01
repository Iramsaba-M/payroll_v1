import { useState, useEffect } from 'react';

import TextComponent from '../../text/TextComponent';
import PayslipStyles from './PayslipStyles';
import Profile from '../../../../../configurations/profile/Profile';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';

const PayslipComponent = ({ config }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/az');

        setData(response.data[0]); // assuming the data is an array and you want the first object
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false whether successful or not
      }
    };

    fetchData(); 
  }, []);

  const handleInputChange = (fieldName, newValue) => {
    // Update the state with the new value
    setData((prevData) => ({
      ...prevData,
      [fieldName]: newValue,
    }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Error fetching data. Please check the console for details.</p>;
  }


  const handlePrint = () => {
    const payslipContainer = document.getElementById('payslip-container');

    html2canvas(payslipContainer).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate the ratio of the canvas height/width to the pdf height/width
      const widthRatio = canvas.width / pdfWidth;
      const heightRatio = canvas.height / pdfHeight;
      const ratio = widthRatio > heightRatio ? widthRatio : heightRatio;

      const canvasWidthAdjusted = canvas.width / ratio;
      const canvasHeightAdjusted = canvas.height / ratio;

      // Calculate the position to start the image (centered horizontally)
      const marginX = (pdfWidth - canvasWidthAdjusted) / 2;

      // Add the image with the adjusted width and height at the calculated position
      pdf.addImage(imgData, 'PNG', marginX, 2, canvasWidthAdjusted, canvasHeightAdjusted);
      pdf.save('payslip.pdf');
    });
  };

  return (
    <div>
      <div id="payslip-container" className=''>
        <div className='flex '>
          <div className=''>
            <Profile />
          </div>
          <div className='mt-1'>
            <h2 className='text-sm'>InfoKalash Pvt Ltd</h2>
            <span className='text-xs'>DeshPande Foundation, Near to Airport Gokul Road,Hubli,Karnataka,India.</span>
          </div>
        </div>
        <p className='text-xl mt-8 text-center font-semibold'>Salary Slip For July 2024</p>
        <p className='ml-3 text-sm mt-8'>Employee Details</p>


        <div className='ml-3 mt-4'>
          <div className='flex'>

            {config.slice(0, 1).map((field, index) => (
              <div key={index} className={PayslipStyles[field.textcss].container}>
                <label className={PayslipStyles[field.textcss].label}>
                  {field.label}
                </label>


                {field.type === "text" && (
                  <div style={{ position: 'relative' }}>
                    <TextComponent
                      name={field.name}
                      textcss={PayslipStyles[field.textcss].input}
                      icon={field.icon}
                      // value={data[field.name]} 
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0 ,fontSize: '12px'}}> */}
                    <div className="absolute top-0 left-0 text-xs ml-[7vh]">
                      {data[field.name]}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {config.slice(1, 2).map((field, index) => (
              <div key={index} className={PayslipStyles[field.textcss].container}>
                <label className={PayslipStyles[field.textcss].label}>
                  {field.label}
                </label>

                {field.type === "text" && (
                  <div style={{ position: 'relative' }}>
                    <TextComponent
                      name={field.name}
                      textcss={PayslipStyles[field.textcss].input}
                      icon={field.icon}
                      // value={data[field.name]} 
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0 ,fontSize: '12px'}}> */}
                    <div className="absolute top-0 left-0 text-xs ml-[7vh]">
                      {data[field.name]}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='flex'>
            {config.slice(2, 3).map((field, index) => (
              <div key={index} className={PayslipStyles[field.textcss].container}>
                <label className={PayslipStyles[field.textcss].label}>
                  {field.label}
                </label>

                {field.type === "text" && (
                  <div style={{ position: 'relative' }}>
                    <TextComponent
                      name={field.name}
                      textcss={PayslipStyles[field.textcss].input}
                      icon={field.icon}
                      // value={data[field.name]} 
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0 ,fontSize: '12px'}}> */}
                    <div className="absolute top-0 left-0 text-xs ml-[7vh]">
                      {data[field.name]}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {config.slice(3, 4).map((field, index) => (
              <div key={index} className={PayslipStyles[field.textcss].container}>
                <label className={PayslipStyles[field.textcss].label}>
                  {field.label}
                </label>

                {field.type === "text" && (
                  <div style={{ position: 'relative' }}>
                    <TextComponent
                      name={field.name}
                      textcss={PayslipStyles[field.textcss].input}
                      icon={field.icon}
                      // value={data[field.name]} 
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0 ,fontSize: '12px'}}> */}
                    <div className="absolute top-0 left-0 text-xs ml-[7vh] ">
                      {data[field.name]}
                    </div>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>




        <h1 className='ml-3 mt-2 text-sm'>Salary Calculations</h1>
        <div className='flex mt-4'>
          <div className='flex border-2 rounded-sm bg-gray-100 w-[49vh] h- ml-1 mr-[1px]  '>
            <p className='text-sm ml-3'>EARNINGS</p>
            <p className='ml-[28vh] text-sm items-center'> Amount</p>
          </div>

          <div className='flex border-2 rounded-sm bg-gray-100 w-[49vh]'>
            <p className='text-sm ml-1'>DEDUCTIONS</p>
            <p className='ml-[26vh] text-sm items-center'> Amount</p>
          </div>
        </div>

        <div className='flex'>
          <div className=''>
            <div className='w-[49vh] border-2 ml-1  rounded-sm mr-[1px] mt-[3px] '>
              {config.slice(4, 5).map((field, index) => (
                <div key={index} className={PayslipStyles[field.textcss].container}>
                  <label className={PayslipStyles[field.textcss].label}>
                    {field.label}
                  </label>

                  {field.type === "text" && (
                    <div style={{ position: 'relative' }}>
                      <TextComponent
                        name={field.name}
                        textcss={PayslipStyles[field.textcss].input}
                        icon={field.icon}
                        // value={data[field.name]} 
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                      />
                      <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                        {data[field.name]}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {config.slice(5, 6).map((field, index) => (
                <div key={index} className={PayslipStyles[field.textcss].container}>
                  <label className={PayslipStyles[field.textcss].label}>
                    {field.label}
                  </label>

                  {field.type === "text" && (
                    <div style={{ position: 'relative' }}>
                      <TextComponent
                        name={field.name}
                        textcss={PayslipStyles[field.textcss].input}
                        icon={field.icon}
                        // value={data[field.name]} 
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                      />
                      <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                        {data[field.name]}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {config.slice(6, 7).map((field, index) => (
                <div key={index} className={PayslipStyles[field.textcss].container}>
                  <label className={PayslipStyles[field.textcss].label}>
                    {field.label}
                  </label>

                  {field.type === "text" && (
                    <div style={{ position: 'relative' }}>
                      <TextComponent
                        name={field.name}
                        textcss={PayslipStyles[field.textcss].input}
                        icon={field.icon}
                        // value={data[field.name]} 
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                      />
                      <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                        {data[field.name]}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {config.slice(7, 8).map((field, index) => (
                <div key={index} className={PayslipStyles[field.textcss].container}>
                  <label className={PayslipStyles[field.textcss].label}>
                    {field.label}
                  </label>

                  {field.type === "text" && (
                    <div style={{ position: 'relative' }}>
                      <TextComponent
                        name={field.name}
                        textcss={PayslipStyles[field.textcss].input}
                        icon={field.icon}
                        // value={data[field.name]} 
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                      />
                      <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                        {data[field.name]}
                      </div>
                    </div>
                       )}
                       </div>
                     ))}
       
                     {config.slice(8, 9).map((field, index) => (
                       <div key={index} className={PayslipStyles[field.textcss].container}>
                         <label className={PayslipStyles[field.textcss].label}>
                           {field.label}
                         </label>
       
                         {field.type === "text" && (
                           <div style={{ position: 'relative' }}>
                             <TextComponent
                               name={field.name}
                               textcss={PayslipStyles[field.textcss].input}
                               icon={field.icon}
                               // value={data[field.name]} 
                               onChange={(e) => handleInputChange(field.name, e.target.value)}
                             />
                             <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                               {data[field.name]}
                             </div>
                           </div>
                         )}
                       </div>
                     ))}
       
                     {config.slice(9, 10).map((field, index) => (
                       <div key={index} className={PayslipStyles[field.textcss].container}>
                         <label className={PayslipStyles[field.textcss].label}>
                           {field.label}
                         </label>
       
                         {field.type === "text" && (
                           <div style={{ position: 'relative' }}>
                             <TextComponent
                               name={field.name}
                               textcss={PayslipStyles[field.textcss].input}
                               icon={field.icon}
                               // value={data[field.name]} 
                               onChange={(e) => handleInputChange(field.name, e.target.value)}
                             />
                             <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                               {data[field.name]}
                             </div>
                           </div>
                         )}
                       </div>
                     ))}
       
                     {config.slice(10, 11).map((field, index) => (
                       <div key={index} className={PayslipStyles[field.textcss].container}>
                         <label className={PayslipStyles[field.textcss].label}>
                           {field.label}
                         </label>
       
                         {field.type === "text" && (
                           <div style={{ position: 'relative' }}>
                             <TextComponent
                               name={field.name}
                               textcss={PayslipStyles[field.textcss].input}
                               icon={field.icon}
                               // value={data[field.name]} 
                               onChange={(e) => handleInputChange(field.name, e.target.value)}
                             />
                             <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                               {data[field.name]}
                             </div>
                           </div>
                         )}
                       </div>
                     ))}
                     {config.slice(11, 12).map((field, index) => (
                       <div key={index} className={PayslipStyles[field.textcss].container}>
                         <label className={PayslipStyles[field.textcss].label}>
                           {field.label}
                         </label>
       
                         {field.type === "text" && (
                           <div style={{ position: 'relative' }}>
                             <TextComponent
                               name={field.name}
                               textcss={PayslipStyles[field.textcss].input}
                               icon={field.icon}
                               // value={data[field.name]} 
                               onChange={(e) => handleInputChange(field.name, e.target.value)}
                             />
                             <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                               {data[field.name]}
                             </div>
                           </div>
                         )}
                       </div>
                     ))}
                   </div>
       
       
                   <div className='border-2 mr-[1px]  ml-1 w-[49vh] rounded-sm mt-[3px]'>
                     {config.slice(12, 13).map((field, index) => (
                       <div key={index} className={PayslipStyles[field.textcss].container}>
                         <label className={PayslipStyles[field.textcss].label}>
                           {field.label}
                         </label>
       
                         {field.type === "text" && (
                           <div style={{ position: 'relative' }}>
                             <TextComponent
                               name={field.name}
                               textcss={PayslipStyles[field.textcss].input}
                               icon={field.icon}
                               // value={data[field.name]} 
                               onChange={(e) => handleInputChange(field.name, e.target.value)}
                             />
                             <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                               {data[field.name]}
                             </div>
                           </div>
                         )}
                       </div>
                     ))}
                   </div>
                 </div>
       
                 <div>
       
                   <div className='border-2 w-[49vh] h-[195px] rounded-sm mt-[3px]'>
                     {config.slice(13, 14).map((field, index) => (
                       <div key={index} className={PayslipStyles[field.textcss].container}>
                         <label className={PayslipStyles[field.textcss].label}>
                           {field.label}
                         </label>
       
                         {field.type === "text" && (
                           <div style={{ position: 'relative' }}>
                             <TextComponent
                               name={field.name}
                               textcss={PayslipStyles[field.textcss].input}
                               icon={field.icon}
                               // value={data[field.name]} 
                               onChange={(e) => handleInputChange(field.name, e.target.value)}
                             />
                             <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                               {data[field.name]}
                             </div>
                           </div>
                         )}
                       </div>
       
       
                     ))}
       
                     {config.slice(14, 15).map((field, index) => (
                       <div key={index} className={PayslipStyles[field.textcss].container}>
                         <label className={PayslipStyles[field.textcss].label}>
                           {field.label}
                         </label>
       
                         {field.type === "text" && (
                           <div style={{ position: 'relative' }}>
                             <TextComponent
                               name={field.name}
                               textcss={PayslipStyles[field.textcss].input}
                               icon={field.icon}
                               // value={data[field.name]} 
                               onChange={(e) => handleInputChange(field.name, e.target.value)}
                             />
                             <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                               {data[field.name]}
                             </div>
                           </div>
                         )}
                       </div>
                     ))}
       
                     {config.slice(15, 16).map((field, index) => (
                       <div key={index} className={PayslipStyles[field.textcss].container}>
                         <label className={PayslipStyles[field.textcss].label}>
                           {field.label}
                         </label>
       
                         {field.type === "text" && (
                           <div style={{ position: 'relative' }}>
                             <TextComponent
                               name={field.name}
                               textcss={PayslipStyles[field.textcss].input}
                               icon={field.icon}
                               // value={data[field.name]} 
                               onChange={(e) => handleInputChange(field.name, e.target.value)}
                             />
                             <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                               {data[field.name]}
                             </div>
                           </div>
                         )}
                       </div>
                     ))}
       
                     {config.slice(16, 17).map((field, index) => (
                       <div key={index} className={PayslipStyles[field.textcss].container}>
                         <label className={PayslipStyles[field.textcss].label}>
                         {field.label}
                  </label>

                  {field.type === "text" && (
                    <div style={{ position: 'relative' }}>
                      <TextComponent
                        name={field.name}
                        textcss={PayslipStyles[field.textcss].input}
                        icon={field.icon}
                        // value={data[field.name]} 
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                      />
                      <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                        {data[field.name]}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {config.slice(17, 18).map((field, index) => (
                <div key={index} className={PayslipStyles[field.textcss].container}>
                  <label className={PayslipStyles[field.textcss].label}>
                    {field.label}
                  </label>

                  {field.type === "text" && (
                    <div style={{ position: 'relative' }}>
                      <TextComponent
                        name={field.name}
                        textcss={PayslipStyles[field.textcss].input}
                        icon={field.icon}
                        // value={data[field.name]} 
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                      />
                      <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                        {data[field.name]}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className='border-2 w-[49vh] rounded-sm mt-[3px]'>
              {config.slice(18, 19).map((field, index) => (
                <div key={index} className={PayslipStyles[field.textcss].container}>
                  <label className={PayslipStyles[field.textcss].label}>
                    {field.label}
                  </label>

                  {field.type === "text" && (
                    <div style={{ position: 'relative' }}>
                      <TextComponent
                        name={field.name}
                        textcss={PayslipStyles[field.textcss].input}
                        icon={field.icon}
                        // value={data[field.name]} 
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                      />
                      <div className="absolute top-0 left-0 text-xs ml-[18vh]">
                        {data[field.name]}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className='border-2 w-[96vh] ml-3 mt-4 rounded-sm'>
          {config.slice(19, 20).map((field, index) => (
            <div key={index} className={PayslipStyles[field.textcss].container}>
              <label className={PayslipStyles[field.textcss].label}>
                {field.label}
              </label>

              {field.type === "text" && (
                <div style={{ position: 'relative' }}>
                  <TextComponent
                    name={field.name}
                    textcss={PayslipStyles[field.textcss].input}
                    icon={field.icon}
                    // value={data[field.name]} 
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, fontSize: '12px' }}>
                    {data[field.name]}
                  </div>
                </div>
              )}
            </div>
          ))}

          {config.slice(20, 21).map((field, index) => (
            <div key={index} className={PayslipStyles[field.textcss].container}>
              <label className={PayslipStyles[field.textcss].label}>
                {field.label}
              </label>

              {field.type === "text" && (
                <div style={{ position: 'relative' }}>
                  <TextComponent
                    name={field.name}
                    textcss={PayslipStyles[field.textcss].input}
                    icon={field.icon}
                    // value={data[field.name]} 
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, fontSize: '12px' }}>
                    {data[field.name]}
                  </div>
                </div>
              )}
            </div>
          ))}

          {config.slice(21, 22).map((field, index) => (
            <div key={index} className={PayslipStyles[field.textcss].container}>
              <label className={PayslipStyles[field.textcss].label}>
                {field.label}
              </label>

              {field.type === "text" && (
                <div style={{ position: 'relative' }}>
                  <TextComponent
                    name={field.name}
                    textcss={PayslipStyles[field.textcss].input}
                    icon={field.icon}
                    // value={data[field.name]} 
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, fontSize: '12px' }}>
                    {data[field.name]}
                  </div>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
      <button onClick={handlePrint} className='ml-[89vh] mt-5 p-1 border-2 border-blue-400 text-blue-700 text-sm rounded-md w-[8vh] shadow-md'>Print</button>

    </div>
  )
}
export default PayslipComponent;










       
       
       
       
       
       
       
       







