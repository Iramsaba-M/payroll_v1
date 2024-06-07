
import BoxConfig from './BoxConfig';
import PropTypes from 'prop-types';

const Box = ({ Configs, data ,}) => {

  return (
    <div >
      {/* Other components or content */}
      <BoxConfig Config={Configs} data={data} />
    </div>
  );
};

Box.propTypes = {
  Configs: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Box;
