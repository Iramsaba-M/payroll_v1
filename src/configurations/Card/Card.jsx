
import CardConfig from './CardConfig';
import PropTypes from 'prop-types';

const Card = ({ Configs, data }) => {
  return (
    <div>
      <CardConfig Config={Configs} data={data} />
    </div>
  );
};

Card.propTypes = {
  Configs: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
export default Card;
