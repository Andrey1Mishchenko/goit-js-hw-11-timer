// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });

const targetDate = new Date('Jul 17, 2022');
// setInterval(() => {
//     const currentDate = new Date();
//     const time = targetDate - currentDate;
//     console.log(time);
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     console.log(`${days}:${hours}:${mins}:${secs}`);
// }, 1000);
setTimeout(() => {
    const currentTime = Date.now();
    console.log(`${targetDate} - ${currentTime} = ${targetDate - currentTime}`);
    console.log(currentTime);
}, 1000);

// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);
