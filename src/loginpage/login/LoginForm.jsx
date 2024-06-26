// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import TailwindInputsConfig from '../inputs/TailwindInputsConfig';
// import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
// import { BsBoxArrowInRight } from 'react-icons/bs';

// const LoginForm = () => {
//   const inputStyle = TailwindInputsConfig.standard;
//   const navigate = useNavigate();
//   const validationSchema = Yup.object({
//     email: Yup.string().required('Email is required').email('Invalid email format'),
//     password: Yup.string().required('Password is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         // Mocking a successful login response with a JWT token
//         const mockResponse = {
//           data: {
//             token: 'your_mocked_jwt_token_here',
//           },
//         };

//         // Simulate a delay to mimic a network request
//         setTimeout(() => {
//           handleLoginSuccess(mockResponse);
//         }, 1000);
//       } catch (error) {
//         console.log(error);
//         alert('Invalid user');
//       }
//     },
//   });

//   const handleLoginSuccess = (response) => {
//     if (response.data.token) {
//       // Token received, save it to localStorage (for testing purposes)
//       localStorage.setItem('token', response.data.token);

//       // Redirect or perform other actions upon successful login
//       navigate('/landing');

//       // Log the token to the console (for testing purposes)
//       console.log('JWT Token:', response.data.token);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center mt-12 bg-white">
//       <div className="mx-auto mt-2 p-10 bg-white rounded-xl shadow-2xl flex flex-col items-center">
//         <BsBoxArrowInRight className="text-6xl text-blue-600 mb-4" />
//         <form className="w-full" onSubmit={formik.handleSubmit}>
//           <div className="grid grid-cols-1">
//             <input
//               className={inputStyle}
//               type="email"
//               name="email"
//               placeholder="Email / Username"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.email && formik.errors.email && (
//               <div className="text-red-500">{formik.errors.email}</div>
//             )}
//             <input
//               className={inputStyle}
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.password && formik.errors.password && (
//               <div className="text-red-500">{formik.errors.password}</div>
//             )}
//           </div>

//           <div className="mb-6 mt-5 flex items-center justify-between font-sans text-sm font-semibold">
//             <div className="flex items-center">
//               <input type="checkbox" id="rememberMe" className="mr-2" />
//               <label htmlFor="rememberMe" className="text-gray-500 mr-10">
//                 Remember Me
//               </label>
//             </div>
//             <div className="text-right">
//               <Link to="/" className="text-gray-500 hover:underline">
//                 Forgot Password?
//               </Link>
//             </div>
//           </div>

//           <div className="text-center">
//             <button type="submit" className={`${TwdButtonsConfig.primary}`}>
//               Login
//             </button>

//             <p className="mt-8 text-gray-600 font-sans text-xs font-semibold">
//               Don't have an account?{' '}
//               <Link to="/signup" className="text-blue-600 hover:underline">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//       <p className="mt-8 text-gray-500 font-sans text-sm font-semibold">
//         Ready to get started?
//       </p>
//       <p className="mt-2 text-gray-500 font-sans text-sm font-semibold">
//         Launch Your Project with Us
//       </p>
//     </div>
//   );
// };

// export default LoginForm;

import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TailwindInputsConfig from '../TailwindInputsConfig';
import TwdButtonsConfig from '../TwdButtonsConfig';
import { BsBoxArrowInRight } from 'react-icons/bs';

const LoginForm = () => {
  const inputStyle = TailwindInputsConfig.standard;
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Fetch users from the JSON server
        const response = await axios.get('http://localhost:3000/users');
        const users = response.data;

        // Check if the entered email and password match any user
        const user = users.find(
          (user) => user.email === values.email && user.password === values.password
        );

        if (user) {
          // Mocking a successful login response with a JWT token
          const mockResponse = {
            data: {
              token: 'your_mocked_jwt_token_here',
              role: user.role,
            },
          };

          handleLoginSuccess(mockResponse);
        } else {
          alert('Invalid email or password');
        }
      } catch (error) {
        console.log(error);
        alert('Error logging in. Please try again.');
      }
    },
  });

  const handleLoginSuccess = (response) => {
    if (response.data.token) {
      // Token received, save it to localStorage (for testing purposes)
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);

      // Redirect or perform other actions upon successful login
      navigate(response.data.role === 'admin' ? '/admin-dashboard' : '/employee-dashboard');

      // Log the token to the console (for testing purposes)
      console.log('JWT Token:', response.data.token);
      console.log('User Role:', response.data.role);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 bg-white">
      <div className="mx-auto mt-2 p-10 bg-white rounded-xl shadow-2xl flex flex-col items-center">
        <BsBoxArrowInRight className="text-6xl text-blue-600 mb-4" />
        <form className="w-full" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1">
            <input
              className={inputStyle}
              type="email"
              name="email"
              placeholder="Email / Username"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
            <input
              className={inputStyle}
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>

          <div className="mb-6 mt-5 flex items-center justify-between font-sans text-sm font-semibold">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-gray-500 mr-10">
                Remember Me
              </label>
            </div>
            <div className="text-right">
              <Link to="/" className="text-gray-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className={`${TwdButtonsConfig.transparent}`}>
              Login
            </button>

            <p className="mt-8 text-gray-600 font-sans text-xs font-semibold">
              Dont have an account?{''}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <p className="mt-8 text-gray-500 font-sans text-sm font-semibold">
        Ready to get started?
      </p>
      <p className="mt-2 text-gray-500 font-sans text-sm font-semibold">
        Launch Your Project with Us
      </p>
    </div>
  );
};

export default LoginForm;
