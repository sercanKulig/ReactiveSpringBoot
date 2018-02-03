import {Action} from "@ngrx/store";

export const  SINGUP = 'SINGUP';
export const  SINGIN = 'SINGIN';
export const  LOGOUT = 'LOGOUT';
export const  SET_TOKEN = 'SET_TOKEN';

export class Singup implements Action {
  readonly type = SINGUP;
}

export class Singin implements Action {
  readonly type = SINGIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export type AuthActions = Singin | Singup | Logout | SetToken;
