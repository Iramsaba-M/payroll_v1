// BodyConfig.js

import hero2 from '../../images/hero2.png'; // Import the first image with the correct relative path
import hero3 from '../../images/hero3.png'; // Import the second image with the correct relative path

const BodyConfig = {
  config1: {
    image: hero2, // Use the first imported image variable
    mainHeading: 'Get accurate payroll processing when you connect payroll',
    sections: [
      { 
        title: 'Payroll administration', 
        description: 'Effortlessly streamline payroll, ensuring accurate compensation, tax handling, and benefit management. Create a stress-free workforce experience with precise employee financial management',
        alignment: 'left' // Specify the alignment of the section content
      },
      { 
        title: 'Scheduling', 
        description: 'Optimize productivity through seamless scheduling, managing shifts and tasks with ease. Enhance efficiency and foster harmony in the work environment',
        alignment: 'right' // Specify the alignment of the section content
      },
      { 
        title: 'Time tracking', 
        description: 'Empower your team with precise time tracking to boost productivity, ensure compliance, and foster accountability. Create a more engaged and efficient workforce with accurate time management.',
        alignment: 'right' // Specify the alignment of the section content
      },
    ],
  },
  config2: {
    image: hero3, // Use the second imported image variable
    mainHeading: 'Optimize Financial Efficiency with Ease',
    sections: [
      { 
        title: 'CTC Calculator', 
        description: 'Effortlessly estimate your comprehensive compensation package, making informed financial decisions. Gain clarity on your total earnings, benefits, and deductions for effective financial planning and management.',
        alignment: 'left' // Specify the alignment of the section content
      },
      { 
        title: 'Payment Reminder', 
        description: 'Personalized reminders ensure timely payments, preventing missed deadlines and financial penalties. Maintain financial stability with organized payment schedules and efficient reminders tailored to your needs.',
        alignment: 'left' // Specify the alignment of the section content
      },
      { 
        title: 'Payroll Settings', 
        description: 'Simplify payroll management with intuitive settings, customizing workflows to suit your organization needs.Enhance efficiency and accuracy in payroll processing while ensuring compliance with regulatory requirements',
        alignment: 'left' // Specify the alignment of the section content
      },
      // Add more sections if needed
    ],
  },
};

export default BodyConfig;
