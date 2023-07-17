import { Component, EventEmitter, Input, Output } from '@angular/core';
//Input, Output and EventEmitter have been imported 
@Component({
  selector: 'app-test',
  template:
  //Interpolation is used to bring in the data from that parent
  //A click event with the event "fireEvent" is used to transfer data to the button on a button click
  `
  <h2>
    {{"Hello " + parentData}}
  </h2>
  <button (click) = "fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
//Input and Outout are both imported to take in and send out data to the parent
@Input() public parentData:any;
//An instance of EventEmitter which was also imported is used to help the tranfer of data to the parent
@Output() public childEvent = new EventEmitter();
/*After the instance of the EventEmitter is made, the fireEvent function is used to transfer data to 
the parent using the instance of the EventEmitter*/
fireEvent(){
  this.childEvent.emit("Hey Justin");
}
}
