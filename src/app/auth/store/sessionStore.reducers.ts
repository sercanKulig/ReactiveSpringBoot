import * as SessionStoreAction from './sessionStore.actions';

export interface State {
  token: string;
  loggedIn: boolean;
}

const initialState: State = {
  token: null,
  loggedIn : false
};

export function sessionStoreReducer(state = initialState, action: SessionStoreAction.SessionStoreActions) {
  switch (action.type) {
    case (SessionStoreAction.STORE_USER_INFO):
      return {
        ...state,
        token: action.payload.token,
        loggedIn : true
      };
    case ( SessionStoreAction.REMOVE_USER_INFO):
      return {
        ...state,
        token: null,
        loggedIn: false
      };
    case (SessionStoreAction.GET_USER_INFO):
      return {
        ...state
      };
    case (SessionStoreAction.IS_LOGGED_IN):
      return {
        ...state
      };
    default:
      return state;
  }
}
