import React from "react";
import * as Yup from "yup";

// export const signUpSchema = (config) => {
//     return Yup.object(
//       Object.fromEntries(
//         config.map((input) => [
//           input.name,
//           Yup.string().required(`${input.label} is required`),
//         ])
//       )
//     );
//   };

export const formSchema = (config) => {
  return Yup.object(
    Object.fromEntries(
      config.map((input) => {
        let validationRule = Yup.string();
        if (input.required) {
          switch (input.type) {
            case 'text':
              validationRule = validationRule.required(`${input.label} is required`);
              break;
            case 'number':
              validationRule = validationRule.required(`${input.label} is required`).typeError(`${input.label} must be a number`);
              break;
            case 'email':
              validationRule = validationRule.required(`${input.label} is required`).email(`${input.label} must be a valid email`);
              break;
            // case 'number':
            //     validationRule = validationRule.required(`${input.label} is required`).number(`${input.label} must be a valid email`).positive();
            //     break;
            case 'tel': 
            validationRule = validationRule.required(`${input.label} is required`).matches(/^\d{10}$/, `${input.label} must be a valid phone number`);
            break;
            // Add more cases as needed

            default:
              validationRule = validationRule.required(`${input.label} is required`);
          }
        }

        return [input.name, validationRule];
      })
    )
  );
};

export const simplifiedData = (config) => {
  return config.map(({ name, label, type, required }) => ({ name, label, type, required }));
};

export const createInitialValues = (data) => {
  const initialValues = {};
  data.forEach(field => {
    initialValues[field.name] = "";
  });
  return initialValues;
};
