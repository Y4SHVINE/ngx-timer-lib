import { Component, OnInit } from '@angular/core';
import { CountupTimerService, countUpTimerConfigModel, timerTexts } from 'projects/ngx-timer/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
  title = 'ngxTimerLib';

  pauseTimer = () =>{
    this.countupTimerService.pauseTimer();
  }

  startTimer = () =>{
    let cdate = new Date();
    cdate.setHours(cdate.getHours() -  2);
    this.countupTimerService.startTimer(cdate);
  }

  stopTimer = () =>{
    this.countupTimerService.stopTimer();
  }
}
