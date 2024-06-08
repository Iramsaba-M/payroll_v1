
import React, { useState, useEffect } from 'react';
import DynamicTable from '../../../../configurations/tables/DynamicTable';
import { LoantableContent } from './LoanNotificationConfig';
import EditModal from '../EditModal';
import { Loan_notification_admin } from '../../../../api/EndPoints';
import { fetchData1 } from '../../../../services/APIService';

const LoanNotifications = () => {
    const [data, setData] = useState({
        employees: [],
        total_pages: 1,
        page_size: 5,
        total_documents: 0,
        current_page: 1
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const pageSize = 5;

    // server
    const fetchData = async (currentPage, pageSize) => {
        setLoading(true);
        try {
            const response = await fetchData1(Loan_notification_admin, currentPage, pageSize);
            // const result = response.data;

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


    //  //db.json
    // const fetchData = async (currentPage, pageSize) => {
    //     setLoading(true);
    //     try {
    //         const url = 'http://localhost:3000/Loannotification';
    //         const response = await fetch(url);
    //         const result = await response.json();

    //         const totalCount = result.length; // Assuming result is an array

    //         setData({
    //             employees: result,
    //             total_pages: Math.ceil(totalCount / pageSize),
    //             page_size: pageSize,
    //             total_documents: totalCount,
    //             current_page: currentPage
    //         });
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //         // Handle error appropriately
    //     }
    //     setLoading(false);
    // };


    useEffect(() => {
        fetchData(currentPage, pageSize);
    }, [currentPage, pageSize]);

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
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='w-[1155px] mt-4'>
                    <DynamicTable
                        config={LoantableContent}
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

export default LoanNotifications;
