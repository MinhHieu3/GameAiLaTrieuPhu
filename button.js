function over() {
    // let str = `<button class="end" onclick="choilai()">Chơi Lại</button> <div class="resets" id="end"></div>`
    // document.getElementById('reset').innerHTML = str;
    let str = `<button id='luu' onclick="luuDiem()">Lưu Điểm</button><input  type="text" id="people">`
    document.getElementById('en').innerHTML = str;
    // document.getElementById('end').innerHTML = 'Bạn Nhập được phần thưởng là :  ' + playerPoint + '$';
    // document.getElementById('next').innerHTML = ' ';
    // document.getElementById('result').innerHTML=' Rất Tiếc Bạn Đã Trả Lời Sai';


}

let playerPoint = 0;
// let point = [];
// localStorage.setItem('a', JSON.stringify(point))
// let arr = JSON.parse(localStorage.getItem('user'))
function luuDiem() {
    let name = document.getElementById('people').value
    let str = `<button class="end" onclick="choilai()">Chơi Lại</button> <div class="resets" id="end"></div>`
    document.getElementById('reset').innerHTML = str;
    document.getElementById('end').innerHTML = 'Bạn Nhập được phần thưởng là :  ' + playerPoint + '$';
    if (name && !isNaN(playerPoint)) {
        let arr = JSON.parse(localStorage.getItem('user')) || [];
        arr.push({name, playerPoint})

        arr.sort(function (a,b) {
            return b.playerPoint-a.name;
        });
        arr=arr.slice(0,5);
        localStorage.setItem("arr",JSON.stringify(arr));
        // console.log(arr)
        var danhSach = document.getElementById("danhsach");
        danhSach.innerHTML = ' ';

        arr.forEach(function(nguoi, index) {
            var listItem = document.createElement("li");
            listItem.textContent = "Người chơi " + (index + 1) + ": " + nguoi.name + " - Điểm: " + nguoi.playerPoint;
            danhSach.appendChild(listItem);
        });


    }

}
// function ds() {
//     let danhsach=document.getElementById('danhsach');
//     danhsach.innerHTML='';
//
//     arr.forEach(function (nguoi,index) {
//         let listItem=document.createElement('li');
//         listItem.textContent = 'Người Chơi ' +(index+1) +":"+nguoi.name+'-Điểm'+nguoi.playerPoint;
//         danhsach.appendChild(listItem);
//     })
//
//
// }
let arr=JSON.parse(localStorage.getItem('arr'))||[];
function choilai() {
    document.getElementById('money').innerHTML = playerPoint + '$';
    document.getElementById('result').innerHTML = ' ';
    document.getElementById('reset').innerHTML = ' ';
    document.getElementById('en').innerHTML = ' ';
    // let str = `<button class="luu" onclick="luuDiem()">Lưu Điểm</button><input class="luu" type="text" id="people">`
    // document.getElementById('en').innerHTML = str;
    // arr.push(playerPoint);
    // localStorage.setItem('a', JSON.stringify(arr))
    // console.log(arr);
    playerPoint = 0;
    start();
     return playerPoint = 0;
}
