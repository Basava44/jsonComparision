import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss'],
})
export class JsonInputComponent {
  firstjsonData: string = '';
  secondjsonData: string = '';
  properJsondata: boolean = true;

  @Output() sendData: EventEmitter<any> = new EventEmitter();

  compareJson() {
    if (this.firstjsonData && this.secondjsonData) {
      this.formatJson(this.firstjsonData, 'first');
      this.formatJson(this.secondjsonData, 'second');

      this.properJsondata &&
        this.sendData.next({
          firstJsonData: this.firstjsonData.split('\n'),
          secondJsonData: this.secondjsonData.split('\n'),
        });
    } else {
      alert('Please Add Both JSON Data');
    }
  }

  formatJson(jsonData: any, whichjsondata: string) {
    try {
      const parsedData = JSON.parse(jsonData);
      whichjsondata === 'first'
        ? (this.firstjsonData = JSON.stringify(parsedData, null, 2))
        : (this.secondjsonData = JSON.stringify(parsedData, null, 2));
    } catch (error) {
      whichjsondata === 'first'
        ? (this.firstjsonData = 'Invalid JSON')
        : (this.secondjsonData = 'Invalid JSON');
      alert('Please Enter Proper Json Data in both the fields');
      this.properJsondata = false;
    }
  }
}
