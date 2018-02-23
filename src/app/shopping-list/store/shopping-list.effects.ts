import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as ShoppingListActions from './shopping-list.actions';
import {HttpClient} from '@angular/common/http';
import {Ingredient} from '../../shared/ingredient.model';


@Injectable()
export class ShoppingListEffects {

  constructor(private actions$: Actions,
              private httpClient: HttpClient) {
  }

  @Effect()
  getShoppingList = this.actions$
    .ofType(ShoppingListActions.GET_INGREDIENTS)
    .switchMap((action: ShoppingListActions.GetIngredients) => {
      return this.httpClient.get('http://localhost:9119/api/staffs', {
        responseType: 'json'
      });
    })
    .mergeMap((ingredients: Ingredient[]) => {
      return [
        {
          type: ShoppingListActions.GET_INGREDIENTS,
        },
        {
          type: ShoppingListActions.ADD_INGREDIENTS,
          payload: ingredients
        }
      ];
    });
}
