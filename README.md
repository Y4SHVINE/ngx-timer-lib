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

In html
```html
<countup-timer [countUpTimerConfig]="testConfig"></countup-timer>
```
You can import ***CountupTimerService***  from **ngx-timer** to do the following functionalities.

### 1.Count Up Timer
 1. To start the timer
```
this.countupTimerService.startTimer();
```
By passing a start time to above function timer will start from that.
eg :-
```
let cdate = new Date();
cdate.setHours(cdate.getHours()-2);
this.countupTimerService.startTimer(cdate);
```
  2. To pause the timer
```
this.countupTimerService.pauseTimer();
```
  3. To stop the timer
```
this.countupTimerService.stopTimer();
```
***Configurations***

Import **countUpTimerConfigModel** model from ngx-timer you will be able use following configurations.
```
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


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Demo
[Demo url](https://y4shvine.github.io/ngx-timer-lib/)