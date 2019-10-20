import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTimerModule } from '../../../projects/ngx-timer/src/public-api';
import { SampleCountupTimerComponent } from './sample-countup-timer/sample-countup-timer.component';
import { SampleCountdownTimerComponent } from './sample-countdown-timer/sample-countdown-timer.component';
import { SampleStopWatchComponent } from './sample-stop-watch/sample-stop-watch.component';

@NgModule({
  declarations: [SampleComponent, SampleCountupTimerComponent, SampleCountdownTimerComponent, SampleStopWatchComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgxTimerModule
  ],
  exports:[
    SampleComponent
  ],
  entryComponents:[
    SampleComponent
  ]
})
export class SampleModule { }
