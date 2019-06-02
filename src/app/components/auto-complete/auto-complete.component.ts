import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Model, ListMessageModel } from './model';
import { DataService } from './data.service';
import { SearchFilterPipe } from 'src/app/utils/search-filter.pipe';

enum KEY_SUPPORT {
  ARROW_UP = 38,
  ARROW_DOWN = 40,
  ENTER = 13
}

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  @ViewChild('search', null) private searchElement: ElementRef;

  /**
   *
   *
   * @type {Array<Model>}
   * @memberof AutoCompleteComponent
   */
  data: Array<Model>;
  /**
   *
   *
   * @type {Model}
   * @memberof AutoCompleteComponent
   */
  activeItem: Model;
  /**
   *
   *
   * @type {Model}
   * @memberof AutoCompleteComponent
   */
  selectedItem: Model;
  /**
   *
   *
   * @type {Array<Model>}
   * @memberof AutoCompleteComponent
   */
  filteredData: Array<Model> = [];
  /**
   *
   *
   * @memberof AutoCompleteComponent
   */
  searchStr = '';
  /**
   *
   *
   * @memberof AutoCompleteComponent
   */
  currentPosition = -1;
  /**
   *
   *
   * @memberof AutoCompleteComponent
   */
  showSpan = false;
  /**
   *
   *
   * @memberof AutoCompleteComponent
   */
  showDropdown = false;

  constructor(private dataService: DataService, private searchFilter: SearchFilterPipe) {
    this.data = this.dataService.getUserData();
  }

  ngOnInit() {
    this.setActiveItem({} as Model);
  }

  @HostListener('document:keyup', ['$event'])
  keyup(e: KeyboardEvent): void {
    this.keyHandler(e);
    this.setDataAndPosition();
  }

  /**
   *
   *
   * @param {KeyboardEvent} e
   * @memberof AutoCompleteComponent
   */
  @HostListener('document:keydown', ['$event'])
  keydown(e: KeyboardEvent): void {
    if (e.target['className'].includes('search-input')) {
      if (e.keyCode === KEY_SUPPORT.ARROW_UP || e.keyCode === KEY_SUPPORT.ARROW_DOWN) {
        e.preventDefault();
      }
    }
  }

  setSelectedItem(item: Model): void {
    this.selectedItem = item;
  }

  getCurrentPosition(): number {
    return this.currentPosition;
  }

  setCurrentPosition(pos: number): void {
    this.currentPosition = pos;
  }

  decreamentCurrentPosition(): void {
    this.setCurrentPosition(this.getFilteredData().length - 1);
  }

  increamentCurrentPosition(): void {
    this.setCurrentPosition(this.currentPosition + 1);
  }

  setActiveItem(item: Model): void {
    this.activeItem = item;
  }
  getActiveItem(): Model {
    return this.activeItem;
  }

  keyHandler(e: KeyboardEvent): void {
    if (e.target['className'].includes('search-input') && this.getFilteredData().length > 0) {
      const code = e['keyCode'];
      if (code === KEY_SUPPORT.ARROW_UP) {
        e.preventDefault();
        if (this.getCurrentPosition() === 0) {
          this.setCurrentPosition(0);
        } else {
          this.setCurrentPosition(this.getCurrentPosition() - 1)
        }
      } else if (code === KEY_SUPPORT.ARROW_DOWN) {
        e.preventDefault();
        if (this.getCurrentPosition() === this.getFilteredData().length - 1) {
          this.decreamentCurrentPosition();
        } else {
          this.increamentCurrentPosition();
        }
      } else if (code === KEY_SUPPORT.ENTER) {
        this.itemChange({
          e,
          item: this.getFilteredData()[this.getCurrentPosition()],
          select: true,
          from: 'keyboard'
        } as ListMessageModel);
      }
      this.setActiveItem(this.getFilteredData()[this.getCurrentPosition()]);
    }
  }

  setFilteredData(items: Array<Model>): void {
    this.filteredData = items;
  }

  getFilteredData(): Array<Model> {
    return this.filteredData;
  }

  setDataAndPosition(): void {
    this.setFilteredData(this.data.filter(i => this.searchFilter.transform(this.searchStr, i)));
    if (!this.getFilteredData().length || this.getFilteredData().length === 1) {
      this.setCurrentPosition(0);
    }
  }

  itemChange(data: ListMessageModel) {
    if (data.from !== 'mouse') {
      this.setCurrentPosition(data.index);
    }
    this.setActiveItem(this.getFilteredData()[this.getCurrentPosition()]);
    if (data.select) {
      this.setSelectedItem(data.item);
      this.resetBehaivour();
    }
  }

  resetBehaivour() {
    this.setFilteredData([]);
    this.showSpan = true;
    this.showDropdown = false;
    this.searchStr = this.selectedItem.name;
  }

  onFocus(e: any) {
    this.setDataAndPosition();
    this.showDropdown = true;
  }

  hideSpan() {
    this.showSpan = false;
    setTimeout(() => { this.searchElement.nativeElement.focus() }, 0);
  }

}
