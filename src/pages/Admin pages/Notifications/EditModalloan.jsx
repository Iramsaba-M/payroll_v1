
import  { useState } from 'react';
import { Loan_notification_patch } from '../../../api/EndPoints';
import { patchData } from '../../../services/APIService';
import PropTypes from 'prop-types';

const EditModalloan = ({ employee_id }) => {
  const [comment, setComment] = useState('');

  
  const handleSave = async (status) => {
    if (!employee_id) {
      console.error('Error: Employee ID is undefined');
      return;
    }

    const data = {
      comments: comment,
      status: status,
    };

    try {
      const result = await patchData(`${Loan_notification_patch}${employee_id}`, data);
      console.log('Success:', result);
      // Add any additional logic after successful save
    } catch (error) {
      console.error('Error:', error);
    }
  };
  EditModalloan.propTypes = {
   
    employee_id: PropTypes.str
};
  return (
    <div className="relative p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-m mb-2">Add Comment</h3>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Type your comment here..."
        className="w-11/12 h-24 resize-vertical p-2 rounded border border-gray-300 shadow mb-4"
      />
      <div>
        <button 
          className="mr-2 px-4 py-2 bg-indigo-500 text-white rounded shadow hover:bg-indigo-600 focus:outline-none"
          onClick={() => handleSave('approved')}
        >
          Accept
        </button>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 focus:outline-none"
          onClick={() => handleSave('rejected')}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default EditModalloan;
