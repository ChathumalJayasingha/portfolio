import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  constructor() {
  }

  goToHome() {
    alert("Hi there");
  }
}
export class SidenavAutosizeExample {
  showFiller = false;
}

