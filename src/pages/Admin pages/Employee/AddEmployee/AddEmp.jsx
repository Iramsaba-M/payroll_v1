//clean code
import { useState } from 'react';
import BodyContent from '../../../../configurations/bodyContent/BodyContent';
import AddEmployee from './AddEmployee';

const AddEmp = () => {
  const [editmode, setEditMode] = useState(false); // State for edit mode

  const handleToggleEditMode = (checked) => {
    setEditMode(checked); // Update edit mode based on the toggle switch
  };

  return (
    <div>
      {/* Pass editMode and handleToggleEditMode as props to AddEmployee */}
      <BodyContent content={<AddEmployee editmode={editmode} handleToggleEditMode={handleToggleEditMode} />} />
    </div>
  );
};

export default AddEmp;
