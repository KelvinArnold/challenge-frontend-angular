// Services
import { ChannelsService } from "./../../service/channels/channels.service";
import { Component, OnInit } from '@angular/core';
import {Programation} from './../../class/programation';
import {CELL_HOUR, START_TIME, getMinutesDiference} from './../../service/utils';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  hours: any[];
  programation: Programation[];
  channels: any[];
  constructor(
    private service: ChannelsService
  ) { }

  ngOnInit() {
    this.hours = CELL_HOUR;
    this.getProgramation();
  }

  getProgramation() {
    const store = this.service.getProgramation();
    const channels = store.map(item => item.id_canal);
    const uniques = [];
    channels.forEach(item => {
      if (!uniques.includes(item)) {
        uniques.push(item);
      }
    });
    this.channels = uniques;
    this.programation = store;
  }

  getShowPosition(_show) {
    const height = getMinutesDiference(
      new Date(_show.dh_inicio),
      new Date(_show.dh_fim));
    const top = getMinutesDiference(
      new Date(START_TIME),
      new Date(_show.dh_inicio)) + 20;
    return {
      top,
      height
    }
  }
}
