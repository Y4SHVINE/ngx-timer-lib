import { Component, OnInit, Input } from '@angular/core';
import { countDownTimerConfigModel, countDownTimerTexts } from './countdown-timer.model';
import { CountdownTimerService } from './countdown-timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  @Input() startTime: String;
  @Input() countDownTimerConfig: countDownTimerConfigModel;

  //Init
  private timerSubscription:Subscription;
  timerObj: any = {};
  timerConfig: countDownTimerConfigModel;
  timerTextConfig: countDownTimerTexts;

  constructor(private countdownTimerService: CountdownTimerService) {}

  ngOnInit() {
    this.getTimerValue();
    this.timerConfig = new countDownTimerConfigModel();
    this.timerTextConfig = new countDownTimerTexts();
    this.timerConfig = this.countDownTimerConfig ? Object.assign(this.countDownTimerConfig) : null;
    this.timerTextConfig = this.countDownTimerConfig && this.countDownTimerConfig.timerTexts ? Object.assign(this.countDownTimerConfig.timerTexts) :  null;
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
