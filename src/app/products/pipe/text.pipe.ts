import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(text:string): string {
    return `${text.split(" ").slice(0,3).join(" ")}`;
  }

}
