// BodyConfig.js

import hero2 from '../../images/hero2.png'; // Import the first image with the correct relative path
import hero3 from '../../images/hero3.png';
import Group6 from '../../images/Group 6.svg'
import Group7 from '../../images/Group 7.svg'
import Group8 from '../../images/Group 8.svg'
// const BodyConfig = {
//   config1: {
//     image: hero2, // Use the first imported image variable
//     mainHeading: 'Get accurate payroll processing when you connect payroll',
//     sections: [
//       { 
//         title: 'Payroll administration', 
//         description: 'Effortlessly streamline payroll, ensuring accurate compensation, tax handling, and benefit management. Create a stress-free workforce experience with precise employee financial management',
//         alignment: 'left' // Specify the alignment of the section content
//       },
//       { 
//         title: 'Scheduling', 
//         description: 'Optimize productivity through seamless scheduling, managing shifts and tasks with ease. Enhance efficiency and foster harmony in the work environment',
//         alignment: 'right' // Specify the alignment of the section content
//       },
//       { 
//         title: 'Time tracking', 
//         description: 'Empower your team with precise time tracking to boost productivity, ensure compliance, and foster accountability. Create a more engaged and efficient workforce with accurate time management.',
//         alignment: 'right' // Specify the alignment of the section content
//       },
//     ],
//   },
//   config2: {
//     image: hero3, // Use the second imported image variable
//     mainHeading: 'Optimize Financial Efficiency with Ease',
//     sections: [
//       { 
//         title: 'CTC Calculator', 
//         description: 'Effortlessly estimate your comprehensive compensation package, making informed financial decisions. Gain clarity on your total earnings, benefits, and deductions for effective financial planning and management.',
//         alignment: 'left' // Specify the alignment of the section content
//       },
//       { 
//         title: 'Payment Reminder', 
//         description: 'Personalized reminders ensure timely payments, preventing missed deadlines and financial penalties. Maintain financial stability with organized payment schedules and efficient reminders tailored to your needs.',
//         alignment: 'left' // Specify the alignment of the section content
//       },
//       { 
//         title: 'Payroll Settings', 
//         description: 'Simplify payroll management with intuitive settings, customizing workflows to suit your organization needs.Enhance efficiency and accuracy in payroll processing while ensuring compliance with regulatory requirements',
//         alignment: 'left' // Specify the alignment of the section content
//       },
//       // Add more sections if needed
//     ],
//   },
// };

// export default BodyConfig;

const BodyConfig = {
  config1: {
    image: Group7, // Use the first imported image variable
    mainHeading: 'Achieve Accurate Payroll Processing with Seamless Integration',
    sections: [
      { 
        title: 'Payroll Administration', 
        description: 'Streamline payroll effortlessly, ensuring accurate compensation, tax handling, and benefits management. Create a stress-free experience with precise financial management for employees.',
        alignment: 'left' // Specify the alignment of the section content
      },
      { 
        title: 'Scheduling', 
        description: 'Enhance productivity with seamless scheduling. Easily manage shifts and tasks to foster efficiency and harmony in the workplace.',
        alignment: 'right' // Specify the alignment of the section content
      },
      { 
        title: 'Time Tracking', 
        description: 'Boost productivity with precise time tracking. Ensure compliance and accountability, creating a more engaged and efficient workforce.',
        alignment: 'right' // Specify the alignment of the section content
      },
    ],
  },
  config2: {
    image: Group8, // Use the second imported image variable
    mainHeading: 'Enhance Financial Efficiency with Ease',
    sections: [
      { 
        title: 'CTC Calculator', 
        description: 'Estimate your comprehensive compensation package effortlessly. Make informed financial decisions with clarity on total earnings, benefits, and deductions for effective planning.',
        alignment: 'left' // Specify the alignment of the section content
      },
      { 
        title: 'Payment Reminders', 
        description: 'Stay on top of payments with personalized reminders. Avoid missed deadlines and penalties, maintaining financial stability with organized schedules and efficient reminders.',
        alignment: 'left' // Specify the alignment of the section content
      },
      { 
        title: 'Payroll Settings', 
        description: 'Simplify payroll management with intuitive settings. Customize workflows to meet your organization’s needs, enhancing efficiency and accuracy while ensuring regulatory compliance.',
        alignment: 'left' // Specify the alignment of the section content
      },
      // Add more sections if needed
    ],
  },
};

export default BodyConfig;
