import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
// сделал 2 варианта. 1 через regex

  transform(value: string): string {
    if (/^\d{12}$/.test(value)) {
      return value.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
    }
    return value;
  }

  // transform(value: string): string {
  //   const countryCode = '+375';
  //   const operatorCode = value.slice(3, 5);
  //   const part1 = value.slice(5, 8);
  //   const part2 = value.slice(8, 10);
  //   const part3 = value.slice(10, 12);
  //
  //   return `${countryCode} (${operatorCode}) ${part1}-${part2}-${part3}`;
  // }

}
