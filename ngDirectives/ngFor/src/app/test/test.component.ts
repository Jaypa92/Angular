import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template:
  /*A div holds the ngFor directive which is used to iterate through a list and in this case, list those items 
  out */
  `
  <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o">
  <h2>{{o}} {{f}} {{l}} {{i}} {{color}}</h2>
  </div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
public colors = ["red", "blue", "green", "yellow"];
}
