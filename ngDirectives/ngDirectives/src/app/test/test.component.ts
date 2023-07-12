import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template:
  //Here ng-template is used to name each of the elements
  /*In the div the ngIf directive is used to determine what will be displayed based on the condition of the
  result of "displayName"*/
  //Since "displayName" is set to false, the elseBlock is displayed
  `
  <div *ngIf="displayName ; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <h2>
        Hello
      </h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>
  `
  ,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
displayName = false;
}
