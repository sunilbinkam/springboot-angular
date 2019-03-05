import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeviewModule } from 'ngx-treeview';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeviewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
