import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skycliffapp1';
  isloading: boolean = true;

  public constructor(public _router:Router) {
    this.checkRouting(_router);
  }

  checkRouting(_router:Router){

    _router.events.subscribe(
      x => {
        if (x instanceof NavigationStart) {
          this.isloading = true;
        }
        if (
          x instanceof NavigationCancel ||
          x instanceof NavigationEnd ||
          x instanceof NavigationError
        ) {
          this.isloading = false;
        }
      }
    );
}
}
