import { NgModule } from '@angular/core';
import { CountupTimerComponent } from './countup-timer/countup-timer.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CountupTimerComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [CountupTimerComponent],
  entryComponents:[CountupTimerComponent]
})
export class NgxTimerModule { }
