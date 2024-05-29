
import CardConfig from './CardConfig';

const Card = ({ Configs, data }) => {
  return (
    <div>
      <CardConfig Config={Configs} data={data} />
    </div>
  );
};

export default Card;
