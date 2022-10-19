class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();

        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minutesFormatted = parts.minute.toString().padStart(2, "0");
        const secondsFormatted = parts.seconds.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minutesFormatted}:${secondsFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }

    getTimeParts() {
        const now = new Date();
        
        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            seconds: now.getSeconds(),
            isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();

function getDateParts() {
    const now = new Date();

    let date = {
        weekday: now.getDay(),
        month: now.getMonth(),
        day: now.getDate(),
        year: now.getFullYear()
    };

    let dayFormatted = formatDay(date.day);
    let monthFormatted = formatMonth(date.month);
    let weekdayFormatted = formatWeekDay(date.weekday);

    console.log(date.day.toString().slice(-1));
    return `${weekdayFormatted}, ${monthFormatted} ${date.day}${dayFormatted} ${date.year}`;
}

function formatDay(day) {
    let dayEnd = day.toString().slice(-1); //get end of date

    let ending = "th";
    if(dayEnd == 1){
        ending = "st";
    } else if (dayEnd == 2) {
        ending = "nd";
    } else if (dayEnd == 3) {
        ending = "rd"
    }
    
    return ending;
}

function formatMonth(month){
    const months =['January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 'September', 'October', 
    'November', 'December'];

    return months[month];
}

function formatWeekDay(weekday) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return weekdays[weekday];
}

function greetings(){
    
    let morningGreetings = ['good morning', 'rise and shine', 'take in the new day'];
    let dayGreetings = ['good day', 'rocking the day', 'hello'];
    let eveningGreetings = ['good evening', 'time to wind down', 'whip out that evening routine'];
    let nightGreeting = ['good night','chillin', 'sleepy time', 'nighty night'];

    const hour = new Date().getHours();
    
    if(hour >= 5 && hour < 12){
        //morning greeting
        return morningGreetings[getRandom(morningGreetings.length)];

    } else if(hour >= 12 && hour < 17){
        //day greeting
        return dayGreetings[getRandom(dayGreetings.length)];

    } else if(hour >= 17 && hour < 20){
        //evening greeting
        return eveningGreetings[getRandom(eveningGreetings.length)];
    } else {
        //night greeting
        return nightGreeting[getRandom(nightGreeting.length)];
    }i
    
}

function getRandom(length){
    return Math.floor(Math.random() * length);
}

const dateElement = document.querySelector(".date");

dateElement.innerHTML = getDateParts();

const greetingElement = document.querySelector(".greeting");
greetingElement.innerHTML = greetings();
//add seconds
//add greeting
//show date (Sunday, Decemeber 12th 2021)

//format day st, rd, th
//format weekday into full word
//format month into full word
