// import  { useState, useEffect } from "react";

// const CustomEmailInput = ({ emailSuggestions, onEmailsChange }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [emails, setEmails] = useState([]);
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);

//   useEffect(() => {
//     console.log("Current email suggestions:", emailSuggestions); // Debugging log
//     if (inputValue.includes(",")) {
//       const newEmails = inputValue.split(",").map((email) => email.trim());
//       setEmails([...emails, ...newEmails.filter((email) => email)]);
//       setInputValue("");
//       onEmailsChange([...emails, ...newEmails.filter((email) => email)]);
//     } else {
//       const suggestions = emailSuggestions
//         .filter(
//           (suggestion) =>
//             typeof suggestion === 'string' &&
//             suggestion.toLowerCase().includes(inputValue.toLowerCase())
//         );
//       setFilteredSuggestions(suggestions);
//     }
//   }, [inputValue, emailSuggestions, emails, onEmailsChange]);

//   const handleSuggestionClick = (suggestion) => {
//     setEmails([...emails, suggestion]);
//     setInputValue("");
//     onEmailsChange([...emails, suggestion]);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     setIsSuggestionsVisible(true);
//   };

//   const handleEmailRemove = (index) => {
//     const newEmails = emails.filter((_, i) => i !== index);
//     setEmails(newEmails);
//     onEmailsChange(newEmails);
//   };

//   const handleInputClick = () => {
//     setIsSuggestionsVisible(true); 
//   };

//   return (
//     <div>
//       <div className="email-input flex flex-wrap bg-white items-center border max-w-[21rem] border-gray-300 rounded ">
//         {emails.map((email, index) => (
//           <div key={index} className="email-chip bg-gray-200 p-1  text-xs rounded m-1 flex items-center">
//             {email} 
//             <span 
//               onClick={() => handleEmailRemove(index)} 
//               className="ml-1 cursor-pointer text-red-500"
//             >
//               x
//             </span>
//           </div>
//         ))}
//         <input
//           type="option"
//           value={inputValue}
//           onChange={handleInputChange}
//           onClick={handleInputClick}
//           placeholder="Add emails..."
//           className="flex-1 p-1  focus:outline-none text-sm"
//         />
//       </div>
//       {isSuggestionsVisible && filteredSuggestions.length > 0 && (
//         <ul className="suggestions-list border border-gray-300 mt-2 text-sm rounded shadow-lg absolute bg-white z-10">
//           {filteredSuggestions.map((suggestion, index) => (
//             <li 
//               key={index} 
//               onClick={() => handleSuggestionClick(suggestion)}
//               className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CustomEmailInput;

// CustomEmailInputStyles.js
// export const emailInputStyles = {
//     container: "email-input flex flex-wrap bg-white items-center border w-[21rem] border-gray-300 rounded",
//     emailChip: "email-chip bg-gray-200 p-1 text-xs rounded m-1 flex items-center",
//     removeIcon: "ml-1 cursor-pointer text-red-500",
//     input: "flex-1 p-1 focus:outline-none text-sm",
//     suggestionsList: "suggestions-list border border-gray-300 mt-2 text-sm rounded shadow-lg absolute bg-white z-10",
//     suggestionItem: "p-2 hover:bg-blue-500 hover:text-white cursor-pointer",
//   };


  import  { useState, useEffect } from "react";
  import { emailInputStyles } from "./AnnouncementSettingStyles";
  
  const CustomEmailInput = ({ emailSuggestions, onEmailsChange }) => {
    const [inputValue, setInputValue] = useState("");
    const [emails, setEmails] = useState([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  
    useEffect(() => {
      console.log("Current email suggestions:", emailSuggestions); // Debugging log
      if (inputValue.includes(",")) {
        const newEmails = inputValue.split(",").map((email) => email.trim());
        setEmails([...emails, ...newEmails.filter((email) => email)]);
        setInputValue("");
        onEmailsChange([...emails, ...newEmails.filter((email) => email)]);
      } else {
        const suggestions = emailSuggestions.filter(
          (suggestion) =>
            typeof suggestion === "string" &&
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredSuggestions(suggestions);
      }
    }, [inputValue, emailSuggestions, emails, onEmailsChange]);
  
    const handleSuggestionClick = (suggestion) => {
      setEmails([...emails, suggestion]);
      setInputValue("");
      onEmailsChange([...emails, suggestion]);
    };
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
      setIsSuggestionsVisible(true);
    };
  
    const handleEmailRemove = (index) => {
      const newEmails = emails.filter((_, i) => i !== index);
      setEmails(newEmails);
      onEmailsChange(newEmails);
    };
  
    const handleInputClick = () => {
      setIsSuggestionsVisible(true);
    };
  
    return (
      <div>
        <div className={emailInputStyles.container}>
          {emails.map((email, index) => (
            <div key={index} className={emailInputStyles.emailChip}>
              {email}
              <span
                onClick={() => handleEmailRemove(index)}
                className={emailInputStyles.removeIcon}
              >
                x
              </span>
            </div>
          ))}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
            placeholder="Add emails..."
            className={emailInputStyles.input}
          />
        </div>
        {isSuggestionsVisible && filteredSuggestions.length > 0 && (
          <ul className={emailInputStyles.suggestionsList}>
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className={emailInputStyles.suggestionItem}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default CustomEmailInput;
  