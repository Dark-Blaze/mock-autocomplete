import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {
  transform(text: string, search): string {
    if (typeof text !== 'object' || !Array.isArray(text)) {
      return text.replace(new RegExp('(' + search + ')', 'gi'), '<span class="highlight">$1</span>');
    }
  }
}

