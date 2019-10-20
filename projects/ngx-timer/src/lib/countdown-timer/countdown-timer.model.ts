export class countDownTimerConfigModel {
    timerClass?: string;
    timerTexts?: countDownTimerTexts;
}

export class countDownTimerTexts {
    hourText?: string;
    minuteText?: string;
    secondsText?: string;
}


export enum TimerStaus {
  START = "START",
  PAUSE = "PAUSE",
  STOP = "STOP"
}