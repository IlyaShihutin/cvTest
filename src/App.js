import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../src/_component/PrivateRoute';
import Login from '../src/views/Login';
import Header from './_component/Header/Header';
import Home from '../src/views/Home';
import BurgerList from './_component/Header/Burger/BurgerList';
import CvPage from './views/CvPage';
import Mediators from './views/Mediators';
import TasksPage from './views/TasksPage';
import ProjectsPage from './views/ProjectsPage';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import './App.css';
import ProfilePage from './views/ProfilePage';
const theme = createTheme({
  palette: {
    secondary: {
      main: '#df2745',
    },
    primary: {
      main: '#171f46',
    },
  },
});
function App() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(true);
  const handleMenuClose = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
  };
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route
          exact
          path="/login"
          component={(routeProps) => <Login {...routeProps} />}
        />
        <Fragment>
          <Header
            isMenuOpen={isOpenBurgerMenu}
            handleMenuClose={handleMenuClose}
          />
          <BurgerList isMenuOpen={isOpenBurgerMenu} />
          <div
            className={
              isOpenBurgerMenu
                ? 'main_wrapper open_burger_menu'
                : 'main_wrapper'
            }
          >
            <PrivateRoute
              exact
              path="/"
              component={(routeProps) => <Home {...routeProps} />}
            />
            <PrivateRoute
              exact
              path="/cv:id"
              component={(routeProps) => <CvPage {...routeProps} />}
            />
            <PrivateRoute
              exact
              path="/mediators"
              component={(routeProps) => <Mediators {...routeProps} />}
            />
            <PrivateRoute
              exact
              path="/tasks"
              component={(routeProps) => <TasksPage {...routeProps} />}
            />
            <PrivateRoute
              exact
              path="/projects"
              component={(routeProps) => <ProjectsPage {...routeProps} />}
            />
            <PrivateRoute
              exact
              path="/profile:id"
              component={(routeProps) => <ProfilePage {...routeProps} />}
            />
          </div>
        </Fragment>
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
