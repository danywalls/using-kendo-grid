import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positiontranslate'
})
export class PositionTranslatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case "G":
        return "Guard";
      case "F":
        return "Forward";
      case "C":
        return "Center";
      case "PF":
        return "Point Guard";
      case "SF":
        return "Shooting Guard";
      case "SG":
        return "Small Forward";
      case "PG":
        return "Power Forward";
      default:
        break;
    }
  }

}
