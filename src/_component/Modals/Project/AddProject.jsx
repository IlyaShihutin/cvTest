import React, { useState } from 'react';
import './style/index.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: ' translate(-50%, -50%)',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
  },
  input_block: {
    display: 'flex',
    flexDirection: 'column',
  },
  input_item: {
    width: '360px',
    marginBottom: '20px',
  },
  button: {
    width: '360px',
    marginBottom: '20px',
    backgroundColor: theme.palette.secondary.main,
  },
  imgContainer: {},
  image: {},
}));

const AddProject = ({ handleClose }) => {
  const classes = useStyles();
  const [project, setProject] = useState({
    name: '',
    tech: '',
  });

  const add = () => {
    handleClose();
  };

  const handleChangeText = (event) => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };
  
  return (
    <div className="add_modal_wrapper">
      <p className="title">Create Project</p>
      <form className={classes.input_block} noValidate autoComplete="off">
        <TextField
          name="name"
          label="Name Project"
          className={classes.input_item}
          value={project.name}
          onChange={handleChangeText}
        />
        <TextField
          name="projects"
          label="tech name"
          value={project.tech}
          className={classes.input_item}
          onChange={handleChangeText}
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          disabled={project.name.length < 1}
          className={classes.button}
          onClick={() => add()}
        >
          Create
        </Button>
      </form>
    </div>
  );
};

export default AddProject;
