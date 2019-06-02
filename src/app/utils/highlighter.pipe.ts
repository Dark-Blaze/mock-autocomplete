import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {
  transform(text: string, search): string {
    if (typeof text !== 'object' || !Array.isArray(text)) {
      let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      pattern = pattern.split(' ').filter((t) => {
        return t.length > 0;
      }).join('|');
      const regex = new RegExp(pattern, 'gi');
      return search ? text.replace(regex, (match) => `<span class="highlight">${match}</span>`) : text;
    }
  }
}
