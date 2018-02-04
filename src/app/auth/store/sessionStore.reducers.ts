import * as SessionStoreAction from './sessionStore.actions';
import {User} from "../../shared/userDTO.model";

export interface State {
  user: User;
}

const initialState: State = {
  user: null
};

export function sessionStoreReducer(state = initialState, action: SessionStoreAction.SessionStoreActions) {
  switch (action.type) {
    case (SessionStoreAction.STORE_USER_INFO):
      return {
        ...state,
        user: action.payload.user
      };
    case ( SessionStoreAction.REMOVE_USER_INFO):
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
