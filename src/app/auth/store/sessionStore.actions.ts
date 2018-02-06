import {Action} from "@ngrx/store";

export const STORE_USER_INFO = 'STORE_USER_INFO';
export const REMOVE_USER_INFO = 'REMOVE_USER_INFO';
export const GET_USER_INFO = 'GET_USER_INFO';
export const IS_LOGGED_IN = 'IS_LOGGED_IN';

export class StoreUserInfo implements Action {
  readonly type = STORE_USER_INFO;

  constructor(public payload: {currentUserKey: string, userInfoString: string, token: string}) {}
}

export class RemoveUserInfo implements Action {
  readonly type = REMOVE_USER_INFO;

  constructor(public payload: string) {}
}

export class IsLoggedIn implements Action {
  readonly type = IS_LOGGED_IN;
}

export class GetUserInfo implements Action {
  readonly type = GET_USER_INFO;

  constructor(public payload: string) {}
}

export type SessionStoreActions = StoreUserInfo |
  RemoveUserInfo |
  IsLoggedIn |
  GetUserInfo;
