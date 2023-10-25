var intervalID;

function chonDapAn(id) {
    if (id === million1.checkAnwer) {
        id.classList.add('selected');
        clearInterval(intervalID);
        setTimeout(nextQuestion, 1000);
    }
}

function nextQuestion() {
    answers.forEach(function(answer) {
        answer.classList.remove('selected'); // Bỏ màu nền của đáp án khi chuyển câu hỏi
    });

    currentQuestionIndex++;


        // Bắt đầu tự động thay đổi màu đáp án
        intervalID = setInterval(function () {
            answers.forEach(function(answer) {
                var randomColor = getRandomColor();
                answer.style.backgroundColor = randomColor;
            });
        }, 1000);

}
