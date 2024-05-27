import React from 'react'
import {useButtonState}  from "../../../context/ButtonStateContext"
import {  Admin, Personal } from "../../Admin pages/Home/HomeContent"
import Button from '../../../configurations/Button/Button';

const UserHomeComponent = () => {
  const {isAdmin, isPersonal, handleAdminClick, handlePersonalClick } = useButtonState();

  return (
    <div>
        <div className='flex ml-[140vh] mt-2'>
          <Button onClick={handleAdminClick} Configs={Admin} activeButton={isAdmin ? 'Admin' : ''} />
          <Button onClick={handlePersonalClick} Configs={Personal} activeButton={isPersonal ? 'Personal' : ''}/>
        </div>

        <div>
          User Home Component
        </div>
    </div>
  )
}
export default UserHomeComponent