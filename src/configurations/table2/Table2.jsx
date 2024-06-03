
import Tablecomp from './Tablecomp2';
import PropTypes from 'prop-types';

function Table2({ config, data, onReviewClick }) {
  return (
    <div>
      <Tablecomp config={config} data={data} onReviewClick={onReviewClick} />
    </div>
  );
}

Table2.propTypes = {
  config: PropTypes.array.isRequired, // Assuming config is an array
  data: PropTypes.array.isRequired, // Assuming data is an array
  onReviewClick: PropTypes.func.isRequired,
};
export default Table2;

