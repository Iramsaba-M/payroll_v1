
import { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types';

const ButtonStateContext = createContext();

export const useButtonState = () => useContext(ButtonStateContext);

export const ButtonStateProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isPersonal, setIsPersonal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [AddMode, setAddMode] = useState(false);

  const handleAdminClick = () => {
    setIsAdmin(true);
    setIsPersonal(false);
  };

  const handlePersonalClick = () => {
    setIsAdmin(false);
    setIsPersonal(true);
  };

  const AddEmployeeclick = () => {
    setAddMode(true);
    setEditMode(false);
    console.log("Add mode is on");
    console.log("Edit mode is off");
  };

  const EditModeclick = () => {
    setEditMode(true);
    setAddMode(false);
    console.log("Add mode is off");
    console.log("Edit mode is on");
  };

  return (
    <ButtonStateContext.Provider
      value={{
        isAdmin,
        isPersonal,
        handleAdminClick,
        handlePersonalClick,
        AddEmployeeclick,
        EditModeclick,
        AddMode,
        editMode
      }}
    >
      {children}
    </ButtonStateContext.Provider>
  );
};

ButtonStateProvider.propTypes = {
  children: PropTypes.node.isRequired
};