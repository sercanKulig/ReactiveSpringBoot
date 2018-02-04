import * as AuthActions from './auth.actions';
import {User} from "../../shared/userDTO.model";

export interface State {
  user: User;
  authenticated: boolean;
}

const initialState: State = {
  user: null,
  authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        user: null,
        authenticated: false
      };
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
