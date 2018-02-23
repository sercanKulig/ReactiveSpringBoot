import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import {Observable} from 'rxjs/Observable';
import * as fromSession from '../auth/store/sessionStore.reducers';

@Injectable()
export class HeaderService {
  sessionState: Observable<fromSession.State>;
  constructor(private store: Store<fromApp.AppState>) {
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    let token = null;
    this.sessionState = this.store.select('sessionState');
    this.sessionState.subscribe(
      (response) => token = response.token
    );
    headers = headers.append('Content-Type', 'application/json');
    if (token !== null) {
      headers = headers.append('Authorization', token);
    }
    return headers;
  }
}
