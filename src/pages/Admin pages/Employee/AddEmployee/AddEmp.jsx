
import BodyContent from '../../../../configurations/bodyContent/BodyContent';
import AddEmployee from './AddEmployee';

const AddEmp = (editmode, handleToggleEditMode) => {

  return (
    <div>
      <BodyContent content={<AddEmployee editmode={editmode} handleToggleEditMode={handleToggleEditMode} />} />
    </div>
  );
};

export default AddEmp;
