# NgxTimer

Count up timer for angular 5+

## Installation

```bash
npm i ngx-timer --save
```

## Usage

```ts
import { NgxTimerModule } from 'ngx-timer';

@NgModule({
  imports: [
    ...
    NgxTimerModule
  ],
})
```
### 1.Count Up Timer
In html
```html
<countup-timer [countUpTimerConfig]="testConfig"></countup-timer>
```
You can import ***CountupTimerService***  from **ngx-timer** to do the following functionalities.


 1. To start the timer
```ts
this.countupTimerService.startTimer();
```
By passing a start time to above function timer will start from that.
eg :-
```ts
let cdate = new Date();
cdate.setHours(cdate.getHours()-2);
this.countupTimerService.startTimer(cdate);
```
  2. To pause the timer
```ts
this.countupTimerService.pauseTimer();
```
  3. To stop the timer
```ts
this.countupTimerService.stopTimer();
```
***Configurations***

Import **countUpTimerConfigModel** model from ngx-timer you will be able use following configurations.
```ts
import { countUpTimerConfigModel, timerTexts } from 'ngx-timer';    

ngOnInit(): void {
    //countUpTimerConfigModel
    this.testConfig = new countUpTimerConfigModel();
    
    //custom class
    this.testConfig.timerClass  = 'test_Timer_class';

    //timer text values  
    this.testConfig.timerTexts = new timerTexts();
    this.testConfig.timerTexts.hourText = "Hours"; //default - hh
    this.testConfig.timerTexts.minuteText = "Minutes"; //default - mm
    this.testConfig.timerTexts.secondsText = "Seconds"; //default - ss
}
```
### 2.Count Down Timer
In html
```html
<countdown-timer [countDownTimerConfig]="testConfig"></countdown-timer>
```
You can import ***CountdownTimerService***  from **ngx-timer** to do the following functionalities.

 1.To start the timer
```ts
let cdate = new Date();
cdate.setHours(cdate.getHours() + 2);
this.CountdownTimerService.startTimer(cdate);
```
  2.To pause the timer
```ts
this.CountdownTimerService.pauseTimer();
```
  3.To stop the timer
```ts
this.CountdownTimerService.stopTimer();
```
  3.To resume the timer
```ts
this.CountdownTimerService.resumeTimer();
```
***Configurations***

Import **countUpTimerConfigModel** model from ngx-timer you will be able use following configurations.
```ts
import { countDownTimerConfigModel, countDownTimerTexts } from 'ngx-timer';    

ngOnInit(): void {
    //countUpTimerConfigModel
    this.testConfig = new countDownTimerConfigModel();
    
    //custom class
    this.testConfig.timerClass  = 'test_Timer_class';

    //timer text values  
    this.testConfig.timerTexts = new countDownTimerTexts();
    this.testConfig.timerTexts.hourText = "Hours"; //default - hh
    this.testConfig.timerTexts.minuteText = "Minutes"; //default - mm
    this.testConfig.timerTexts.secondsText = "Seconds"; //default - ss
}
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 😊

## Impending
1. Day,Month and Year Configuration for both timers.
2. Stopwatch implementation.

## License & copyright
Licensed under  the [MIT License](LICENSE)

## Demo
[Demo url](https://y4shvine.github.io/ngx-timer-lib/)