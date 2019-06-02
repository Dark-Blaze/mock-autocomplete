import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Model, ListMessageModel } from 'models/model';
import { DataService } from 'services/data.service';
import { SearchFilterPipe } from 'utils/search-filter.pipe';

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
   * This variable is responsible to get data from the dataService
   *
   * @type {Array<Model>}
   * @memberof AutoCompleteComponent
   */
  data: Array<Model>;
  /**
   * This variable is responsible for highlighting the selected/navigated to row item
   *
   * @type {Model}
   * @memberof AutoCompleteComponent
   */
  activeItem: Model;
  /**
   * This variable is responsible for storing the selected item either on mouse click or ENTER action
   *
   * @type {Model}
   * @memberof AutoCompleteComponent
   */
  selectedItem: Model;
  /**
   * This variable stores the generated filtered data from the  @var searchStr
   *
   * @type {Array<Model>}
   * @memberof AutoCompleteComponent
   */
  filteredData: Array<Model> = [];
  /**
   * This variable stores the search string from the input element
   *
   * @memberof AutoCompleteComponent
   */
  searchStr = '';
  /**
   * This variable stores the index of the @var activeItem
   *
   * @memberof AutoCompleteComponent
   */
  currentPosition = -1;
  /**
   * This variable toggles the visible states of either showing the selected value and input field
   *
   * @memberof AutoCompleteComponent
   */
  showSpan = false;
  /**
   * This variable toggles the visible state of the dropdown
   *
   * @memberof AutoCompleteComponent
   */
  showDropdown = false;

  constructor(private dataService: DataService, private searchFilter: SearchFilterPipe) {
    this.data = this.dataService.getUserData();
  }

  /**
   * This is a lifecycle hook called as soon as this component is initialized.
   * This method will initialize the @var activeItem
   *
   * @memberof AutoCompleteComponent
   */
  ngOnInit() {
    this.setActiveItem({} as Model);
  }

  /**
   * This event listener is to make sure that if the event source is the input field, the up and down keybindings work.
   * The reason for this to be in keyup is because handling this in keydown events would work for the last value and not the current value.
   *
   * @param {KeyboardEvent} e
   * @memberof AutoCompleteComponent
   */
  @HostListener('document:keyup', ['$event'])
  keyup(e: KeyboardEvent): void {
    this.keyHandler(e);
    this.setDataAndPosition();
  }

  /**
   * This event listener is to make sure that the cursor position does not move when the up and down keystrokes are encountered.
   * The reason for this to be in keydown is because before keyup triggers, the cursor would have shifted position.
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
  setActiveItem(item: Model): void {
    this.activeItem = item;
  }
  getActiveItem(): Model {
    return this.activeItem;
  }
  setFilteredData(items: Array<Model>): void {
    this.filteredData = items;
  }
  getFilteredData(): Array<Model> {
    return this.filteredData;
  }
  isStartPosition(): boolean {
    return this.getCurrentPosition() === 0;
  }
  isEndPosition(): boolean {
    return this.getCurrentPosition() === this.getFilteredData().length - 1;
  }


  /**
   * This method will identify the up, down and enter key events and perform appropriate actions
   * For UP and DOWN
   * Navigate to the previous and next row item respectively. If the item is the first row, then the up key won't do anything.
   * If the item is the last viewable, then scrollview will start shifting the view appropriately.
   * If the item is the last item, the down key won't do anything.
   *
   * For ENTER
   * The current @var activeItem will be selected and assigned to @var selectedItem
   *
   * @param {KeyboardEvent} e
   * @memberof AutoCompleteComponent
   */
  keyHandler(e: KeyboardEvent): void {
    if (e.target['className'].includes('search-input') && this.getFilteredData().length > 0) {
      const code = e['keyCode'];
      if (code === KEY_SUPPORT.ARROW_UP) {
        e.preventDefault();
        this.setCurrentPosition(this.isStartPosition() ? 0 : this.getCurrentPosition() - 1);
      } else if (code === KEY_SUPPORT.ARROW_DOWN) {
        e.preventDefault();
        this.setCurrentPosition(this.isEndPosition() ? this.getFilteredData().length - 1 : this.getCurrentPosition() + 1);
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



  /**
   * This method will set the filteredData set and reset the current position everytime the data is re-filtered.
   *
   * @memberof AutoCompleteComponent
   */
  setDataAndPosition(): void {
    this.setFilteredData(this.data.filter(i => this.searchFilter.transform(this.searchStr, i)));
    if (!this.getFilteredData().length || this.getFilteredData().length === 1) {
      this.setCurrentPosition(0);
    }
  }

  /**
   * This method will identify the event propogation source and perform appropriate actions.
   * If the source is mouse:
   * Only the @var activeItem will be set with the @var currentPosition
   *
   * The event communication follows the @interface ListMessageModel. If the action is the select the item(on mouse click) then the
   * @var selectedItem will be assigned.
   *
   * @param {ListMessageModel} data
   * @memberof AutoCompleteComponent
   */
  itemChange(data: ListMessageModel) {
    if (data.from !== 'mouse') {
      this.setCurrentPosition(data.index);
    }
    this.setActiveItem(this.getFilteredData()[this.getCurrentPosition()]);
    if (data.select) {
      this.setSelectedItem(data.item);
      this.setFilteredData([]);
      this.resetBehaivour();
    }
  }

  /**
   * This method will reset the dropdown view
   *
   * @memberof AutoCompleteComponent
   */
  resetBehaivour() {
    this.showSpan = true;
    this.showDropdown = false;
    this.searchStr = this.selectedItem.name;
  }

  resetData() {
    this.searchStr = '';
    this.setSelectedItem({} as Model);
    this.setFilteredData([]);
    this.showSpan = false;
  }

  /**
   * This method will set the data and position when the user focuses in the input field.
   *
   * @param {*} e
   * @memberof AutoCompleteComponent
   */
  onFocus(e: any) {
    this.setDataAndPosition();
    this.showDropdown = true;
  }

  onBlur() {
    if (this.getFilteredData().length === 1) {
      this.resetBehaivour();
    }
  }

  /**
   * This method will hide the display element and show the input field.
   *
   * @memberof AutoCompleteComponent
   */
  hideSpan() {
    this.showSpan = false;
    setTimeout(() => { this.searchElement.nativeElement.focus()}, 0);
  }

}
