
// excelUtils.js
import ExcelJS from 'exceljs';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { postData } from '../src/services/APIService';
import { Import_GET_API, Import_UPLOAD__GET_API } from '../src/api/EndPoints';
import { postFile } from '../src/services/APIService';

// Function to concatenate first name, middle name, and last name
export const concatenateName = (First_Name, Middle_Name, Last_Name) => {
  return [First_Name, Middle_Name, Last_Name].filter(Boolean).join(' ');
};

export const generateTemplate = async () => {
  try {
    // Assuming you have some dummy data to send in the request
    const dummyData = {};

    // Use postData function for making the POST request
    const response = await postFile(Import_GET_API, dummyData);

    // Assuming the response is a Blob, modify this part accordingly
    const blob = new Blob([response], { type: 'application/octet-stream' });

    // Save the blob as a file
    saveAs(blob, 'employee_template.xlsx');
  } catch (error) {
    console.error('Error fetching template:', error);
  }
};

export const uploadEmployeeData = async (data, file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof Date) {
        formData.append(key, value.toISOString());
      } else {
        formData.append(key, value);
      }
    });

    const response = await postData(Import_UPLOAD__GET_API, formData);

    if (response) {
      console.log('File uploaded successfully:', response);
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
