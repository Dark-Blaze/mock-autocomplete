import { Directive, ElementRef, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appScrollView]'
})
export class ScrollViewDirective implements AfterViewInit, OnChanges {

  @Input() rowHeight: number;
  @Input() totalRowElements: number;
  @Input() currentItem: number;
  @Input() maxHeight: number;

  constructor(private el: ElementRef) {
    el.nativeElement.style.overflowY = 'scroll';
  }

  isLastViewableItem(cur: number = 0): boolean {
    if (!cur || cur === 1) {
      return true;
    }
    if (this.maxHeight - (this.rowHeight * cur) < this.rowHeight) {
      return true;
    }
    return false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentVal = changes.currentItem.currentValue;
    if (this.isLastViewableItem(currentVal)) {
      this.el.nativeElement.scrollTop = this.rowHeight * currentVal;
    }
  }


  ngAfterViewInit(): void {
    this.el.nativeElement.style.maxHeight = this.maxHeight + 'px';
  }
}
