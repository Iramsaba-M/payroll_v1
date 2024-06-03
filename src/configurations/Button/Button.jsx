// Button.js
import ButtonConfig from './ButtonConfig';
import PropTypes from 'prop-types';

const Button = ({ Configs, onClick, activeButton }) => {
  return (
    <div>
      <ButtonConfig Config={Configs} onClick={onClick} activeButton={activeButton} />
    </div>
  );
};

Button.propTypes = {
  Configs: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  activeButton: PropTypes.string
};

export default Button;
