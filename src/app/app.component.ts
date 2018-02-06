import {Component, OnInit} from "@angular/core";
import * as firebase from "firebase";
import * as SessionStoreAction from "./auth/store/sessionStore.actions";
import * as fromApp from "./store/app.reducers";
import {Store} from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBrkKleAX_8jHpPmTchVBmDD7Hkj8TT1VE",
      authDomain: "ng-recipe-book-3adbb.firebaseapp.com"
    });
    this.store.dispatch(new SessionStoreAction.IsLoggedIn());
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
