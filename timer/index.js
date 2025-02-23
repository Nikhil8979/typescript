// const startTime = new Date(2024, 7, 26, 18, 0, 0);
// const endTime = new Date(2024, 7, 26, 18, 10, 0);
// const interval = 10 * 60 * 1000;
// const arr = [
//   { id: 1, notify: "first" },
//   { id: 2, notify: "second" },
//   { id: 3, notify: "third" },
//   { id: 4, notify: "fourth" },
// ];

// const processNotifications = [];
// let order = 0;
// setInterval(() => {
//   const currentTime = new Date();
//   if (currentTime > startTime && currentTime < endTime) {
//   }
// }, [1000]);

const startTime = new Date(2024, 7, 26, 18, 0, 0);
const endTime = new Date(2024, 7, 26, 18, 6, 0);
const dynamicInterval = 60 * 1000; // Example interval: 10 minutes in milliseconds
const arr = [
  { id: 1, notify: "first" },
  { id: 2, notify: "second" },
  { id: 3, notify: "third" },
  { id: 4, notify: "fourth" },
];

const processNotifications = [];
let nextSendTime = new Date(startTime); // Initialize the next send time as startTime
let notificationIndex = 0;

function checkAndSendNotification() {
  const currentTime = new Date();

  if (
    currentTime >= nextSendTime &&
    currentTime <= endTime &&
    notificationIndex < arr.length
  ) {
    // Add sendTime to the notification and push it to processNotifications
    const notification = { ...arr[notificationIndex], sendTime: currentTime };
    processNotifications.push(notification);

    console.log(
      `Sent notification: ${notification.notify} at ${notification.sendTime}`
    );
    notificationIndex++;

    // Update the next send time based on the dynamic interval
    nextSendTime = new Date(nextSendTime.getTime() + dynamicInterval);

    // Reset the notifications if all have been sent
    if (notificationIndex >= arr.length) {
      notificationIndex = 0;
      nextSendTime = new Date(startTime); // Reset nextSendTime to startTime
      console.log("All notifications sent, restarting from the beginning.");
    }
  }

  if (currentTime > endTime || notificationIndex >= arr.length) {
    console.log("All notifications sent or end time reached.");
  }
}

// Simulating cron job running every minute
setInterval(checkAndSendNotification, 1000);
