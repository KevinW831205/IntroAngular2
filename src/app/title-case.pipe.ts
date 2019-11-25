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
          words[i] = this.toTitleCase(words[i]);
        }
      }

      return words.join(" ");
    };

  }

  private isPreposition(word: string) {
    let preposition = ['a', 'of', 'the', 'an', 'and', 'is', 'are'];
    return preposition.includes(word.toLowerCase())
  }

  private toTitleCase(word: string){
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

}
