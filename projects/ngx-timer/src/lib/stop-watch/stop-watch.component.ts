import { Component, OnInit } from '@angular/core';
import { StopWatchService } from './stop-watch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent implements OnInit {

  //Init
  private timerSubscription:Subscription;
  timerObj: any = {};
  // timerConfig: countDownTimerConfigModel;
  // timerTextConfig: countDownTimerTexts;

  constructor(private countdownTimerService: StopWatchService) {}

  ngOnInit() {
    this.getTimerValue();
    // this.timerConfig = new countDownTimerConfigModel();
    // this.timerTextConfig = new countDownTimerTexts();
    // this.timerConfig = this.countDownTimerConfig ? Object.assign(this.countDownTimerConfig) : null;
    // this.timerTextConfig = this.countDownTimerConfig && this.countDownTimerConfig.timerTexts ? Object.assign(this.countDownTimerConfig.timerTexts) :  null;
  }

  //get timer value
  getTimerValue = () => {
    this.timerSubscription = this.countdownTimerService.getTimerValue().subscribe(res => {
      this.timerObj = Object.assign(res);
    }, error => {
      console.log(error);
      console.log('Failed to get timer value');
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

}
