import { userConstants } from '../constant/user';
import { userService } from '../services/user';
import { history } from '../../helpers/history';

export const userActions = {
    login,
    logout,
};

function login(token) {
    return dispatch => {
        dispatch(request({ token }));

        userService.login(token)
            .then(
                user => { 
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
