import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerService {


  //Init
  public timerValue = {
    seconds: '00',
    mins: '00',
    hours: '00',
  }
  public isTimerStart: boolean = false;
  public interval: Observable<any>;
  public intervalSubscription;
  public totalSeconds: number = 0;
  public currentOperationId: number = 0;

  constructor() {
    this.interval = interval(1000);
  }

  //start timer
  startTimer = (startTime: any) => {
    if (startTime) {
      let currentDate = new Date();
      let startedTime = new Date(startTime);
      this.totalSeconds = (Math.round((currentDate.getTime() - startedTime.getTime()) / 1000)) * -1;
      debugger;
    }
    this.isTimerStart = true;
    return true;
  }

  //end timer
  pauseTimer = (startTime?: any, endTime?: any) => {
    if (startTime && endTime) {
      let endedDate = new Date(endTime);
      let startedTime = new Date(startTime);
      this.totalSeconds = Math.round((endedDate.getTime() - startedTime.getTime()) / 1000);
    }
    this.isTimerStart = false;
    return false;
  }

  //reset Timer
  stopTimer = () => {
    this.isTimerStart = false;
    this.totalSeconds = 0;
  }

  //resume Timer
  resumeTimer = () => {
    this.isTimerStart = true;
  }

  //get timer value Obj
  getTimerValue = (): Observable<any> => {
    return new Observable(obs => {
      if (this.intervalSubscription) {
        this.intervalSubscription.unsubscribe();
      }
      this.intervalSubscription = this.interval.subscribe(int => {
        if (this.isTimerStart && this.totalSeconds > 0) {
          --this.totalSeconds;
          this.timerValue.seconds = this.setTimervalue(this.totalSeconds % 60);
          let totalSecondsForMinutes = 0;
          totalSecondsForMinutes = (Math.trunc(this.totalSeconds / 60) >= 60) ? (this.totalSeconds / 60) % 60 : this.totalSeconds / 60;
          this.timerValue.mins = this.setTimervalue(Math.trunc(totalSecondsForMinutes));
          this.timerValue.hours = this.setTimervalue(Math.trunc(this.totalSeconds / 3600));
          obs.next(this.timerValue);
          obs.complete();
        } else {
          if (this.totalSeconds > 0) {
            this.timerValue.seconds = this.setTimervalue(this.totalSeconds % 60);
            let totalSecondsForMinutes = 0;
            totalSecondsForMinutes = (Math.trunc(this.totalSeconds / 60) >= 60) ? (this.totalSeconds / 60) % 60 : this.totalSeconds / 60;
            this.timerValue.mins = this.setTimervalue(Math.trunc(totalSecondsForMinutes));
            this.timerValue.hours = this.setTimervalue(Math.trunc(this.totalSeconds / 3600));
          } else {
            this.timerValue.hours = "00";
            this.timerValue.mins = "00";
            this.timerValue.seconds = "00";
          }
          obs.next(this.timerValue);
          obs.complete();
        }
      }, error => {
        obs.error(error);
        obs.complete();
      });
    });
  }

  //set timer value
  setTimervalue = (val) => {
    let valString = val + "";
    return (valString.length < 2) ? "0" + valString : valString;
  }
}
