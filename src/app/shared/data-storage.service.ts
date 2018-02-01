import {Injectable} from '@angular/core';
import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {HttpClient, HttpRequest} from "@angular/common/http";

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipes() {

    /*    return this.httpClient.put('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
          {
            observe: 'body',
            headers: new HttpHeaders()
              .set('Authorization', 'Bearer token')
              .append('Authorization2','Bearer token 2'),
            params: new HttpParams().set('auth', token)
          });*/
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', this.recipeService.getRecipes()
      , {reportProgress: true});
    //report progress return loaded and total, between this two determinate time of the progress of request
    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json',
      {
        // observe: 'response',
        observe: 'body',
        responseType: 'json',
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
