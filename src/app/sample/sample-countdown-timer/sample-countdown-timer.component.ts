import { Component, OnInit } from '@angular/core';
import { countDownTimerConfigModel, CountdownTimerService, countDownTimerTexts } from '../../../../projects/ngx-timer/src/public-api';

@Component({
  selector: 'sample-countdown-timer',
  templateUrl: './sample-countdown-timer.component.html',
  styleUrls: ['./sample-countdown-timer.component.sass']
})
export class SampleCountdownTimerComponent implements OnInit {

  constructor(private countdownTimerService: CountdownTimerService) { }

  testConfig:countDownTimerConfigModel;

  ngOnInit(): void {
    this.testConfig = new countDownTimerConfigModel();
    this.testConfig.timerClass  = 'test_Timer_class';
    this.testConfig.timerTexts = new countDownTimerTexts();
    this.testConfig.timerTexts.hourText = "hh";
    this.testConfig.timerTexts.minuteText = "mm";
    this.testConfig.timerTexts.secondsText = "ss";
  }

  pauseTimer = () =>{
    this.countdownTimerService.pauseTimer();
  }

  startTimerGT  = ()=>{
    this.stopTimer();
    let cdate = new Date();
    cdate.setHours(cdate.getHours() +  1);
    cdate.setSeconds(cdate.getSeconds() +  5);
    this.countdownTimerService.startTimer(cdate);
  }

  stopTimer = () =>{
    this.countdownTimerService.stopTimer();
  }

}
