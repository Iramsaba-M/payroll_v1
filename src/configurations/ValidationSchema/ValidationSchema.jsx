
import * as Yup from "yup";

export const formSchema = (config) => {
  return Yup.object(
    Object.fromEntries(
      config.map((input) => {
        let validationRule = null; // Set validationRule to null initially
        if (input.required) {
          switch (input.type) {
            case 'text':
              validationRule = Yup.string().required(`${input.label} is required`);
              break;
            case 'number':
              validationRule = Yup.number().required(`${input.label} is required`).typeError(`${input.label} must be a number`);
              break;
            case 'email':
              validationRule = Yup.string().required(`${input.label} is required`).email(`${input.label} must be a valid email`);
              break;
            case 'tel': 
              validationRule = Yup.string().required(`${input.label} is required`).matches(/^\d{10}$/, `${input.label} must be a valid phone number`);
              break;
            case 'tagoptions':
              console.log('tags');
              validationRule = Yup.array().required(`${input.label} is required`)
              .test('not-null', `${input.label} must not be Empty`,value => value !== null && value.length > 0);
              break;
            case 'radio':
            case 'OptionComp':
              console.log('tags');
              validationRule = Yup.string().required(` * required`);
              break;
            // Add more cases as needed

            default:
              validationRule = Yup.string().required(`${input.label} is required`);
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
    
    initialValues[field.name] = null;
    
  });
  return initialValues;
};
