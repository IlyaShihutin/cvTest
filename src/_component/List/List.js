import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import './style/index.scss';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: 50,
    height: 50,
    cursor: 'pointer',
  },
}));

const ListContent = ({ arrList,src }) => {
  const classes = useStyles();
  return (
    <div className="list_wrapper">
      {arrList?.map((elem) => (
        <Link className="list_item" to={'/'+src} key={elem.id}>
          <div className="name">{elem.name}</div>
          <div className="btn_block">
            <IconButton aria-label="delete" color="delete">
            <FolderIcon className={classes.icon} />
            </IconButton>
            <IconButton aria-label="delete" color="secondary">
            <DeleteIcon className={classes.icon} />
            </IconButton>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default ListContent;
