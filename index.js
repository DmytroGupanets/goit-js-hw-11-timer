class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.startCountDown();
    this.daysRef = document.querySelector('span[data-value="days"]');
    this.hoursRef = document.querySelector('span[data-value="hours"]');
    this.minsRef = document.querySelector('span[data-value="mins"]');
    this.secsRef = document.querySelector('span[data-value="secs"]');
  }

  startCountDown() {
    setInterval(() => {
      const currentTime = Date.now();
      const timeDifference = this.targetDate.getTime() - currentTime;
      const timeToDisplay = this.getTimeValue(timeDifference);
      this.updateValues(timeToDisplay);
    }, 1000);
  }

  getTimeValue(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  updateValues({ days, hours, mins, secs }) {
    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021 20:00:00'),
});
