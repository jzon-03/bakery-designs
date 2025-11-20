import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bake1HomeComponent } from './bakery-template-1/components/bake-1-home/bake-1-home.component';
import { Bake2HomeComponent } from './bakery-template-2/components/bake-2-home/bake-2-home.component';
import { Bake3HomeComponent } from './bakery-template-3/components/bake-3-home/bake-3-home.component';

@NgModule({
  declarations: [
    AppComponent,
    Bake1HomeComponent,
    Bake2HomeComponent,
    Bake3HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
