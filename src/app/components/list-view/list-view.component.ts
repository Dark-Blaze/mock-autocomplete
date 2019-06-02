import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Model, ListMessageModel } from '../auto-complete/Model';
import { SearchFilterPipe } from '../../utils/search-filter.pipe';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input('listData') listData: Array<Model>;
  @Input('selectedDataItem') selectedDataItem: Model;
  @Input('searchString') searchString: string = '';

  @Output() itemChange = new EventEmitter<ListMessageModel>();


  constructor(private searchFilter: SearchFilterPipe) { }

  ngOnInit() {
  }

  fireMouseOver(e: any, data: Model, index: number): void {
    this.selectedDataItem = data;
    this.itemChange.emit({ e, index, from: 'mouse', select: false } as ListMessageModel);
  }

  selectItem(item: Model, index: number) {
    this.itemChange.emit({ item, index, select: true, from: 'mouse' } as ListMessageModel)
  }

  isItemFound(item: Model) {
    if (item.items.indexOf(this.searchString) !== -1) {
      return true;
    }
    return false;
  }
}
