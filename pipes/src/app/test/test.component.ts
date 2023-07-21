import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: 
  /*Here the lowercase, uppercase, and titlecase pipes are used for the capitalization of words in strings.
  Using slice followed by a number indicates which index of the string is going to be shown. The second number
  in slice is used to define the end point for which parts of the indexes in the string are going to be shown.
  For example, slice:2:5 is going to show from the second index to the fifth index in a string */
  `
  <h2>
    {{name}}
  </h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{name | slice:4}}</h2>
  <h2>{{name | slice:2:5}}</h2>
  <h2>{{person | json}}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
public name = "Justin";
public message = "Welcome Justin";
public person = {
  "firstName": "John",
  "lastName" : "Doe",
}
}
