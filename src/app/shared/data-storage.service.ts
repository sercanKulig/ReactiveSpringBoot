import {Injectable} from '@angular/core';
import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    /*    return this.httpClient.put('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
          {
            observe: 'body',
            headers: new HttpHeaders()
              .set('Authorization', 'Bearer token')
              .append('Authorization2','Bearer token 2'),
            params: new HttpParams().set('auth', token)
          });*/
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', this.recipeService.getRecipes()
      , {reportProgress: true, params: new HttpParams().set('auth', token)});
    //report progress return loaded and total, between this two determinate time of the progress of request
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json',
      {
        // observe: 'response',
        observe: 'body',
        responseType: 'json',
        params: new HttpParams().set('auth', token)
      })
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
