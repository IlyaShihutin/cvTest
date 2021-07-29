import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 260,
    backgroundColor: theme.palette.background.main,
  },
  burger_list_item: {
    display: 'flex',
    alignItems: 'center',
    width: '150px',
    margin: 'auto',
    color: '#fff',
  },
  icon: {
    marginRight: 10,
  },
}));

const BurgerList = ({ isMenuOpen }) => {
  const classes = useStyles();
  const burgerList = useSelector((state) => state.burgerList.burger_list);

  function isHandleIcons(icon) {
    switch (icon) {
      case 'Mediators':
        return 'fab fa-medium';
      case 'CV':
        return 'fas fa-clipboard-list';
      case 'Projects':
        return 'fas fa-project-diagram';
      case 'Tasks':
        return 'fas fa-tasks';
      default:
        return 'fas fa-tasks';
    }
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div className="burger_menu_title_btn">
          <ListSubheader component="div" id="nested-list-subheader">
            Innowise
          </ListSubheader>
        </div>
      }
      classes={{ position: 'fixed', position: 'relative' }}
      className={isMenuOpen ? 'burger_menu open' : 'burger_menu'}
    >
      {burgerList.map((elem) => {
        return (
          <ListItem
            className={classes.burger_list_item}
            button
            component={Link}
            to={'' + elem.src}
          >
            <div className={classes.icon}>
              <i class={isHandleIcons(elem.icon)}></i>
            </div>
            {isMenuOpen && <ListItemText primary={elem.name} />}
          </ListItem>
        );
      })}
    </List>
  );
};
export default BurgerList;
