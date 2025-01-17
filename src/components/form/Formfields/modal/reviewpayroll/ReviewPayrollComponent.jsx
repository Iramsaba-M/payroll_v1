import { LuPen } from "react-icons/lu";
import { useState, useEffect } from 'react';
import TextComponent from "../../text/TextComponent";
import ReviewPayrollStyle from "./ReviewPayrollStyle";
import Button from "../../../../../configurations/Button/Button";
import { addlop, add } from "./ReviewPayrollData";
import { fetchData } from "../../../../../services/APIService";
import { reviewpayroll } from "../../../../../api/EndPoints";
import PropTypes from 'prop-types';


const ReviewPayrollComponent = ({ config }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromEndpoint = async () => {
      try {
        const responseData = await fetchData(reviewpayroll);
        setData(responseData[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromEndpoint();
  }, []);

  const handleInputChange = (fieldName, newValue) => {

    setData((prevData) => ({
      ...prevData,
      [fieldName]: newValue,
    }));
  };

  return (
    <div className=" ml-2 h-60">
      <div className='flex'>
        {config.slice(0, 1).map((field, index) => (
          <div key={index} style={{ display: '', alignItems: '', }}>
            <label className={ReviewPayrollStyle[field.textcss].label}>
              {field.label}
              {field.placeholder}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                value={data[field.name]}  // use the fetched data as the placeholder
                textcss={ReviewPayrollStyle[field.textcss].input}
                icon={field.icon}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
        <div className=''>
          {config.slice(1, 2).map((field, index) => (
            <div key={index} style={{ display: '', alignItems: '', }}>
              <label className={ReviewPayrollStyle[field.textcss].label}>
                {field.label}

              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  value={data[field.name]}  // use the fetched data as the placeholder
                  textcss={ReviewPayrollStyle[field.textcss].input}
                  icon={field.icon}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='mt-'>
        {config.slice(2, 3).map((field, index) => (
          <div key={index} style={{ display: 'flex', alignItems: '' }}>
            <label className={ReviewPayrollStyle[field.textcss].label}>
              {field.label}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                value={data[field.name]} // use the fetched data as the placeholder
                textcss={ReviewPayrollStyle[field.textcss].input}
                icon={field.icon}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
      <div className='mt-'>
        {config.slice(3, 4).map((field, index) => (
          <div key={index} style={{ display: 'flex', alignItems: '' }}>
            <label className={ReviewPayrollStyle[field.textcss].label}>
              {field.label}
              <LuPen className="-translate-y-2 translate-x-[53vh] text-gray-400" />
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                value={data[field.name]}
                textcss={ReviewPayrollStyle[field.textcss].input}
                icon={field.icon}
                onChange={(e) => handleInputChange(field.name, e.target.value)}

              />
            )}
          </div>
        ))}
      </div>


      <Button Configs={addlop} />

      <div className='flex mt-'> <p className='text-xs font-semibold text-green-500'>(+) EARNINGS</p>
        <p className='ml-[34.5vh] text-[10px] font-semibold'>AMOUNT</p>
      </div>

      <div className='mt-1'>
        {config.slice(4, 5).map((field, index) => (
          <div key={index} style={{ display: 'flex', alignItems: '' }}>
            <label className={ReviewPayrollStyle[field.textcss].label}>
              {field.label}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                value={data[field.name]} // use the fetched data as the placeholder
                textcss={ReviewPayrollStyle[field.textcss].input}
                icon={field.icon}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
        {config.slice(5, 6).map((field, index) => (
          <div key={index} style={{ display: 'flex', alignItems: '' }}>
            <label className={ReviewPayrollStyle[field.textcss].label}>
              {field.label}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                value={data[field.name]}
                textcss={ReviewPayrollStyle[field.textcss].input}
                icon={field.icon}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
        {config.slice(6, 7).map((field, index) => (
          <div key={index} style={{ display: 'flex', alignItems: '' }}>
            <label className={ReviewPayrollStyle[field.textcss].label}>
              {field.label}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                value={data[field.name]}
                textcss={ReviewPayrollStyle[field.textcss].input}
                icon={field.icon}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
        {config.slice(7, 8).map((field, index) => (
          <div key={index} style={{ display: 'flex', alignItems: '' }}>
            <label className={ReviewPayrollStyle[field.textcss].label}>
              {field.label}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                value={data[field.name]}
                textcss={ReviewPayrollStyle[field.textcss].input}
                icon={field.icon}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
        {config.slice(8, 9).map((field, index) => (
          <div key={index} style={{ display: 'flex', alignItems: '' }}>
            <label className={ReviewPayrollStyle[field.textcss].label}>
              {field.label}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                value={data[field.name]}
                textcss={ReviewPayrollStyle[field.textcss].input}
                icon={field.icon}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
        <Button Configs={add} />
        <div className='mt-'>
          {config.slice(9, 10).map((field, index) => (
            <div key={index} style={{ display: 'flex', alignItems: '' }}>
              <label className={ReviewPayrollStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  value={data[field.name]}
                  textcss={ReviewPayrollStyle[field.textcss].input}
                  icon={field.icon}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />


              )}

            </div>
          ))}
        </div>

        <div className='flex mt-2'> <p className='text-xs font-semibold text-red-500'> (-) DEDUCTIONS</p>
          <p className='ml-[33.3vh] text-[10px] font-semibold'>AMOUNT</p>
        </div>
        <div className='mt-1'>
          {config.slice(10, 11).map((field, index) => (
            <div key={index} style={{ display: 'flex', alignItems: '' }}>
              <label className={ReviewPayrollStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  value={data[field.name]}
                  textcss={ReviewPayrollStyle[field.textcss].input}
                  icon={field.icon}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}

            </div>
          ))}
        </div>
        <div className=''>
          {config.slice(11, 12).map((field, index) => (
            <div key={index} style={{ display: 'flex', alignItems: '' }}>
              <label className={ReviewPayrollStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  value={data[field.name]}
                  textcss={ReviewPayrollStyle[field.textcss].input}
                  icon={field.icon}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}

            </div>
          ))}
        </div>
        <div className=''>
          {config.slice(12, 13).map((field, index) => (
            <div key={index} style={{ display: 'flex', alignItems: '' }}>
              <label className={ReviewPayrollStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  value={data[field.name]}
                  textcss={ReviewPayrollStyle[field.textcss].input}
                  icon={field.icon}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}

            </div>
          ))}
        </div>
        <Button Configs={add} />
        <div className=''>
          {config.slice(13, 14).map((field, index) => (
            <div key={index} style={{ display: 'flex', alignItems: '' }}>
              <label className={ReviewPayrollStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  value={data[field.name]}
                  textcss={ReviewPayrollStyle[field.textcss].input}
                  icon={field.icon}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}

            </div>
          ))}
        </div>
        <div className='flex mt-2'> <p className='text-xs font-bold text-black-500'>Reimbursements</p>
          <p className='ml-[32.6vh] text-[10px] font-semibold'>AMOUNT</p>
        </div>
        <div className="mt-1">
          <Button Configs={add} />
        </div>
        <div className='flex mt-'> <p className='text-xs font-bold text-black-500'>Other Deductions </p>
          <p className='ml-[32.2vh] text-[10px] font-semibold'>AMOUNT</p>

        </div>
        <div className="mt-1">
          <Button Configs={add} />
        </div>
        <div className='mt-'>
          {config.slice(14, 15).map((field, index) => (
            <div key={index} style={{ display: 'flex', alignItems: '' }}>
              <label className={ReviewPayrollStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  value={data[field.name]}
                  textcss={ReviewPayrollStyle[field.textcss].input}
                  icon={field.icon}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}

            </div>
          ))}
        </div>

        <div className='mt-1'>
          {config.slice(15, 16).map((field, index) => (
            <div key={index} style={{ display: 'flex', alignItems: '' }}>
              <label className={ReviewPayrollStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "textarea" && (
                <TextComponent
                  name={field.name}
                  value={data[field.name]}
                  textcss={ReviewPayrollStyle[field.textcss].input}
                  icon={field.icon}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}

            </div>
          ))}

        </div>
        <button className='bg-blue-500 mt-2 text-white text-xs px-2  w-12 h-6 rounded md ml-[49vh]'>Save</button>

      </div>

    </div>
  )
}

ReviewPayrollComponent.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      textcss: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      icon: PropTypes.element,
    })
  ).isRequired,
};

export default ReviewPayrollComponent;