import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountupTimerService {

  //Init
  public timerValue = {
    seconds: '00',
    mins: '00',
    hours: '00',
  }
  public startTime = 0;
  public isTimerStart: boolean = false;
  public interval: Observable<any>;
  public intervalSubscription;
  public totalSeconds: number = 0;
  public currentOperationId: number = 0;

  constructor() {
    this.interval = interval(1000);
  }

  //start timer
  startTimer = (startTime?: any) => {
    if (startTime) {
      this.startTime = startTime;
      let currentDate = new Date();
      let startedTime = new Date(this.startTime);
      this.totalSeconds = Math.round((currentDate.getTime() - startedTime.getTime()) / 1000);
    }
    this.isTimerStart = true;
    return true;
  }

  //end timer
  pauseTimer = (startTime?: any, endTime?: any) => {
    if (startTime && endTime) {
      this.startTime = startTime;
      let endedDate = new Date(endTime);
      let startedTime = new Date(this.startTime);
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

  //get timer value Obj
  getTimerValue = (): Observable<any> => {
    return new Observable(obs => {
      if (this.intervalSubscription) {
        this.intervalSubscription.unsubscribe();
      }
      this.intervalSubscription = this.interval.subscribe(int => {
        if (this.isTimerStart) {
          let currentDate = new Date();
          let startedTime = new Date(this.startTime);
          this.totalSeconds = Math.round((currentDate.getTime() - startedTime.getTime()) / 1000);
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
