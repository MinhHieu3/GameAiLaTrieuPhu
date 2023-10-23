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
let countdown = 60;

function startgame() {
    document.querySelector("button").disabled = true; // Ẩn nút "Start Countdown"

    function countDownEverySecond() {
        countdown--; // Giảm thời gian xuống 1 giây

        // Hiển thị thời gian còn lại
        document.getElementById("time").innerHTML = countdown;

        if (countdown === 0) {
            document.getElementById("time").innerHTML = "Hết giờ!";
            // Khi hết thời gian, bạn có thể thực hiện các hành động cụ thể ở đây.
        } else {
            // Gọi lại hàm countDownEverySecond sau 1 giây
            setTimeout(countDownEverySecond, 1000);
        }
    }

    // Bắt đầu đếm ngược bằng cách gọi hàm countDownEverySecond
    countDownEverySecond();
}

// Nút nhấn confim
let button1 = document.getElementById('anwer1');
let button2 = document.getElementById('anwer2');
let button3 = document.getElementById('anwer3');
let button4 = document.getElementById('anwer4');
//Đặt sự kiện click
button1.addEventListener("click", function () {
    let str = ` <button onclick="confim()">Tôi Chắc Chắn</button>`
    document.getElementById('confim').innerHTML = str;
});
button2.addEventListener("click", function () {
    let str = ` <button onclick="confim()">Tôi Chắc Chắn</button>`
    document.getElementById('confim').innerHTML = str;
});
button3.addEventListener("click", function () {
    let str = ` <button onclick="confim()">Tôi Chắc Chắn</button>`
    document.getElementById('confim').innerHTML = str;
});
button4.addEventListener("click", function () {
    let str = ` <button onclick="confim()">Tôi Chắc Chắn</button>`
    document.getElementById('confim').innerHTML = str;
});

function confim(message) {
    var result = window.confirm(message);
    if (result) {
        anwer()
    }
}