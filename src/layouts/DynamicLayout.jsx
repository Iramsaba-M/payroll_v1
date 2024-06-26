
// import { useComponentMapping } from "../context/ComponentMappingContext";
// import { sections } from "./LayoutConfigFile";

// const DynamicLayout = () => {

//     const componentMapping = useComponentMapping();

//     return (
//         <div className="">
//             <div className="flex ml-14">
//                 {sections.section1 &&
//                     sections.section1.map((section, index) => (
//                         <div key={index} className={section.style}>
//                             {(() => {
//                                 const Component = componentMapping[section.componentKey];
//                                 const config = section.config;
//                                 return <Component content={section.content} componentMapping={componentMapping} config={config} />;
//                             })()}
//                         </div>
//                     ))}
//             </div>

//         </div>
//     );
// };

// export default DynamicLayout;

import { useComponentMapping } from "../context/ComponentMappingContext";
import { sections } from "./LayoutConfigFile";
import PropTypes from 'prop-types';

const DynamicLayout = ({ role }) => {
  const componentMapping = useComponentMapping();

  return (
    <div className="">
      <div className="flex ml-14">
        {sections.section1 &&
          sections.section1.map((section, index) => (
            <div key={index} className={section.style}>
              {(() => {
                const Component = componentMapping[section.componentKey];
                const config = section.config;
                return (
                  <Component
                    content={section.content}
                    componentMapping={componentMapping}
                    config={config}
                    role={role} // Pass the role to each component
                  />
                );
              })()}
            </div>
          ))}
      </div>
    </div>
  );
};

DynamicLayout.propTypes = {
  role: PropTypes.string.isRequired, // Define role prop type
};


export default DynamicLayout;
