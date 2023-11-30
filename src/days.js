let today = new Date();
let summerYear = today.getFullYear();

if (today.getMonth() > 5 || (today.getMonth() === 5 && today.getDate() > 20)) {
  summerYear = summerYear + 1;
}

let summerDate = new Date(summerYear, 5, 20);
let dayMilliseconds = 1000 * 60 * 60 * 24;

let remainingDays = Math.ceil(
  (summerDate.getTime() - today.getTime()) / dayMilliseconds
);

let remainingHours = Math.ceil(
  (summerDate.getTime() - today.getTime()) / (1000 * 60 * 60)
);

let remainingMinutes = Math.ceil(
  (summerDate.getTime() - today.getTime()) / (1000 * 60)
);

let remainingSeconds = Math.ceil(
  (summerDate.getTime() - today.getTime()) / 1000
);

document.write(
  "There are " +
    remainingDays +
    " days, " +
    remainingHours +
    " hours and " +
    remainingMinutes +
    " minutes until Summer Break!"
);
