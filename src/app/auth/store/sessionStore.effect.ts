import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import * as SessionStoreAction from "./sessionStore.actions";

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
}
