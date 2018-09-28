import { Component, OnInit, Input } from '@angular/core';
import {Programation} from './../../class/programation';
import {CELL_TIME, getTime} from './../../service/utils';
import {Position} from './../../class/position';
@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  @Input() config: Programation;
  @Input() position: Position;
  @Input() id: number;
  cell_time: any;
  id_block: string;
  constructor() { }
  ngOnInit() {
    this.id_block = `show${this.id}`;
    this.cell_time = CELL_TIME;
  }

  getTime(time) {
    return getTime(time);
  }

  getTop() {
    return this.cell_time*((this.position.top)/10);
  }

  getHeight() {
    return this.cell_time*(this.position.height/10);
  }
}
