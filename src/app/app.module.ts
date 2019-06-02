import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchFilterPipe } from './utils/search-filter.pipe';
import { HighlighterPipe } from './utils/highlighter.pipe';
import { ScrollViewDirective } from './components/auto-complete/scroll-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    AutoCompleteComponent,
    DetailsComponent,
    SearchFilterPipe,
    HighlighterPipe,
    ScrollViewDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SearchFilterPipe, HighlighterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
