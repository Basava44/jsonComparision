import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparision-result',
  templateUrl: './comparision-result.component.html',
  styleUrls: ['./comparision-result.component.scss'],
})
export class ComparisionResultComponent implements OnInit {
  @Input() comparisondata: any;

  firstJsonData: any;
  secondJsonData: any;
  jsonDataResults: Array<any> = [];

  ngOnInit(): void {
    this.firstJsonData = this.comparisondata.firstJsonData;
    this.secondJsonData = this.comparisondata.secondJsonData;
    this.formatData();
  }

  formatData() {
    this.firstJsonData.length > this.secondJsonData.length
      ? this.firstJsonData.map((item: any, index: any) => {
          const firstItem = this.firstJsonData[index]
            ? this.firstJsonData[index]
            : '';
          const secondItem = this.secondJsonData[index]
            ? this.secondJsonData[index]
            : '';
          this.jsonDataResults.push({
            firstJsonDataline: firstItem,
            secondJsonDataline: secondItem,
            isEqual: firstItem === secondItem,
          });
        })
      : this.secondJsonData.map((item: any, index: any) => {
          const firstItem = this.firstJsonData[index]
            ? this.firstJsonData[index]
            : '';
          const secondItem = this.secondJsonData[index]
            ? this.secondJsonData[index]
            : '';
          this.jsonDataResults.push({
            firstJsonDataline: firstItem,
            secondJsonDataline: secondItem,
            isEqual: firstItem === secondItem,
          });
        });

    console.log(this.jsonDataResults);
  }
}
