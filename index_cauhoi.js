// câu hỏi
let million1 = new Millioaire(' Trong Javascript sự kiện Onclick xảy ra khi nào? ', 'Khi một đối tượng trong form mất focus', 'Khi một đối tượng trong form có focus', 'Khi click chuột vào một đối tượng trong form', 'Khi click chuột vào nút lệnh', 'anwer4');
let million2 = new Millioaire('Thẻ < input type=\'text\'> dùng để làm gì?', 'Tạo một ô text để nhập dữ liệu 1 dòng', ' Tạo một ô password', ' Tạo một  textbox cho phép nhập liệu nhiều dòng', ' Tất cả các ý trên', 'anwer1');
let million3 = new Millioaire(' Lệnh lặp for có dạng như thế nào?', ' for ( biến = Giá trị đầu; Giá trị tăng; điều kiện)', 'for ( biến = Giá trị đầu; Điều kiện; Giá trị tăng) ', ' for ( biến = Điều kiện; Giá trị tăng; Giá trị cuối)', 'Tất cả các dạng trên', 'anwer2');
let million4 = new Millioaire('Vòng lặp While là dạng vòng lặp? ', 'Không xác định và xét điều kiện rồi mới lặp  ', 'Không xác định và  lặp rồi mới xét điều kiện ', 'Cả hai dạng trên', 'Không tồn tại dạng nào ở trên', 'anwer1');
let million5 = new Millioaire(' Lệnh break kết hợp với vòng for dùng để?', 'Không có ý nghĩa trong vòng lặp ', 'Nhảy đến một tập lệnh khác ', 'Ngưng vòng for nếu gặp lệnh này ', '   Không thể kết hợp được', 'anwer3');
let million6 = new Millioaire('Hàm alert() dùng để làm gì? ', 'Dùng để hiện một thông báo nhập ', 'Dùng để chuyển đổi số sang chữ ', 'Tất cả các dạng trên', 'Dùng để hiện một thông điệp ', 'anwer4');
let million7 = new Millioaire(' ', ' ', ' ', '', '', 'anwer2');
let million8 = new Millioaire(' ', ' ', ' ', '', '', 'anwer2');

let rount = 0;

start();


function start() {
    rount = 1;
    if (rount == 1) {
        document.getElementById('cau').innerHTML = 'Câu: ' + rount + ' ';
        document.getElementById('question').innerHTML = million1.question;
        document.getElementById('anwer1').innerHTML = million1.answer1;
        document.getElementById('anwer2').innerHTML = million1.answer2;
        document.getElementById('anwer3').innerHTML = million1.answer3;
        document.getElementById('anwer4').innerHTML = million1.answer4;
    }
}

function next() {
    rount += 1;
    document.getElementById('cau').innerHTML = 'Câu' + rount + ':  ';
    if (rount == 2) {
        document.getElementById('question').innerHTML = million2.question;
        document.getElementById('anwer1').innerHTML = million2.answer1;
        document.getElementById('anwer2').innerHTML = million2.answer2;
        document.getElementById('anwer3').innerHTML = million2.answer3;
        document.getElementById('anwer4').innerHTML = million2.answer4;
    }
    if (rount == 3) {
        document.getElementById('question').innerHTML = million3.question;
        document.getElementById('anwer1').innerHTML = million3.answer1;
        document.getElementById('anwer2').innerHTML = million3.answer2;
        document.getElementById('anwer3').innerHTML = million3.answer3;
        document.getElementById('anwer4').innerHTML = million3.answer4;
    }
    if (rount == 4) {
        document.getElementById('question').innerHTML = million4.question;
        document.getElementById('anwer1').innerHTML = million4.answer1;
        document.getElementById('anwer2').innerHTML = million4.answer2;
        document.getElementById('anwer3').innerHTML = million4.answer3;
        document.getElementById('anwer4').innerHTML = million4.answer4;
    }
    if (rount == 5) {
        document.getElementById('question').innerHTML = million5.question;
        document.getElementById('anwer1').innerHTML = million5.answer1;
        document.getElementById('anwer2').innerHTML = million5.answer2;
        document.getElementById('anwer3').innerHTML = million5.answer3;
        document.getElementById('anwer4').innerHTML = million5.answer4;
    }
    if (rount == 6) {
        document.getElementById('question').innerHTML = million6.question;
        document.getElementById('anwer1').innerHTML = million6.answer1;
        document.getElementById('anwer2').innerHTML = million6.answer2;
        document.getElementById('anwer3').innerHTML = million6.answer3;
        document.getElementById('anwer4').innerHTML = million6.answer4;
    }
    document.getElementById('next').innerHTML = '';
}

function anwer(id) {
    if (rount == 1) {
        if (id === million1.checkAnwer) {
            alert('yes')
            let str = ` <button onclick="next()">Câu Tiếp Theo</button>`
            document.getElementById('next').innerHTML = str;
            let str_1 = 100;


        } else {

            alert('Bạn đã trả lờn sai ')
            rount = 1;
            start();
        }
    }
    if (rount == 2) {
        if (id === million2.checkAnwer) {
            alert('yes')
            let str = ` <button onclick="next()">Câu Tiếp Theo</button>`
            document.getElementById('next').innerHTML = str;
        } else {
            alert('Bạn đã trả lờn sai ')
            rount = 1;
            start();
        }
    }
    if (rount == 3) {
        if (id === million3.checkAnwer) {
            alert('yes')
            let str = ` <button onclick="next()">Câu Tiếp Theo</button>`
            document.getElementById('next').innerHTML = str;
        } else {
            alert('Bạn đã trả lờn sai ')
            rount = 1;
            start();
        }
    }
    if (rount == 4) {
        if (id === million4.checkAnwer) {
            alert('yes')
            let str = ` <button onclick="next()">Câu Tiếp Theo</button>`
            document.getElementById('next').innerHTML = str;
        } else {
            alert('Bạn đã trả lờn sai ')
            rount = 1;
            start();
        }
    }
    if (rount == 5) {
        if (id === million5.checkAnwer) {
            alert('yes')
            let str = ` <button onclick="next()">Câu Tiếp Theo</button>`
            document.getElementById('next').innerHTML = str;
        } else {
            alert('Bạn đã trả lờn sai ')
            rount = 1;
            start();
        }
    }
    if (rount == 6) {
        if (id === million6.checkAnwer) {
            alert('yes')
            let str = ` <button onclick="next()">Câu Tiếp Theo</button>`
            document.getElementById('next').innerHTML = str;
        } else {
            alert('Bạn đã trả lờn sai ')
            rount = 1;
            start();
        }
    }

}

//Button dùng cuộc chơi
function over() {
    let str = `<button class="end" onclick="choilai()" style="background-color: red;width:80px;height: 30px ;border-radius: 5px;text-align: center;font-size: 16px">Chơi Lại</button><div class="end" style="background-color: cadetblue;width: 700px;height: 100px;text-align: center; font-weight: bold;   line-height: 60px;text-align: center;">Bạn Nhận được số tiền thưởng là 1000$</div>`
    document.getElementById('reset').innerHTML = str;


}

function choilai() {
    start();
    document.getElementById('reset').innerHTML = ' ';
}