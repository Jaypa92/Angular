import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';
//A property called "name" is declared in the parent component to be sent to the child component
  public name = "Justin";

//The property of message is declared in the parent component to be able to successfully receive from the child
  message = "";
}
