import { Component, OnInit } from '@angular/core';
import { StopWatchService } from '../../../../projects/ngx-timer/src/public-api';

@Component({
  selector: 'sample-stop-watch',
  templateUrl: './sample-stop-watch.component.html',
  styleUrls: ['./sample-stop-watch.component.sass']
})
export class SampleStopWatchComponent implements OnInit {

  constructor(private StopWatchService:StopWatchService) { }

  ngOnInit() {
    this.StopWatchService.startTimer();
  }

}
