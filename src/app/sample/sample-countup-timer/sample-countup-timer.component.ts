import { Component, OnInit } from '@angular/core';
import { CountupTimerService, countUpTimerConfigModel, timerTexts } from '../../../../projects/ngx-timer/src/public-api';

@Component({
  selector: 'sample-countup-timer',
  templateUrl: './sample-countup-timer.component.html',
  styleUrls: ['./sample-countup-timer.component.sass']
})
export class SampleCountupTimerComponent implements OnInit {
  constructor(private countupTimerService: CountupTimerService) { }

  testConfig:countUpTimerConfigModel;

  ngOnInit(): void {
    this.testConfig = new countUpTimerConfigModel();
    this.testConfig.timerClass  = 'test_Timer_class';
    this.testConfig.timerTexts = new timerTexts();
    this.testConfig.timerTexts.hourText = "HH";
    this.testConfig.timerTexts.minuteText = "MM";
    this.testConfig.timerTexts.secondsText = "SS";
    //this.countupTimerService.startTimer();
  }

  pauseTimer = () =>{
    this.countupTimerService.pauseTimer();
  }

  startTimer = () =>{
    this.stopTimer();
    this.countupTimerService.startTimer();
  }

  startTimerGT  = ()=>{
    this.stopTimer();
    let cdate = new Date();
    cdate.setHours(cdate.getHours() -  2);
    this.countupTimerService.startTimer(cdate);
  }

  stopTimer = () =>{
    this.countupTimerService.stopTimer();
  }

}
