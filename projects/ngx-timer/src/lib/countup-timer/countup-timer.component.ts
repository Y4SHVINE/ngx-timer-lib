import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CountupTimerService } from './countup-timer.service';
import { countUpTimerConfigModel, timerTexts } from './countup-timer.model';

@Component({
  selector: 'countup-timer',
  templateUrl: './countup-timer.component.html',
  styleUrls: ['./countup-timer.component.scss']
})
export class CountupTimerComponent implements OnInit, OnDestroy {

  @Input() startTime: String;
  @Input() countUpTimerConfig: countUpTimerConfigModel;

  //Init
  timerObj: any = {};
  private timerSubscription;
  timerConfig: countUpTimerConfigModel;
  timerTextConfig: timerTexts;

  constructor(private countupTimerService: CountupTimerService) {}

  ngOnInit() {
    this.getTimerValue();
    this.timerConfig = new countUpTimerConfigModel();
    this.timerTextConfig = new timerTexts();
    this.timerConfig = this.countUpTimerConfig ? Object.assign(this.countUpTimerConfig) : null;
    this.timerTextConfig = this.countUpTimerConfig && this.countUpTimerConfig.timerTexts ? Object.assign(this.countUpTimerConfig.timerTexts) :  null;
  }

  //get timer value
  getTimerValue = () => {
    this.timerSubscription = this.countupTimerService.getTimerValue().subscribe(res => {
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
