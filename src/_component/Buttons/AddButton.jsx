import React from 'react';
import './style/index.scss';
import AddIcon from '@material-ui/icons/Add';

const AddButton = ({ handleClick }) => {
  return (
    <div className="add_btn" onClick={() => handleClick('add')}>
      <AddIcon className="add_btn_icon" />
    </div>
  );
};

export default AddButton;
