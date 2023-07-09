import { Component } from '@angular/core';

@Component({
//App test is the label that will be used in the "app.component.html" to refer to this component
  selector: 'app-test',
//The templateUrl is the file that will be displayed when the selector is called in "app.component.html"
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
//Variables and functions can be created here to be used for interpolation in the html of this component
  public name = "Justin";
  greetUser(){
    return "Hello " + this.name;
  }

  sayWords(){
    return "I'm just saying words";
  }
}
