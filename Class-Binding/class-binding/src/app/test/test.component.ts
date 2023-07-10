import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
  .test{
    color:red
  }
  `]
})
export class TestComponent {
name = "Justin";
blue = "blue";
greeting = "";
onClick(){
  console.log("this has been clicked");
  this.greeting = "This is Event Binding"
}
}
