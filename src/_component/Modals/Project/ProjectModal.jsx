import React from 'react';
import './style/index.scss';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import AddProject from './AddProject';
import EditProject from './EditProject';
const useStyles = makeStyles((theme) => ({}));

const ProjectModal = ({ typeOpenModal, idProjectOpenModal, handleOpenModal }) => {
  const classes = useStyles();

  const handleClose = () => {
    handleOpenModal('close', null);
  };
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="modal_wrapper">
        {typeOpenModal === 'add' && <AddProject handleClose={handleClose} />}
        {typeOpenModal === 'edit' && <EditProject handleClose={handleClose}/>}
      </div>
    </Modal>
  );
};

export default ProjectModal;
