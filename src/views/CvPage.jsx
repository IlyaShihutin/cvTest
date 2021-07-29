import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterTech from '../_component/FilterTech/FilterTech';
import ListContent from '../_component/List/List';
import AddButton from '../_component/Buttons/AddButton';
import ProjectModal from '../_component/Modals/Project/ProjectModal';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
  },
}));
const projects = [
  {
    name: 'proj1',
    id: '1',
  },
  {
    name: 'proj2',
    id: '2',
  },
  {
    name: 'proj3',
    id: '3',
  },
  {
    name: 'proj4',
    id: '4',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
  {
    name: 'proj5',
    id: '5',
  },
];
const CvPage = (props) => {
  const classes = useStyles();
  const [projectModal, setProjectModal] = useState(['close', null]);
  const [typeOpenModal, idCvOpenModal] = projectModal;

  const handleOpenModal = (type, id) => {
    setProjectModal([type, id]);
  };

  return (
    <div className={classes.root}>
      <FilterTech />
      <ListContent
        arrList={projects}
        src={'projects'}
        handleOpenModal={handleOpenModal}
      />
      <AddButton handleClick={handleOpenModal} />
      {typeOpenModal !== 'close' && (
        <ProjectModal
          typeOpenModal={typeOpenModal}
          idCvOpenModal={idCvOpenModal}
          handleOpenModal={handleOpenModal}
        />
      )}
    </div>
  );
};

export default CvPage;
