import { Injectable } from '@angular/core';
import {Programation} from './../../class/programation';
import GradeCanais from './../../service/json/grade-canais.json';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  constructor() { }

  getProgramation(): Programation[] {
    return GradeCanais;
  }
}
