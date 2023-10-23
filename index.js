class Millioaire {
    constructor(question, anwer1, anwer2, anwer3, anwer4, checkAnwer) {
        this.question = question;
        this.answer1 = anwer1;
        this.answer2 = anwer2;
        this.answer3 = anwer3;
        this.answer4 = anwer4;
        this.checkAnwer = checkAnwer;
    }

    setQuestion(question) {
        this.question = question;
    }

    getQuestion() {
        return this.question
    }

    setAnwer1(anwer1) {
        this.answer1 = anwer1
    }

    getAnwer1() {
        return this.answer1
    }

    setAnwer2(anwer2) {
        this.answer2 = anwer2
    }

    getAnwer2() {
        return this.answer2
    }

    setAnwer3(anwer3) {
        this.answer3 = anwer3
    }

    getAnwer3() {
        return this.answer3
    }

    setAnwer4(anwer4) {
        this.answer4 = anwer4
    }

    getAnwer4() {
        return this.answer4
    }


    setcheckAnwer(checkAnwer) {
        this.checkAnwer = checkAnwer
    }

    getcheckAnwer() {
        return this.checkAnwer
    }
}

//Thời gian đếm ngược
let minutes = 0;
let seconds = 60;

function updateCountdown() {
    setInterval(interval)
    {
        if (minutes === 0 && seconds === 0) {
            document.getElementById('time').textContent = "00:00";
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }

            const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

            const countdownText = `${formattedMinutes}:${formattedSeconds}`;
            document.getElementById('time').textContent = countdownText;
        }
    }
}

const interval = setInterval(updateCountdown, 1000);
// Các mốc câu :
function step() {
    let str=`<div> Câu 1:</div>`
    document.getElementById('img_1').innerHTML=str;
}


