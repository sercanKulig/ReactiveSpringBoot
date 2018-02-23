import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {fromPromise} from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';

import * as AuthActions from './auth.actions';
import * as SessionStoreAction from './sessionStore.actions';
import {HttpClient} from '@angular/common/http';
import {UserDTO} from '../../shared/userDTO.model';
import * as fromSessionState from './sessionStore.reducers';
import {Store} from '@ngrx/store';

export interface LoginRequestParam {
  username: string;
  password: string;
}

@Injectable()
export class AuthEffects {

  public static url = 'http://localhost:9091/';

  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.TRY_SIGNUP)
    .map((action: AuthActions.TrySignup) => {
      return action.payload;
    })
    .switchMap((authData: { username: string, password: string }) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      return [
        {
          type: AuthActions.SIGNUP
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    });

  @Effect()
  authSignin = this.actions$
    .ofType(AuthActions.TRY_SIGNIN)
    .switchMap((action: AuthActions.TrySignup) => {
      const bodyData: LoginRequestParam = {
        'username': action.payload.username,
        'password': action.payload.password
      };
      return this.httpClient.post(AuthEffects.url + 'session',
        JSON.stringify(bodyData),
        {
          observe: 'body',
          responseType: 'json'
        });
    }).mergeMap((user: UserDTO) => {
      if (user.responseMessageStatus === 'SUCCESS') {
        this.router.navigate(['/']);
        this.store.dispatch(new SessionStoreAction.StoreUserInfo({
          currentUserKey: 'currentUser',
          userInfoString: JSON.stringify(user.item),
          token: user.item.token
        }));
        return [
          {
            type: AuthActions.SIGNIN
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: user.item
          }
        ];
      } else {
        //todo error message popup with user.operationMessage
      }
    });

  @Effect({dispatch: false})
  authLogout = this.actions$
    .ofType(AuthActions.LOGOUT)
    .do(() => {
      this.router.navigate(['/']);
      this.store.dispatch(new SessionStoreAction.RemoveUserInfo('currentUser'));
    });

  constructor(private actions$: Actions,
              private router: Router,
              private httpClient: HttpClient,
              private store: Store<fromSessionState.State>) {
  }
}
