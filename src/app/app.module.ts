import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from 'src/FirstComponent/first.component';
import { SecondComponent } from 'src/SecondComponent/second.component';
import { ThirdComponent } from 'src/ThirdComponent/third.component';
import { FourthComponent } from 'src/FourthComponent/fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    FourthComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FirstComponent, SecondComponent, ThirdComponent, FourthComponent
  ]
})
export class AppModule { }
