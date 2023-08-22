function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    const formattedHours = formatTimeComponent(hours);
    const formattedMinutes = formatTimeComponent(minutes);
    const formattedSeconds = formatTimeComponent(seconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function formatTimeComponent(component) {
    return component < 10 ? `0${component}` : component;
}

console.log(digitalClock(5025)); // Output: "01:23:45"
console.log(digitalClock(61201)); // Output: "17:00:01"
console.log(digitalClock(87000)); // Output: "00:10:00"
