import { NgModule } from '@angular/core';
import { CountupTimerComponent } from './countup-timer/countup-timer.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountupTimerService } from './countup-timer/countup-timer.service';
import { CountdownTimerService } from './countdown-timer/countdown-timer.service';

@NgModule({
  declarations: [
    CountupTimerComponent, 
    CountdownTimerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    CountupTimerComponent,
    CountdownTimerComponent
  ],
  entryComponents:[
    CountupTimerComponent,
    CountdownTimerComponent
  ],
  providers:[
    CountupTimerService,
    CountdownTimerService
  ]
})
export class NgxTimerModule { }
