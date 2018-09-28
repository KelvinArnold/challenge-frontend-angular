import { Component, AfterViewInit, Input } from '@angular/core';
import {CELL_TIME} from './../../service/utils';

@Component({
  selector: 'app-tv-hours',
  templateUrl: './tv-hours.component.html',
  styleUrls: ['./tv-hours.component.scss']
})
export class TvHoursComponent implements AfterViewInit
{
  @Input() hours: number[];
  cell_time: CELL_TIME;

  constructor() { }
  
  ngAfterViewInit(): void {
    // console.log(this.list.nativeElement);
  }
}
