// let timerId;
// let currentTime = 0;
// let isTimerRunning = false;
//
// onmessage = function (e) {
//   if (e.data.type === 'start') {
//     isTimerRunning = true;
//     if (!timerId) {
//       timerId = setInterval(() => {
//         if (isTimerRunning) {
//           currentTime += 0.1;
//           postMessage(currentTime);
//         }
//       }, 100);
//     }
//   } else if (e.data.type === 'pause') {
//     isTimerRunning = false;
//   } else if (e.data.type === 'update') {
//     currentTime = e.data.value;
//   } else if (e.data.type === 'stop') {
//     clearInterval(timerId);
//     timerId = null;
//     currentTime = 0;
//     isTimerRunning = false;
//   }
// };
