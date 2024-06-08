
import React, { useState, useEffect } from 'react';
import DynamicTable from '../../../../configurations/tables/DynamicTable';
import { LeavetableContent } from './LeaveNotificationConfig';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import EditModal from '../EditModal';
import { Leave_notification_admin } from '../../../../api/EndPoints';
import { fetchData1 } from '../../../../services/APIService';

const LeaveNotifications = () => {
    const [data, setData] = useState({
        employees: [],
        total_pages: 1,
        page_size: 5,
        total_documents: 0,
        current_page: 1
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const pageSize = 5;

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const fetchData = async (month, year) => {
        setLoading(true);
        try {
            const response = await fetchData1(`${Leave_notification_admin}?month=${month}&year=${year}&page=${currentPage}&page_size=${pageSize}`);

            // Assuming response is structured as [[{...}, {...}], {pagination info}]
            const [employees, pagination] = response;

            setData({
                employees: employees || [],
                total_pages: pagination.total_pages || 1,
                page_size: pagination.page_size || pageSize,
                total_documents: pagination.total_documents || 0,
                current_page: pagination.current_page || 1
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error appropriately
        }
        setLoading(false);
    };

    useEffect(() => {
        const month = monthNames[selectedDate.getMonth()]; // Convert month number to month name
        const year = selectedDate.getFullYear();
        fetchData(month, year);
    }, [currentPage, selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setCurrentPage(1); // Reset to the first page when date changes
    };

    const handleEditClick = (employee) => {
        setSelectedEmployee(employee);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEmployee(null);
    };

    const handleSaveComment = (action, comment) => {
        console.log(`Action: ${action}, Comment: ${comment}, Employee: ${selectedEmployee}`);
        // Handle the save action here
        setIsModalOpen(false);
        setSelectedEmployee(null);
    };

    return (
        <div className="container mx-auto p-4">
            <div className='relative md:absolute md:right-2 md:top-[90px]'>
                <p className='mb-2 ml-[40px] mt-8 font-semibold md:-ml-4 md:mt-8'>Payroll For the Month</p>
                <div className='ml-[2vh] -mt-[8px] md:ml-[20vh] md:-mt-10 border-2 w-[19vh] h-7 border-gray-200 rounded-md flex items-center'>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        placeholderText='To'
                        dateFormat="MMMM-yyyy"
                        className='w-full px-2 focus:outline-none'
                        showMonthYearPicker
                    />
                    <RiArrowDropDownLine className='text-3xl text-gray-500 mr-2' />
                </div>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='w-full md:w-[720px] lg:w-[1155px] mt-10'>
                    <DynamicTable
                        config={LeavetableContent}
                        data={data.employees}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        totalDocuments={data.total_documents}
                        setCurrentPage={setCurrentPage}
                        handleEditClick={handleEditClick} // Pass handleEditClick to DynamicTable
                    />
                </div>
            )}
            {!loading && data.employees.length === 0 && (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default LeaveNotifications;
