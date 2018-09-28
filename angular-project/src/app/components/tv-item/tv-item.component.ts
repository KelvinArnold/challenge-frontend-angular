import { Component, OnInit, Input } from '@angular/core';
import {Channel} from './../../class/channel';

@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.scss']
})
export class TvItemComponent implements OnInit {
  @Input() channel: Channel;
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
