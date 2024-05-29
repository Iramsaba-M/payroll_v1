// Button.js
import ButtonConfig from './ButtonConfig';

const Button = ({ Configs, onClick, activeButton }) => {
  return (
    <div>
      <ButtonConfig Config={Configs} onClick={onClick} activeButton={activeButton}/>
    </div>
  );
};

export default Button;
