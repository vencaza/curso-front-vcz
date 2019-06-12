import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {


  transform(value: number | string, args?: number|string): number |string  {
    let res: number|string;
    if (typeof(value) == 'number'){
      res = value *2;
      if(args && typeof(args)=='number'){
        res -= args;
      }
      return res;
    }
    else{
      res = value.repeat(2);
      if(args && typeof(args) == 'string'){
        let regExp = new RegExp(args, 'g');
        res = res.replace(regExp, '_');
      }
     
    }
    return res;
    
  }

}
