
import Tablecomp from './Tablecomp2';

function Table2({ config, data, onReviewClick }) {
  return (
    <div>
      <Tablecomp config={config} data={data} onReviewClick={onReviewClick} />
    </div>
  );
}

export default Table2;

