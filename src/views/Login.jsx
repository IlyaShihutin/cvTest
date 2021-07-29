import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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
    padding: '80px',
  },
  input_block: {
    display: 'flex',
    flexDirection: 'column',
  },
  input_item: {
    width: '360px',
    height: '80px',
  },
  button: {
    width: '360px',
    marginBottom: '20px',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    position: 'absolute',
    top: 0,
    fontSize: '30px',
    margin: '0',
    marginTop: '10px',
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState({
    password: '',
    passwordStatus: false,
    login: '',
    loginStatus: false,
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    const userStr = JSON.parse(localStorage.getItem('user'));
    userStr &&
      setUser({
        password: userStr.password,
        login: userStr.login,
      });
  }, []);

  useEffect(() => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setUser({
      ...user,
      loginStatus:
        user.login.length > 0 && re.test(String(user.login).toLowerCase()),
      passwordStatus: user.password.length > 0 && user.password.length > 8,
    });
  }, [user.login, user.password]);

  const handleChangeText = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    error && setError(false);
  };

  const login = () => {
    if (user.password.length !== 0 && user.login !== 0) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      setError(true);
    }
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <p className={classes.title}>Login In</p>
      <form className={classes.input_block} noValidate autoComplete="off">
        <TextField
          error={!user.loginStatus && user.login.length}
          name="login"
          label="Login/Email"
          className={classes.input_item}
          value={user.login}
          color="primary"
          onChange={handleChangeText}
          helperText={
            !user.loginStatus && user.login.length ? 'Incorrect entry.' : ''
          }
          type="email"
        />
        <TextField
          error={!user.passwordStatus && user.password.length}
          name="password"
          label="Password"
          value={user.password}
          className={classes.input_item}
          onChange={handleChangeText}
          color="primary"
          helperText={
            !user.passwordStatus && user.password.length
              ? 'Password < 8 words'
              : ''
          }
          type="password"
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => login()}
          component={Link}
          to={'/'}
          disabled={!user.passwordStatus || !user.loginStatus}
        >
          Log In
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          color="secondary"
        >
          Google
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
