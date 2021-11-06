const refs = {
    daysEl: document.querySelector('span[data-value="days"]'),
    hoursEl: document.querySelector('span[data-value="hours"]'),
    minsEl: document.querySelector('span[data-value="mins"]'),
    secsEl: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.intervalId = null;
        this.targetDate = targetDate;
    }

    start() {
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const timeComp = this.getTimeComponents(deltaTime);
            this.updateClockface(timeComp);
            console.log(`${timeComp.days}:${timeComp.hours}:${timeComp.mins}:${timeComp.secs}`);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    updateClockface({ days, hours, mins, secs }) {
        refs.daysEl.textContent = days;
        refs.hoursEl.textContent = hours;
        refs.minsEl.textContent = mins;
        refs.secsEl.textContent = secs;
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Nov 09, 2021'),
});

timer.start();
// setTimeout(() => {
//     timer.stop();
// }, 10000);
