import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'jsonComparision';
  comparisonResult: boolean = false;
  comparisondata: any;
  receiveData(event: any) {
    this.comparisondata = event;
    this.comparisonResult = true;
  }
}
