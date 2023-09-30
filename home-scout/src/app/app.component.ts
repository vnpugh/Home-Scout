import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

//decoratoer
@Component({

  //these are all properties
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.png" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
})
export class AppComponent {
  title = 'home-scout';
}
