import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import User from './User';
import Settings from './Settings';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './style/index.scss';
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

export default function Header({ isMenuOpen, handleMenuClose }) {
  const classes = useStyles();

  const signOut = () => {
    localStorage.removeItem('user');
  };

  return (
    <div
      className={isMenuOpen ? 'header_block open_burger_menu' : 'header_block'}
    >
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <div className="header__item">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="#df2745"
              aria-label="open drawer"
              onClick={handleMenuClose}
            >
              <MenuIcon
                className={
                  isMenuOpen ? classes.burger_btn : classes.burger_btn_open
                }
              />
            </IconButton>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <User />
            <Settings />
            <Button
              className={classes.menuButton}
              onClick={signOut}
              component={Link}
              to={'/login'}
            >
              Sign Out
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
