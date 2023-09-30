import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
`,
})
export class HomeComponent {

}
