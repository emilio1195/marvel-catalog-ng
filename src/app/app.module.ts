import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './components/tables/datatable/datatable.component';
import {HttpClientModule} from "@angular/common/http";
import {CharactersModule} from "./modules/characters/characters.module";
import { HeaderComponent } from './components/container-main/header/header.component';
import {ContainerComponent} from "./components/container-main/container/container.component";

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    ContainerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CharactersModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
