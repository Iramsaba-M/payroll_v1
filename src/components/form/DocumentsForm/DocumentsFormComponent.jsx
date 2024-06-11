
import { useState } from "react";
import PropTypes from 'prop-types';
import TextComponent from "./TextComponent";
import FileComponent from "./FileComponent";
import CustomComponent from "./CustomComponent";
import { customformContent, ButtonforSave, ButtonforAdd } from "../../../pages/Admin pages/Employee/Documents/DocumentsContent";
import { DOCUMENTS_API, DOCUMENTS_DETAILS_PUT_API } from "../../../api/EndPoints";
import ButtonConfig from "../../../configurations/Button/ButtonConfig";
import DocumentStyles from "./DocumentStyles";
import ModalComponent from '../../form/Formfields/modal/ModalComponent'
import { postDataImage, putDataFile } from "../../../services/APIService";
import { ModalConfig2 } from "../Formfields/modal/ModalConfig2";
import { useButtonState } from "../../../context/ButtonStateContext";
import { useEffect } from "react";
import { useFormik } from "formik";
import { createInitialValues, formSchema, simplifiedData } from "../../../configurations/ValidationSchema/ValidationSchema";

const DocumentsFormComponent = ({ config, handleNextClick, handleSubmit, employeeId, editEmployees }) => {
  const [values, setValues] = useState({});
  const [customComponents, setCustomComponents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { AddMode, editMode } = useButtonState();


  const formik = useFormik({
    initialValues: createInitialValues(config),
    validationSchema: formSchema(simplifiedData(config)),
  });

  console.log('er123', formik.values, formik.errors, values, formik.isValid);

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
    formik.setValues({ ...formik.values, [name]: value });

  };

  const handleFileChange = (name, selectedFile) => {
    console.log('selectedFile', selectedFile);
    setValues({ ...values, [name]: selectedFile });
    formik.setValues({ ...formik.values, [name]: selectedFile });
  };

  useEffect(() => {
    if (editEmployees && editEmployees.Documents && editEmployees.Documents.length > 0) {
      const updatedValues = {};
      editEmployees.Documents.forEach((doc) => {
        console.log('document', doc);
        const type = doc.document_type;
        console.log('55353', type);
        const nameFile = `${type}_document`;
        const nameNumber = `${type}_number`;

        updatedValues[nameFile] = doc.file_name;
        updatedValues[nameNumber] = doc.document_number;
      });
      console.log('678', updatedValues);
      setValues(updatedValues);
      formik.setValues(updatedValues);
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editEmployees]);

  const onSubmit = async (e, label, type) => {
    e.preventDefault();
    try {
      formik.handleSubmit();
      const data = { ...values, employee_id: employeeId };
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (AddMode) {
        if (label === "Save" && type === "submit" && formik.isValid) {
          formik.handleSubmit();
          const response = await postDataImage(DOCUMENTS_API, formData);
          console.log("Form submitted successfully:", response);
          setIsModalOpen(true);
          handleSubmit(data);
        } else if (label === "Next") {
          handleNextClick();
        }
      } else if (!AddMode && editMode && formik.isValid) {
        formik.handleSubmit();
        if (label === "Save" && type === "submit") {
          await putDataFile(`${DOCUMENTS_DETAILS_PUT_API}/${editEmployees.employee_id}`, formData);
          console.log("PUT API called successfully");
        } else if (label === "Next") {
          handleNextClick();
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleButtonClick = (label) => {
    if (label === "Next" && Object.keys(formik.errors).length === 0 && formik.isValid) {
      handleNextClick();
    }
  };

  const addCustomComponent = () => {
    setCustomComponents((prev) => [...prev, { customValue: "" }]);
  };
    setCustomComponents((prev) => [...prev, { customValue: "" }]);
  };

  const updateCustomValue = (index, value) => {
    setCustomComponents((prev) =>
      prev.map((item, i) => (i === index ? { ...item, customValue: value } : item))
      prev.map((item, i) => (i === index ? { ...item, customValue: value } : item))
    );
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <form onSubmit={(e) => onSubmit(e, "Save", "submit")}>
      <div className=" flex-col w-[130vh] h-5/6 mt-8 ">
        <div className="form-line flex mb-4 ml-20">
          {config.slice(0, 2).map((field, index) => (
            <div key={index}>
              <label className={DocumentStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DocumentStyles[field.textcss].input}
                  icon={field.icon}

                  onBlur={formik.handleBlur}

                  onBlur={formik.handleBlur}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  value={values[field.name] || ""}
                  value={values[field.name] || ""}
                  textcss={DocumentStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                  iconPosition={field.iconPosition}

                  onBlur={formik.handleBlur}

                  onBlur={formik.handleBlur}
                />
              )}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(2, 4).map((field, index) => (
            <div key={index}>
              <label className={DocumentStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DocumentStyles[field.textcss].input}
                  icon={field.icon}

                  onBlur={formik.handleBlur}

                  onBlur={formik.handleBlur}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  value={values[field.name] || ""}
                  value={values[field.name] || ""}
                  textcss={DocumentStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                  iconPosition={field.iconPosition}

                  onBlur={formik.handleBlur}

                  onBlur={formik.handleBlur}
                />
              )}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(4, 6).map((field, index) => (
            <div key={index}>
              <label className={DocumentStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DocumentStyles[field.textcss].input}
                  icon={field.icon}

                  onBlur={formik.handleBlur}

                  onBlur={formik.handleBlur}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  value={values[field.name] || ""}
                  value={values[field.name] || ""}
                  textcss={DocumentStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                  iconPosition={field.iconPosition}

                  onBlur={formik.handleBlur}

                  onBlur={formik.handleBlur}
                />
              )}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(6, 8).map((field, index) => (
            <div key={index}>
              <label className={DocumentStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DocumentStyles[field.textcss].input}
                  icon={field.icon}

                  onBlur={formik.handleBlur}

                  onBlur={formik.handleBlur}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  value={values[field.name] || ""}
                  value={values[field.name] || ""}
                  textcss={DocumentStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                  iconPosition={field.iconPosition}

                  onBlur={formik.handleBlur}

                  onBlur={formik.handleBlur}
                />
              )}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(8, 10).map((field, index) => (
            <div key={index}>
              <label className={DocumentStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DocumentStyles[field.textcss].input}
                  icon={field.icon}

                  onBlur={formik.handleBlur}

                  onBlur={formik.handleBlur}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  value={values[field.name] || ""}
                  value={values[field.name] || ""}
                  textcss={DocumentStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                  iconPosition={field.iconPosition}

                  onBlur={formik.handleBlur}

                  onBlur={formik.handleBlur}
                />
              )}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
            </div>
          ))}
        </div>


        <div className="ml-[50vh]">
          <ButtonConfig Config={ButtonforSave} onClick={(label, type) => handleButtonClick(label, type, editMode)} />
        </div>

        <div className="ml-20 mb-2 mr-2">
          <ButtonConfig Config={ButtonforAdd} onClick={addCustomComponent} />
        </div>

        <div className="ml-20">
          {customComponents.map((customComponent, index) => (
            <CustomComponent
              key={index}
              value={customComponent.customValue}
              config={customformContent}
              onCustomChange={(value) => updateCustomValue(index, value)}
            />
          ))}
        </div>
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={ModalConfig2}
      />
    </form>
  );
};

DocumentsFormComponent.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      textcss: PropTypes.string,
      icon: PropTypes.node,
      iconPosition: PropTypes.string,
    })
  ).isRequired,
  handleNextClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  employeeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  editEmployees: PropTypes.shape({
    employee_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Documents: PropTypes.arrayOf(
      PropTypes.shape({
        document_type: PropTypes.string.isRequired,
        file_name: PropTypes.string,
        document_number: PropTypes.string,
      })
    ),
  }),
};

export default DocumentsFormComponent;
