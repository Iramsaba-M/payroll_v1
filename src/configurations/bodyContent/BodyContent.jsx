import PropTypes from 'prop-types';

const BodyContent = ({ content: NewComponent }) => {

  return (
    <>
      <div className='p-4 pt-16 flex'>
        <NewComponent />
      </div>
    </>
  )
}
BodyContent.propTypes = {
  content: PropTypes.elementType.isRequired // Assuming content is a component
};

export default BodyContent