
// excelUtils.js
import ExcelJS from 'exceljs';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import axios from 'axios';


 // Function to concatenate first name, middle name, and last name
 export const concatenateName = (First_Name, Middle_Name, Last_Name) => {
  return [First_Name, Middle_Name, Last_Name].filter(Boolean).join(' ');
};

export const generateTemplate = async () => {
  const url = 'http://192.168.0.130:8000/api/download_template';

  try {
    const response = await fetch(url, {
      method: 'POST',  // Change the method to POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),  // You might need to include some dummy data
    });

    if (response.ok) {
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'employee_template.xlsx';
      link.click();
    } else {
      console.error('Error fetching template:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error fetching template:', error);
  }
};



// export const uploadEmployeeData = async (data, file) => {
//   const url = 'http://192.168.0.106:8000/api/upload_and_process';

//   const formData = new FormData();
//   formData.append('upload_file', file);

//   // Append other data fields to the FormData object
//   Object.entries(data).forEach(([key, value]) => {
//     formData.append(key, value);
//   });

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       body: formData,
//     });

//     if (response.ok) {
//       console.log('Data uploaded successfully:', data);
//     } else {
//       console.error('Error uploading data:', response.status, response.statusText);
//     }
//   } catch (error) {
//     console.error('Error uploading data:', error);
//   }
// };
export const uploadEmployeeData = async (data, file) => {
  const url = 'http://192.168.0.130/api/upload_and_process';

  const formData = new FormData();
  formData.append('file', file); // Ensure the key matches what the server expects

  // Append other data fields to the FormData object
  Object.entries(data).forEach(([key, value]) => {
    // Convert date field to string if it's a Date object
    if (value instanceof Date) {
      formData.append(key, value.toISOString()); // Adjust to the appropriate date format
    } else {
      formData.append(key, value);
    }
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log('File uploaded successfully:', responseData);
    } else {
      console.error('Error uploading file:', response.status, response.statusText);
      console.error('Response Data:', responseData);

      if (response.status === 422 && responseData.detail) {
        console.error('Validation Errors:', responseData.detail);
      }
    }
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};



export const parseExcelFile = async (file) => {
  const workbook = new ExcelJS.Workbook();
  const data = [];

  // Load the workbook from the uploaded file
  await workbook.xlsx.load(file);

  // Assuming the data is in the first worksheet
  const worksheet = workbook.getWorksheet(1);

  // Get the column names from the first row
  const columnNames = worksheet.getRow(1).values;

  console.log('Column Names:', columnNames);

 

  // Iterate through rows and columns to extract data
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      let currentEmployee = {};
      let currentEmployeeName = '';

      row.eachCell((cell, columnIndex) => {
        console.log(`Row ${rowNumber}, Column ${columnIndex}:`, cell.value);

        if (columnNames[columnIndex] === 'date_of_joining') {
          // Format the date to "DD/MM/YYYY"
          const formattedDate = cell.value
            ? new Date(cell.value).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
            : null;
          currentEmployee['JOINING_DATE'] = formattedDate; // Assign to 'JOINING_DATE'
        
        } else if (columnNames[columnIndex].toLowerCase().includes('name')) {
          // Concatenate first name, middle name, and last name
          currentEmployeeName += cell.value ? cell.value.trim() + ' ' : '';
          if (columnNames[columnIndex] === 'Last_Name') {
            // If the current column is 'lname', add the concatenated employee name to the currentEmployee
            currentEmployee['EMPLOYEE_NAME'] = currentEmployeeName.trim();
            currentEmployeeName = ''; // Reset for the next set of rows
          }
        } else if (columnNames[columnIndex] === 'designation') {
          // Map "designation" to "Designation"
          currentEmployee['DESIGNATION'] = cell.value;
        } else if (typeof cell.value === 'string') {
          // Handle string values
          currentEmployee[columnNames[columnIndex]] = cell.value.trim(); // Remove leading/trailing spaces
        } else {
          // Default handling for other data types
          currentEmployee[columnNames[columnIndex]] = cell.value;
        }
      });

      // Add the currentEmployee to the data array
      data.push(currentEmployee);
    }
  });

  // Log the extracted data with formatted dates
  console.log('Extracted Data:', data);

  return data;
};

// excelUtils.js

// export const parseExcelFile = async (file) => {
//   const url = 'http://192.168.0.106:8000/api/upload_and_process';

//   const formData = new FormData();
//   formData.append('upload_file', file);

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       body: formData,
//       headers: {
//         Accept: 'application/json',
//       },
//     });

//     if (response.ok) {
//       console.log('File uploaded successfully to the server.');
//     } else {
//       console.error('Error uploading file:', response.status, response.statusText);
//       const responseData = await response.json();

//       if (response.status === 422 && responseData.errors) {
//         console.error('Validation Errors:', responseData.errors);
//       }
//     }
//   } catch (error) {
//     console.error('Error uploading file:', error);
//   }
// };

// export const exportDataTemplate = async (apiEndpoint, format) => {
//   try {
//     const response = await fetch(`${apiEndpoint}?format=${format}`, {
//       method: 'GET',
//       headers: {
//         'Accept': '*/*', 
//       },
//     });

//     if (response.ok) {
//       const blob = await response.blob();
//       const link = document.createElement('a');

//       let fileExtension = '';
//       let fileName = 'exported_data';

//       switch (format) {
//         case 'pdf':
//           fileExtension = 'pdf';
//           break;

//         case 'excel':
//           fileExtension = 'xlsx';
//           break;

//         case 'csv':
//           fileExtension = 'csv';
//           break;

//         default:
//           console.error(`Unsupported export format: ${format}`);
//           return;
//       }

//       fileName += `.${fileExtension}`;
//       link.href = URL.createObjectURL(blob);
//       link.download = fileName;
//       link.click();
//     } else {
//       console.error(`Error fetching data for export: ${response.status}`, response.statusText);
//     }
//   } catch (error) {
//     console.error('Error exporting data:', error);
//   }
// };

export const exportDataTemplate = async (apiEndpoint, format) => {
  try {
    const response = await fetch(`${apiEndpoint}?format=${format}`, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
      },
      
    });

    if (!response.ok) {
      console.error(`Error fetching data for export: ${response.status}`, response.statusText);
      const errorText = await response.text();
      console.error('Additional error details:', errorText);
      throw new Error('Failed to fetch data for export');
    }

    // Extract filename from Content-Disposition header
    const contentDisposition = response.headers.get('Content-Disposition');
    const fileName = contentDisposition ? contentDisposition.split('filename=')[1] : 'exported_data';

    // Log Blob details
    const blob = await response.blob();
    console.log('Blob:', blob);

    // Create a link element
    const link = document.createElement('a');
    
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Set the download attribute and filename
    link.href = url;
    link.download = fileName;

    // Append the link to the body
    document.body.appendChild(link);

    // Dispatch a click event to trigger the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);

    // Revoke the Blob URL to free up resources
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error exporting data:', error);
  }
};
