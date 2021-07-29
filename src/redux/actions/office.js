import { burgerConstants } from '../constant/burger';
import { burgerService } from '../services/burger';

export const officeActions = {
  getOffice,
};

function getOffice(id) {
  return (dispatch) => {
    dispatch(request());

    officeService.getOffice(id).then(
      (office) => {
        dispatch(success(office));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: officeConstants.OFFICE_REQUEST };
  }
  function success(office) {
    return { type: officeConstants.OFFICE_SUCCESS, office };
  }
  function failure(error) {
    return { type: officeConstants.OFFICE_FAILURE, error };
  }
}
