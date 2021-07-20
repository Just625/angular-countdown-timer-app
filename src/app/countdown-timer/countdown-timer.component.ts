import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  remainingTime: number;
  message = '';
  @Input()
  seconds = 12;
  // Sử dụng để lưu Id của interval, cho vào trong hàm clearInterval(id) để dừng interval
  private intervalId = 0;

  constructor() {
  }

  ngOnInit() {
    this.reset();
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Time is up';
        this.clearTimer();
      } else {
        this.message = `${this.remainingTime} seconds left`;
      }
    }, 1000);
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at ${this.remainingTime} seconds`;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = 'Click start button to start the Countdown';
  }
}
