import { useState } from 'react';
import TableStyle from './TableStyle';
import { MdOutlineEdit, MdOutlineFileDownload, MdDeleteOutline } from 'react-icons/md';
import { Delete_All, view } from '../../api/EndPoints';
import { DeleteData, fetchData } from '../../services/APIService';
import ModalComponent from '../../components/form/Formfields/modal/ModalComponent';
import { ModalPayslipConfig } from '../../components/form/Formfields/modal/ModalPayslipConfig';
import { ModalReviewPayrollConfig } from '../../components/form/Formfields/modal/ModalReviewPayrollConfig';
import { useButtonState } from '../../context/ButtonStateContext';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { FaRegCheckCircle } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import { Editmodelconfig } from '../../components/form/Formfields/modal/Editmodelconfig';
import { Editmodelloanconfig } from '../../components/form/Formfields/modal/Editmodelconfigloan';
import PropTypes from 'prop-types';
import { GrView } from "react-icons/gr";
import { Editmodelreport } from '../../components/form/Formfields/modal/Editmodelconfigreport';
import '../../assets/Styles/CalendarStyle.css';


function DynamicTable({ config, data, currentPage, pageSize, totalDocuments, setCurrentPage, onEditEmployee }) {
  // const [selectedRows, setSelectedRows] = useState([]);
  // const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editnotifyopen, seteditnotifyopen] = useState(false);
  const [editreportopen, seteditreportopen] = useState(false);
  const [editloanopen, seteditloanopen] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const { EditModeclick } = useButtonState();
  // Calculate the total number of pages

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };
  // const paginatedData = data.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  // const handleCheckboxChange = (row) => {
  //   if (selectedRows.includes(row)) {
  //     setSelectedRows(selectedRows.filter((selectedRow) => selectedRow !== row));
  //   } else {
  //     setSelectedRows([...selectedRows, row]);
  //   }
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditModalOpen(false);
    seteditnotifyopen(false);
    seteditloanopen(false);
    seteditreportopen(false);
  };

  const handleDownload = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }

      const queryParams = { employee_id: row.employee_id };
      const endpoint = `${view}/${queryParams.employee_id}`;
      const tableData = await fetchData(endpoint, queryParams);

      const blob = await tableData.blob();
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error downloading payslip:', error);
    }
  };

  const handleViewPayslips = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }

      setIsModalOpen(true);
      // const endpoint = `${view}/${row.employee_id}`;
      // const tableData = await fetchData(endpoint);

      // console.log('Modal data:', tableData);
    } catch (error) {
      console.error('Error fetching payslips data:', error);
    }
  };

  const handleEditPayslips = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }
      EditModeclick();
      console.log("Edit mode is true");
      onEditEmployee(row.employee_id); // Call the onEditEmployee function passed as a prop
    } catch (error) {
      console.error('Error fetching payslips data:', error);
    }
  };
  const handleEditPayslips1 = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }
      setEditModalOpen(true)

    } catch (error) {
      console.error('Error fetching payslips data:', error);
    }
  };
  const handleInvoice = (base64Data) => {
    try {
      // Decode the Base64 content to a binary string
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);

      // Create a Blob from the binary data
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      // Open the PDF in a new tab
      window.open(url);
    } catch (error) {
      console.error('Error fetching or displaying invoice data:', error);
    }
  };

  
  const editleavenotification = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }
      // Store the employee_id of the selected row
      setSelectedEmployeeId(row.employee_id);
      seteditnotifyopen(true, row.employee_id);

    } catch (error) {
      console.error('Error fetching payslips data:', error);
    }
  };
  const editloannotification = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }
      // Store the employee_id of the selected row
      setSelectedEmployeeId(row.employee_id);
      seteditloanopen(true, row.employee_id);

    } catch (error) {
      console.error('Error fetching payslips data:', error);
    }
  }
  const editreportnotification = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }
      // Store the employee_id of the selected row
      setSelectedEmployeeId(row.employee_id);
      seteditreportopen(true, row.employee_id);

    } catch (error) {
      console.error('Error fetching payslips data:', error);
    }
  }

  const handleDelete = async (row) => {
    const employeeId = row.employee_id;
    const endpoint = `${Delete_All}?employee_id=${employeeId}`;

    try {
      const response = await DeleteData(endpoint);
      console.log('Employee deleted successfully:', response);
      window.location.reload();
      // Handle success, maybe refresh the data or show a message
    } catch (error) {
      console.error('Failed to delete employee:', error);
      // Handle errors
    }
  };

  // const handleSelectAll = () => {
  //   if (selectAll) {
  //     setSelectedRows([]);
  //   } else {
  //     setSelectedRows([...data]);
  //   }
  //   setSelectAll(!selectAll);
  // };

  const handleDownload2 = (row) => {
    const employee_id = 2; // Statically define employee_id here

    const { year, month } = row; // Extract year and month from the row object

    // Construct the download URL with query parameters
    const downloadUrl = `http://192.168.0.136:8000/payslip/?employee_id=${employee_id}&year=${year}&month=${month}`;

    fetch(downloadUrl)
      .then(response => response.blob()) // Get the response as a Blob object directly
      .then(blobData => {
        // Create Blob object from the received data
        const blobUrl = URL.createObjectURL(blobData);

        // Create a temporary <a> element to trigger the download
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = `payslip_${employee_id}_${year}_${month}.pdf`; // Set the filename for the downloaded PDF
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Clean up the Blob URL object
        URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Error downloading payslip:', error);
      });
  };


  // function base64ToBlob(base64, type = 'application/octet-stream') {
  //   const binStr = atob(base64);
  //   const len = binStr.length;
  //   const arr = new Uint8Array(len);
  //   for (let i = 0; i < len; i++) {
  //     arr[i] = binStr.charCodeAt(i);
  //   }
  //   return new Blob([arr], { type: type });
  // }
  const renderCellContent = (row, column) => {
    if (column.name === 'employee_name' && row.first_name && row.middle_name && row.last_name) {
      // console.log('Rendering employee name:', row.id, row.first_name, row.middle_name, row.last_name);
      const formattedName = `${row.first_name} ${row.middle_name} ${row.last_name}`;
      if (row.photo_content) {
        const imageUrl = `data:image/png;base64, ${row.photo_content}`;
        // console.log('Image URL:', imageUrl);
        const photoIcon = (
          <img
            src={imageUrl}
            alt="Employee Photo"
            className="rounded-full"
            style={{ width: '24px', height: '24px', marginRight: '4px' }}
          />
        );
        return (
          <div className="flex items-center">
            {photoIcon}
            <span>{formattedName}</span>
          </div>
        );
      }
      // If photo_content is not available, still render employee name
      return <span>{formattedName}</span>;
    }

    if (column.name === 'status' && column.clmncss) {
      const statusStyle = column.statusStyles ? column.statusStyles[row[column.name]] : '';
      return <div className='flex justify-center'><div className={TableStyle[statusStyle]} >{row[column.name]}</div></div>;
    }

    if (column.name === 'edit') {
      // Render AddEmployee component conditionally
      return (
        <button className="cursor-pointer" onClick={() => handleEditPayslips(row)}>
          {column.content}
        </button>
      );
    } else if (column.dataType === 'icon' && column.name === 'payslip') {
      // Render Download button with icon
      return (
        <button
          className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full cursor-pointer inline-flex items-center"
          onClick={() => handleDownload2(row)}
        >
          <MdOutlineFileDownload />
        </button>
      );
    } else if (column.name === 'PAYSLIPS') {
      // Render PaySlips button
      return (
        <button
          className="bg-teal-50 text-green-600 px-4 py-1 rounded-full cursor-pointer inline-flex items-center"
          onClick={() => handleViewPayslips(row)}
        >
          <span className="h-3 w-8 flex items-center">View</span>
        </button>
      );
    } else if (column.dataType === 'icon' && column.name === 'download') {
      // Render Download button with icon
      return (
        <button
          className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full cursor-pointer inline-flex items-center"
          onClick={() => handleDownload(row)}
        >
          <MdOutlineFileDownload />
        </button>
      );
    } else if (column.dataType === 'icon' && column.name === 'delete') {
      // Render Download button with icon
      return (
        <button
          className=" text-gray-400 px-4 py-1 rounded-full cursor-pointer inline-flex items-center"
          onClick={() => handleDelete(row)}
        >
          <MdDeleteOutline />
        </button>
      );
    } else if (column.dataType === 'icon' && column.name === 'documents') {
      // Render Download button with icon
      return (
        <button
          className=" text-gray-400 px-4 py-1 rounded-full cursor-pointer inline-flex items-center"
          onClick={() => handleInvoice(row.documents)}
        >
          <GrView /> 
              view
        </button>
      );
    }
    else if (column.dataType === 'icon' && column.name === 'finalizeedit') {
      // Render Edit icon
      return (
        <button
          className="cursor-pointer"
          onClick={() => handleEditPayslips1(row)}
        >
          <MdOutlineEdit />
        </button>
      );
    } else if (column.dataType === 'icon' && column.name === 'action') {
      switch (row.status) {
        case 'approved':
          return <FaRegCheckCircle className="text-green-500 ml-[12px] text-xl font-bold" />;
        case 'rejected':
          return <ImCancelCircle className="text-red-500 ml-[12px] text-xl" />;
        case 'pending':
        default:
          console.log('row', row);
          return (
            <button
              className="cursor-pointer"
              onClick={() => editleavenotification(row)}
            >
              <MdOutlineEdit className="text-blue-500  text-xl" />
            </button>
          );
      }
    } else if (column.dataType === 'icon' && column.name === 'action2') {
      switch (row.status) {
        case 'approved':
          return <FaRegCheckCircle className="text-green-500 ml-[4px] text-xl font-bold" />;
        case 'rejected':
          return <ImCancelCircle className="text-red-500 ml-[4px] text-xl" />;
        case 'pending':
        default:
          console.log('row', row);
          return (
            <button
              className="cursor-pointer"
              onClick={() => editloannotification(row)}
            >
              <MdOutlineEdit className="text-blue-500  text-xl" />
            </button>
          );
      }
    }else if (column.dataType === 'icon' && column.name === 'action3') {
      switch (row.status) {
        case 'Approved':
          return <FaRegCheckCircle className="text-green-500 ml-[4px] text-xl font-bold" />;
        case 'Rejected':
          return <ImCancelCircle className="text-red-500 ml-[4px] text-xl" />;
        case 'Pending':
        default:
          console.log('row', row);
          return (
            <button
              className="cursor-pointer"
              onClick={() => editreportnotification(row)}
            >
              <MdOutlineEdit className="text-blue-500  text-xl" />
            </button>
          );
      }
    }

    else {
      // Default rendering for other columns
      return row[column.name] || '';
    }
  };

  console.log("employee data=", data)

  DynamicTable.propTypes = {
    config: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    totalDocuments: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    onEditEmployee: PropTypes.func

  };
  const totalPages = Math.max(Math.ceil(totalDocuments / pageSize), 1);

  return (
    <div className="max-h-[48vh] overflow-y-auto border-2 bg-white rounded-xl hover:border-blue-500  no-scrollbar">
      <table>
        <thead >
          <tr className="bg-gray-100 p-2">
            {/* <th className="px-8">
              <input type="checkbox" onChange={handleSelectAll} checked={selectAll} />
            </th> */}
            {config.map((column) => (
              <th key={column.name} className={TableStyle[column.clmncss]}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* <td className="px-9">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(row)}
                  checked={selectedRows.includes(row)}
                />
              </td> */}
              {config.map((column) => (
                <td key={column.name} className={TableStyle[column.cssClass]} style={{ textAlign: 'center' }}>
                  {renderCellContent(row, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className='flex justify-between p-1 mx-4'>
        <p className="text-gray-400 font-medium p-1 text-sm">
          Showing {currentPage === 1 ? 1 : (currentPage - 1) * pageSize + 1} - {Math.min(currentPage * pageSize, totalDocuments)} of {totalDocuments} employees
        </p>

        <ReactPaginate className='flex'
          previousLabel={<FaAngleLeft className='mt-1' />}
          nextLabel={<FaAngleRight className='mt-1' />}
          breakLabel={'...'}
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          forcePage={currentPage - 1}
          containerClassName={'mt-1'}
          pageClassName={'px-3'}
          pageLinkClassName={'text-gray-400 font-bold text-sm'}
          activeLinkClassName={'text-gray-100 font-bold text-sm border-gray-2 bg-blue-600 px-3 py-2 rounded-full'}
          previousLinkClassName={'text-gray-400 font-medium text-lg mr-2'}
          nextLinkClassName={'text-gray-400 font-medium text-lg '}
        />
      </div>
      {isModalOpen && <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} config={ModalPayslipConfig} />}
      {editModalOpen && (
        <ModalComponent isOpen={editModalOpen} onClose={handleCloseModal} config={ModalReviewPayrollConfig} />
        // <ModalComponent isOpen={editModalOpen} onClose={handleCloseModal} config={Editmodelconfig} />
      )}
      {editnotifyopen && (
        // <ModalComponent isOpen={editnotifyopen} onClose={handleCloseModal} config={Editmodelconfig} />
        <ModalComponent isOpen={editnotifyopen} onClose={handleCloseModal} config={Editmodelconfig} employee_id={selectedEmployeeId} />
      )}
      {editloanopen && (
        // <ModalComponent isOpen={editnotifyopen} onClose={handleCloseModal} config={Editmodelconfig} />
        <ModalComponent isOpen={editloanopen} onClose={handleCloseModal} config={Editmodelloanconfig} employee_id={selectedEmployeeId} />
      )}
      {editreportopen && (
        // <ModalComponent isOpen={editnotifyopen} onClose={handleCloseModal} config={Editmodelconfig} />
        <ModalComponent isOpen={editreportopen} onClose={handleCloseModal} config={Editmodelreport} employee_id={selectedEmployeeId} />
      )}
    </div>
  );
}

export default DynamicTable;
