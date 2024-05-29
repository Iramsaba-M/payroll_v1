
const BodyContent = ({ content: NewComponent }) => {

  return (
    <>
      <div className='p-4 pt-16 flex'>
        <NewComponent />
      </div>
    </>

  )

}

export default BodyContent