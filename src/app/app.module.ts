import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDataService  } from './common/order-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [OrderDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
