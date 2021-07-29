import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    marginLeft: 260,
  },
  burger_close: {
    marginLeft: 60,
  },
  burger_open: {
    marginLeft: 260,
  },
  burger_btn_open: {
    transform: 'rotate(90deg)',
    transition: ' all 0.4s linear',
  },
  burger_btn: {
    transition: ' all 0.4s linear',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  sectionDesktop: {
    display: 'flex',
    alignItems: 'center',
    color: '#000',
  },
}));
const CV = [
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
];
const Mediators = (props) => {
  const classes = useStyles();
  return (
    <img
      style={{ width: ' 100%', height: '99%' }}
      src={`${process.env.PUBLIC_URL}/img/tech.png`}
    ></img>
  );
};

export default Mediators;
