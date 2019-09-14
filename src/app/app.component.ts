import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadfeature = "recipes";
  title = 'recipebook';
  getfeature(event) {
  this.loadfeature = event;
  }
}
