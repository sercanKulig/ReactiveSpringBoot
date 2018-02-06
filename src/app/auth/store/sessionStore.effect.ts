import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/mergeMap";

import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import * as SessionStoreAction from "./sessionStore.actions";
import * as AuthActions from "./auth.actions";

@Injectable()
export class SessionStoreEffect {

  public storage: Storage = sessionStorage;


  constructor(private actions$: Actions) {
  }

  @Effect({dispatch: false})
  storeUserInfo = this.actions$
    .ofType(SessionStoreAction.STORE_USER_INFO)
    .do((action: SessionStoreAction.StoreUserInfo) => {
      this.storage.setItem(action.payload.currentUserKey, action.payload.userInfoString);
    });

  @Effect({dispatch: false})
  removeUserInfo = this.actions$
    .ofType(SessionStoreAction.REMOVE_USER_INFO)
    .do((action: SessionStoreAction.RemoveUserInfo) => {
      this.storage.removeItem(action.payload);
    });

  @Effect()
  getUserInfo = this.actions$
    .ofType(SessionStoreAction.GET_USER_INFO)
    .switchMap((action: SessionStoreAction.GetUserInfo) => {
      try {
        const userInfoString: string = this.storage.getItem("currentUser");
        if (userInfoString) {
          return JSON.parse(this.storage.getItem("currentUser"));
        } else {
          return null;
        }
      } catch (e) {
        return null;
      }
    });

  @Effect()
  isLoggedIn = this.actions$
    .ofType(SessionStoreAction.IS_LOGGED_IN)
    .switchMap((action: SessionStoreAction.IsLoggedIn) => {
      try {
        const user = this.storage.getItem("currentUser");
        if (user) {
          return [
            {
              type: AuthActions.SIGNIN
            },
            {
              type: AuthActions.SET_TOKEN,
              payload: JSON.parse(user)
            },
            {
              type: SessionStoreAction.STORE_USER_INFO,
              payload: JSON.parse(user)
            }
          ];
        } else {
          return [
            {
              type: AuthActions.LOGOUT
            }
          ];
        }
      } catch (e) {
        return null;
      }
    });
}
