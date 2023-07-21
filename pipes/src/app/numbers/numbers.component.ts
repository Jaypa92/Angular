import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  template: 
  /*By adding the number pipe we setting some rules. in the first example, 1 means that there has to be at least
  one whole number on the left side of the decimal. 2-3 means that there has to be a minimum of 2 numbers after
   the decimal but there can only be a max of 3 */ 
  `
  <h2>{{5.678 | number:'1.2-3' }}</h2>
  <h2>{{5.678 | number:'3.4-5' }}</h2>
  <h2>{{5.678 | number:'3.1-2' }}</h2>
  <h2>{{0.25 | percent}}</h2>
  <h2>{{0.25 | currency}}</h2>
  <h2>{{0.25 | currency:'GBP' : 'code'}}</h2>
  <h2>{{0.25 | currency:'euro' : 'code'}}</h2>
  <h2>{{date | date: 'short'}}</h2>
  <h2>{{date | date: 'shortDate'}}</h2>
  <h2>{{date | date: 'shortTime'}}</h2>
  `,
/*After creating the date property, while using it in the template, we can get the date by interpolation. We can
get the short version of the date and time just by adding the short pipe. Tp get the short date shortDate should
be used. medium and long can be used as well/ Ex: mediumDate, longTime */
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent {
public date = new Date();
}
