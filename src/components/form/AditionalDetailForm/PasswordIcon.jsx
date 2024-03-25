
import React from 'react';

const PasswordIcon = ({ label, value, onChange,textcss, placeholder,icon,togglePasswordVisibility,showPassword }) => {

return (
  <div>
    <div className="input-container">
      <label>{label}</label>
      <div className="flex items-center mt-2">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={textcss}
        />
        {icon && <span onClick={togglePasswordVisibility} className="absolute  ml-52">{icon}</span>}
      </div>
    </div>
  </div>
);
};

export default PasswordIcon;

//implementation 
//const [showPassword, setShowPassword] = useState(false);
// const togglePasswordVisibility = () => {
//   setShowPassword((prevShowPassword) => !prevShowPassword);
// };
{/* <div className='border border-gray-200  mb-5 p-5 mr-4'>
                <h1 className='text-gray-800 font-semibold mb-2'>Security</h1>
                <div className="form-line flex mb-4 ">
                    {config.slice(0, 1).map((field, index) => (
                        <div key={index} className={`form-field ${field.fieldstyle}`}>

                            <label className={TextStyle[field.textcss].label}>{field.label}</label>
                            {field.type === 'password' && (
                                <PasswordIcon
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    value={values[field.name] || ''}
                                    onChange={(e) => handleChange(field.name, e.target.value)}
                                    textcss={TextStyle[field.textcss].input}
                                    icon={showPassword ? field.icon2 : field.icon}
                                    showPassword={showPassword}
                                    togglePasswordVisibility={togglePasswordVisibility}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex justify-col'>
                    <button type="button" className=' text-blue-600  rounded flex items-center  mb-2 mr-2'>Reset Password  </button>
                    <span className='ml-2' ><VscTools /></span>
                </div>
            </div> */}


            //config for password
            // {
            //   "label": "Current Password",
            //   "name":"current_password",
            //   "type": "password",
            //   "placeholder": "current Password",
            //   "textcss": "standard",
            //   "icon":<IoEyeOutline />,
            //     "icon2":<FiEyeOff />,
            // },
