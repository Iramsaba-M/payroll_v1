// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
// import TailwindInputsConfig from '../inputs/TailwindInputsConfig';
// import signupConfig from './signupConfig.json';

// const SignupForm = () => {
//   const inputStyle = TailwindInputsConfig.standard;

//   const validationSchema = Yup.object({
//     firstName: Yup.string().required('First Name is required'),
//     email: Yup.string().required('Email is required').email('Invalid email format'),
//     password: Yup.string().required('Password is required'),
//     confirmPassword: Yup.string()
//       .required('Confirm Password is required')
//       .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//     validationSchema,
//     onSubmit: async (values, { resetForm }) => {
//       try {
//         // Simulate token generation (for testing purposes)
//         const userData = {
//           firstName: values.firstName,
//           email: values.email,
//           password: values.password,
//         };

//         // Simulate token generation (for testing purposes)
//         const response = await fakeRegisterUser(userData);

//         if (response.token) {
//           // Token received, log it to the console
//           console.log('JWT Token:', response.token);

//           // Optionally, you can save it securely (e.g., in local storage)

//           // Redirect to the logged-in state or dashboard
//           // window.location.href = '/dashboard'; // Change this to your dashboard URL
//         } else {
//           console.error('No token received.');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     },
//   });

//   // Simulate token generation function (for testing purposes)
//   const fakeRegisterUser = async (userData) => {
//     // Simulate API call and token generation
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // Simulate a successful response with a token
//         const token = 'your-fake-jwt-token';
//         resolve({ token });
//       }, 1000); // Simulate a delay
//     });
//   };

//   return (
//     <div className="mx-auto mt-2 p-4 sm:p-8 md:p-10 bg-white rounded-xl border-2 flex flex-col items-center">
//       <form className="w-full" onSubmit={formik.handleSubmit}>
//         <p className="mt-4 sm:mt-8 text-gray-500 font-sans text-lg font-semibold">
//           {signupConfig.title}
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* First Name */}
//           <input
//             className={inputStyle}
//             type="text"
//             placeholder={signupConfig.firstNameLabel}
//             name="firstName"
//             value={formik.values.firstName}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.firstName && formik.errors.firstName && (
//             <div className="text-red-500">{formik.errors.firstName}</div>
//           )}

//           {/* Email */}
//           <input
//             className={inputStyle}
//             type="email"
//             placeholder={signupConfig.emailLabel}
//             name="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.email && formik.errors.email && (
//             <div className="text-red-500">{formik.errors.email}</div>
//           )}

//           {/* Password */}
//           <input
//             className={inputStyle}
//             type="password"
//             placeholder={signupConfig.passwordLabel}
//             name="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.password && formik.errors.password && (
//             <div className="text-red-500">{formik.errors.password}</div>
//           )}

//           {/* Confirm Password */}
//           <input
//             className={inputStyle}
//             type="password"
//             placeholder={signupConfig.confirmPasswordLabel}
//             name="confirmPassword"
//             value={formik.values.confirmPassword}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.confirmPassword && formik.errors.confirmPassword && (
//             <div className="text-red-500">{formik.errors.confirmPassword}</div>
//           )}
//         </div>

//         <div className="text-center mt-5">
//           <button type="submit" className={`${TwdButtonsConfig.primary} text-lg`}>
//             {signupConfig.submitButtonLabel}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;


import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TwdButtonsConfig from '../TwdButtonsConfig';
import TailwindInputsConfig from '../TailwindInputsConfig';
import signupConfig from './signupConfig.json';

const SignupForm = () => {
  const inputStyle = TailwindInputsConfig.standard;

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userData = {
          firstName: values.firstName,
          email: values.email,
          password: values.password,
        };

        // Send user data to the JSON Server
        const response = await axios.post('http://localhost:3000/users', userData);

        if (response.status === 201) {
          // Registration successful
          console.log('User registered successfully:', response.data);

          // Optionally, you can save the JWT token securely (e.g., in local storage)
          // Redirect to the logged-in state or dashboard
          // window.location.href = '/dashboard'; // Change this to your dashboard URL
        } else {
          console.error('Registration failed.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <div className="mx-auto mt-2 p-4 sm:p-8 md:p-10 bg-white rounded-xl border-2 flex flex-col items-center">
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <p className="mt-4 sm:mt-8 text-gray-500 font-sans text-lg font-semibold">
          {signupConfig.title}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <input
            className={inputStyle}
            type="text"
            placeholder={signupConfig.firstNameLabel}
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500">{formik.errors.firstName}</div>
          )}

          {/* Email */}
          <input
            className={inputStyle}
            type="email"
            placeholder={signupConfig.emailLabel}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}

          {/* Password */}
          <input
            className={inputStyle}
            type="password"
            placeholder={signupConfig.passwordLabel}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}

          {/* Confirm Password */}
          <input
            className={inputStyle}
            type="password"
            placeholder={signupConfig.confirmPasswordLabel}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500">{formik.errors.confirmPassword}</div>
          )}
        </div>

        <div className="text-center mt-5">
          <button type="submit" className={`${TwdButtonsConfig.transparent} text-lg`}>
            {signupConfig.submitButtonLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
