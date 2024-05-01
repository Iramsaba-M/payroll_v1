import React from 'react'
import {useButtonState}  from "../../../context/ButtonStateContext"
import {  Admin, Personal } from "../../Admin pages/Home/HomeContent"
import Button from '../../../configurations/Button/Button';

const UserHomeComponent = () => {
  const { handleAdminClick, handlePersonalClick } = useButtonState();

  return (
    <div>
        <div className='flex ml-[140vh] mt-2'>
          <Button onClick={handleAdminClick} Configs={Admin} />
          <Button onClick={handlePersonalClick} Configs={Personal} />
        </div>

        <div>
          User Home Component
        </div>
    </div>
  )
}
export default UserHomeComponent