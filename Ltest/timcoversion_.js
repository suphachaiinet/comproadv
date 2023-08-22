function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600);  // หารได้จำนวนชั่วโมง
    const minutes = Math.floor((seconds % 3600) / 60);  // หารได้จำนวนนาที
    const remainingSeconds = seconds % 60;  // หารได้จำนวนวินาทีที่เหลือ

    const formattedHours = hours < 10 ? `0${hours}` : hours;  // ถ้าชั่วโมงน้อยกว่า 10 ใส่ 0 ด้านหน้า
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;  // ถ้านาทีน้อยกว่า 10 ใส่ 0 ด้านหน้า
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;  // ถ้าวินาทีน้อยกว่า 10 ใส่ 0 ด้านหน้า

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;  // สร้างรูปแบบ Digital Clock และคืนค่า
}

console.log(digitalClock(5025)); // Output: "01:23:45"
console.log(digitalClock(61201)); // Output: "17:00:01"
console.log(digitalClock(87000)); // Output: "00:10:00"
