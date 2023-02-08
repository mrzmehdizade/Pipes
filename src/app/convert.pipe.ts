import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(mile: number, targetUnit:string): any {
  if(!mile){
    return ;
  }
    switch (targetUnit){
      case'm':
      return mile*1.6*1000;
      case 'cm':
      return mile*1.6*1000*1000
    }
  }

}
