import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-poc';

  constructor() {

    console.log('>>>>>>>>>>>' + sessionStorage.getItem('togetherjs-session.status'));
  }
}
