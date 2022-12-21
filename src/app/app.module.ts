import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TbodyComponent } from './tbody/tbody.component';
import { TheadComponent } from './thead/thead.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
@NgModule({
  declarations: [
    AppComponent,
    TbodyComponent,
    TheadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
