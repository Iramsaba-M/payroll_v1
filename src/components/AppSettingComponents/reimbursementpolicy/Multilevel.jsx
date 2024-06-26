import { useState,useEffect } from 'react';
import { MdCancel } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsSixVerticalBold } from "react-icons/pi";

import {
  containerStyle,
  textContainerStyle,
  cardStyle,
  headingStyle,
  radioGroupStyle,
  inputStyle,
  removeIconStyle,
  addButtonStyle,
  saveButtonStyle
} from '../../../pages/Admin pages/Settings/LoanSettingsPages/LoanApprovalstyles';

const ReimbrusmentApprovalSettings = () => {
  const [approvers, setApprovers] = useState([{ id: 1, level: 1 }]);
  const [approvalType, setApprovalType] = useState(true);
  const [approverNames, setApproverNames] = useState({ 1: '' });
  const [emailSuggestions, setEmailSuggestions] = useState([]);

  useEffect(() => {
    // Fetch email suggestions from json-server
    const fetchEmails = async () => {
      try {
        const response = await fetch('http://localhost:3000/emails');
        const data = await response.json();
        setEmailSuggestions(data);
      } catch (error) {
        console.error('Error fetching email suggestions:', error);
      }
    };
    fetchEmails();
  }, []);

  const addNewLevel = () => {
    const newId = approvers.length > 0 ? approvers[approvers.length - 1].id + 1 : 1;
    const newLevel = {
      id: newId,
      level: approvers.length + 1,
    };
    setApprovers([...approvers, newLevel]);
    setApproverNames({ ...approverNames, [newLevel.id]: '' });
  };

  const removeLevel = (id) => {
    const updatedApprovers = approvers.filter(approver => approver.id !== id);

    // Renumber the remaining approvers
    const renumberedApprovers = updatedApprovers.map((approver, index) => ({
      ...approver,
      level: index + 1,
    }));

    setApprovers(renumberedApprovers);

    // Update approver names

    const filteredNames = Object.keys(approverNames).reduce((acc, key) => {
      if (key !== id) {
        acc[key] = approverNames[key];
      }
      return acc;
    }, {});

    const renumberedNames = {};
    renumberedApprovers.forEach((approver) => {
      renumberedNames[approver.id] = filteredNames[approver.id] || approverNames[approver.id];
    });

    setApproverNames(renumberedNames);
  };   

  const handleNameChange = (id, name) => {
    setApproverNames({ ...approverNames, [id]: name });
  };

  const saveSettings = async () => {
    const settings = {
      approvalType,
      approvers: approvers.map(approver => ({
        id: approver.id,
        level: approver.level,
        name: approverNames[approver.id]
      }))
    };

    try {
      const response = await fetch('http://localhost:3000/saveLoanApprovalSettings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(settings)
      });

      if (response.ok) {
        // Handle successful save
        console.log('Settings saved successfully');
      } else {
        // Handle save failure
        console.error('Failed to save settings');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <div className={containerStyle}>
      <div className={textContainerStyle}>
        <div className={headingStyle}>
          Reimbursement Approval Settings
          <IoSettingsOutline />
        </div>
        <div className={cardStyle}>
          <div className="font-semibold mb-2">Multilevel Approval</div>
          <div className={radioGroupStyle}>
            <input
              type="checkbox"
              id="allApprovers"
              name="approval"
              checked={approvalType}
              onChange={() => setApprovalType(!approvalType)}
              className="mr-2"
            />
            <label htmlFor="allApprovers">All the approvers can approve</label>
          </div>
        </div>
        <div className={cardStyle}>
          <div className="font-semibold mb-2">Configure multi-level approval with specific approvers</div>
          {approvers.map((approver) => (
            <div key={approver.id} className="flex items-center mb-2">
            <PiDotsSixVerticalBold className="mr-2 text-2xl text-gray-500" /> {/* Added className for spacing */}
            <label className="flex-grow">
              Level {approver.level} Approver:
              <input
                type="text"
                value={approverNames[approver.id]}
                onChange={(e) => handleNameChange(approver.id, e.target.value)}
                className={inputStyle}
                list={`email-suggestions-${approver.id}`}
              />
              <datalist id={`email-suggestions-${approver.id}`}>
                {emailSuggestions.map((email) => (
                  <option key={email.id} value={email.email} />
                ))}
              </datalist>
            </label>
            <span className={removeIconStyle} onClick={() => removeLevel(approver.id)}>
              <MdCancel />
            </span>
          </div>

          ))}
          <button className={addButtonStyle} onClick={addNewLevel}>
            Add New Level
          </button>
          <button className={saveButtonStyle} onClick={saveSettings}>
          Save
        </button>
        </div>

      </div>
    </div>
  );
};

export default ReimbrusmentApprovalSettings;
 