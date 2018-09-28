import { Pipe, PipeTransform } from '@angular/core';
import {Programation} from './../class/programation';

@Pipe({
  name: 'programationByChannels'
})
export class ChannelsPipe implements PipeTransform {

  transform(items: Programation[], channel: any): Programation[] {
    return items.filter(item => item.id_canal == channel);
  }

}
