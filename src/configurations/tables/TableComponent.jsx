
import DynamicTable from './DynamicTable';
import PropTypes from 'prop-types';

function TableComponent({ config, data }) {
  return (
    <div >

      <DynamicTable config={config} data={data} />
    </div>
  );
}

TableComponent.propTypes = {
  config: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableComponent; 