import {Action} from "@ngrx/store";
import {User} from "../../shared/userDTO.model";

export const STORE_USER_INFO = 'STORE_USER_INFO';
export const REMOVE_USER_INFO = 'REMOVE_USER_INFO';

export class StoreUserInfo implements Action {
  readonly type = STORE_USER_INFO;

  constructor(public payload: {currentUserKey: string, userInfoString: string, user: User}) {}
}

export class RemoveUserInfo implements Action {
  readonly type = REMOVE_USER_INFO;

  constructor(public payload: string) {}
}

export type SessionStoreActions = StoreUserInfo | RemoveUserInfo;
