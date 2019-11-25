import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: any): any {


    if (!value) {
      return null;
    } else {
      let words = value.split(" ");

      for (var i = 0; i < words.length; i++) {
        if (this.isPreposition(words[i]) && i != 0) {
          words[i] = words[i].toLowerCase();
        } else {
          words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
        }
      }

      return words.join(" ");
    };

  }

  private isPreposition(word: string) {
    let preposition = ['a', 'of', 'the', 'an', 'and', 'is', 'are'];
    if (preposition.includes(word.toLowerCase())) {
      return true;
    } else {
      return false;
    }


  }

}
