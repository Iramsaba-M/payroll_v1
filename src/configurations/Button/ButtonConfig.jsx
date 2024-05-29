
import ButtonStyles from './ButtonStyles';

const Button = ({ label, icon, style, type, onClick, buttonStyle, Editmode, active }) => {
  return (
    <button  className={`${ButtonStyles[style]} ${buttonStyle} ${active ? ButtonStyles.activeButton : ''}`} onClick={() => onClick(label, type)} editmode={Editmode}>
      {icon && typeof icon === 'object' ? (
        <span className={`${ButtonStyles.iconStyle} mr-2`}>{icon}</span>
      ) : (
        icon && <span className={`${ButtonStyles.iconStyle} mr-2`}>{icon}</span>
      )}
      {label}
    </button>
  );
};

const ButtonConfig = ({ Config, onClick, buttonStyle, activeButton  }) => {
  return (
    <div className="flex">
      {Config.map((button, index) => (
        <Button key={index} {...button} onClick={onClick} buttonStyle={buttonStyle} active={activeButton === button.label} />
      ))}
    </div>
  );
};

export default ButtonConfig;
