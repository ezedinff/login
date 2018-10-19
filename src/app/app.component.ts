import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login';
  sendToken() {
    location.assign('http://localhost:3000?token=ffdfdfdfd');
  }
}
