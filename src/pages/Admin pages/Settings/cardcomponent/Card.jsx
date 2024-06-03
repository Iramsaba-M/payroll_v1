
import CardConfig from './CardConfig';
import PropTypes from 'prop-types';

const Card = ({ Configs, data }) => {
  return (
    <div>
      {/* Other components or content */}
      <CardConfig Config={Configs} data={data} />
    </div>
  );
};

export default Card;

Card.propTypes = {
  Configs: PropTypes.array.isRequired, // Validate Configs prop as an array
  data: PropTypes.array.isRequired, // Validate data prop as an array
};

