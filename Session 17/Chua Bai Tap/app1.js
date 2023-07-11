// Bài 1
// // Truy vấn các phần tử HTML sang JS
// let content = document.getElementById("content");
// let btnHide = document.getElementById("btn-hide");
// let btnShow = document.getElementById("btn-show");
// let toggle = document.getElementById("toggle");
// console.log(content, btnHide, btnShow, toggle);

// // Khi ấn btnHide thì content ẩn đi
// // B1: Gắn sự kiện cho btnHide
// btnHide.onclick = function() {
//     // B2: Để ẩn content thì sẽ style.display = 'none'
//     content.style.display = "none";
// };

// // Khi ấn btnShow thì content hiển thị
// // B1: Gắn sự kiện cho btnShow (addEventListener)
// // B2: Để hiển thị content thì sẽ style.display = '...'
// btnShow.addEventListener("click", function (){
//     content.style.display = "block";
// });

// // Làm sự kiện bật/tắt với button Toggle
// // Khi ấn button Ẩn thì text biến mất và nội dung button "Ẩn" -> "Hiện"
// // Khi ấn button Hiển thì text hiện ra và nội dung button "Hiện" -> "Ẩn"

// toggle.onclick = function () {
//     if(toggle.innerText == 'Ẩn') {
//         content.style.display = "none"; // Ẩn text
//         toggle.innerText = 'Hiện' // thay nội dung button ẩn -> hiện
//     } else {
//         content.style.display = "block" // Hiện text
//         toggle.innerText = "Ẩn" // thay nội dung button hiện -> ẩn
//     }
// }


// Bài 2
// let box = document.getElementsByClassName("box");
// let btnChange = document.getElementsByClassName("btn-change");
// console.log(box[0], btnChange[0]);

// btnChange[0].onclick = function () {
//     console.log('Kiem tra');
//     // Viet logic
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     console.log(r,g,b);
//     box[0].style.backgroundColor = `rgb(${r},${g},${b})`;
// }


// Bai 3
// let content = document.getElementById('content');
// let btnChange = document.getElementById('btn-change');
// console.log(content, btnChange);

// let size = 16;
// content.style.fontSize = `${size}px`;
// btnChange.onclick = function () {
//     if (size < 40) {
//         size = size + 2;
//         content.style.fontSize = `${size}px`;
//     } else if (size == 40) {
//         content.style.color = 'red';
//     }
// };

// Bai 4
let input = document.getElementById('input');
let btnAdd = document.getElementById('btn-add');
let ulElement = document.getElementById('list-item');
console.log(input, btnAdd);
btnAdd.onclick = function () {
    let inputValue = input.value;
    console.log('Lay gia tri input', inputValue);
    // B2: Tao ra 1 the li
    let li = document.createElement('li');
    //console.log(li);
    // B3: Them noi dung cho li
    li.innerText = "inputValue";
    //console.log(li);
    // B4: Them vao trong the ul
    ulElement.appendChild(li);
    input.value = '';
};