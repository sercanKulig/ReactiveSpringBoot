import {ActionReducerMap} from '@ngrx/store';

import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromArticleStore from '../article/store/article.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import * as fromSessionStore from '../auth/store/sessionStore.reducers';

export interface AppState {
  auth: fromAuth.State,
  shoppingList: fromShoppingList.State,
  sessionState: fromSessionStore.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  shoppingList: fromShoppingList.shoppingListReducer,
  sessionState: fromSessionStore.sessionStoreReducer
};
