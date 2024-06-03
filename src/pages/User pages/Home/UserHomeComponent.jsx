
import { useButtonState } from "../../../context/ButtonStateContext"
import { Admin, Personal } from "../../Admin pages/Home/HomeContent"
import Button from '../../../configurations/Button/Button';

const UserHomeComponent = () => {
  const { isAdmin, isPersonal, handleAdminClick, handlePersonalClick } = useButtonState();

  return (
    <div className='mt-10 ml-12'>
      <div className='flex ml-[120vh] -translate-y-7'>
        <Button onClick={handleAdminClick} Configs={Admin} activeButton={isAdmin ? 'Admin' : ''} />
        <Button onClick={handlePersonalClick} Configs={Personal} activeButton={isPersonal ? 'Personal' : ''} />
      </div>

      <div>
        User Home Component
      </div>
    </div>
  )
}
export default UserHomeComponent