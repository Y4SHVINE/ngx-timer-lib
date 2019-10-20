import { NgModule } from '@angular/core';
import { CountupTimerComponent } from './countup-timer/countup-timer.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountupTimerService } from './countup-timer/countup-timer.service';
import { CountdownTimerService } from './countdown-timer/countdown-timer.service';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { StopWatchService } from './stop-watch/stop-watch.service';

@NgModule({
  declarations: [
    CountupTimerComponent, 
    CountdownTimerComponent, 
    StopWatchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountupTimerComponent,
    CountdownTimerComponent,
    StopWatchComponent
  ],
  entryComponents:[
    CountupTimerComponent,
    CountdownTimerComponent,
    StopWatchComponent
  ],
  providers:[
    CountupTimerService,
    CountdownTimerService,
    StopWatchService
  ]
})
export class NgxTimerModule { }
