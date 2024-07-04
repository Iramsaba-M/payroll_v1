

import { useState, useEffect } from 'react';
import DynamicTable from '../../../../configurations/tables/DynamicTable';
import { Reimbrusment_notification_admin } from '../../../../api/EndPoints';
import { fetchData1 } from '../../../../services/APIService';
import { ReimbursementNotifyconfig } from './ReimbursementNotifyconfig';

const ReimbursementNotification = () => {
    const [data, setData] = useState({
        employees: [],
        total_pages: 1,
        page_size: 5,
        total_documents: 0,
        current_page: 1
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const pageSize = 5;

    // server
    // const fetchData = async (currentPage, pageSize) => {
    //     setLoading(true);
    //     try {
    //         const response = await fetchData1(Loan_notification_admin, currentPage, pageSize);
    //         // const result = response.data;

    //         const [employees, pagination] = response;

    //         setData({
    //             employees: employees || [],
    //             total_pages: pagination.total_pages || 1,
    //             page_size: pagination.page_size || pageSize,
    //             total_documents: pagination.total_documents || 0,
    //             current_page: pagination.current_page || 1
    //         });
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //         // Handle error appropriately
    //     }
    //     setLoading(false);
    // };


     //db.json
    const fetchData = async (currentPage, pageSize) => {
        setLoading(true);
        try {
            const url = 'http://127.0.0.1:8000/enduser/reimbursement/all?employee_id=IK10001';
            const response = await fetch(url);
            const result = await response.json();

            const totalCount = result.length; // Assuming result is an array

            setData({
                employees: result,
                total_pages: Math.ceil(totalCount / pageSize),
                page_size: pageSize,
                total_documents: totalCount,
                current_page: currentPage
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error appropriately
        }
        setLoading(false);
    };


    useEffect(() => {
        
        fetchData(currentPage, pageSize);
    }, [currentPage, pageSize]);
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='w-[1155px] mt-4'>
                    <DynamicTable
                        config={ReimbursementNotifyconfig}
                        data={data.employees}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        totalDocuments={data.total_documents}
                        setCurrentPage={setCurrentPage}

                    />
                </div>
            )}
            {!loading && data.employees.length === 0 && (
                <p>No data available.</p>
            )}

        </div>
    );
};

export default ReimbursementNotification;


