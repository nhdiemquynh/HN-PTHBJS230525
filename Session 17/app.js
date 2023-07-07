// DOM là gì? Document Object Model - Mô hình tài liệu đối tượng 
// 1. Truy xuất các phần tử HTML (lấy các phần tử HTML sang bên JS)
// Có 5 cách để truy xuất:
// - Cách 1: Truy xuất theo ID
// let demo1 =  document.getElementById('demo-1');
// console.log('Truy xuất theo ID', demo1);

// // - Cách 2: Truy xuất theo class
// let demoClass = document.getElementsByClassName('demo');
// console.log('Truy xuất theo class', demoClass);

// // - Cách 3: Truy xuất thông qua tagname
// let demoTagName = document.getElementsByTagName('div');
// console.log('Truy xuất theo tagName', demoTagName);

// // - Cách 4: Truy xuất thông qua querySelector -> lấy ra phần tử đầu tiên trong html (. dùng cho class; # dùng cho ID)
// let demoQuery = document.querySelector('.demo');
// console.log('Truy xuất theo query với class', demoQuery);

// // - Cách 5: Truy xuất thông qua querySelectorAll
// let demoQueryAll = document.querySelectorAll('.demo');
// console.log('Truy xuất theo queryAll với class', demoQueryAll);

// 2. Thao tác thay đổi các thuộc tính trong HTML element
// 2.1 Lấy content trong HTML Element (innerText, textContent, innerHTML)
// let container = document.getElementById("container");
// let demo1 = document.getElementById("demo-1");
// console.log("innerText =>", container.innerText);
// demo1.innerText = 'Nguyen Hoang Diem Quynh';
// console.log("innerText =>", demo1.innerText);

// console.log("textContent =>", container.textContent);

// let a = 10;
// let b = 20;
// let c = 30;
// container.innerHTML = `<li id="demo-1" class="demo">${a}</li>
// <li id="demo-2" class="demo">${b}</li>
// <li id="demo-3" class="demo">${c}</li>`
// console.log("innerHTML =>", container.innerHTML);

    // innerText, textContent và innerHTML đều lấy nội dung bên trong thẻ. Tuy nhiên:
    // 1. innerText: lấy nội dung nhưng không lấy khoảng trắng giữa các nội dung
    // 2. textContent: lấy nội dung và cả khoảng trắng
    // 3. innerHTML: lấy cả nội dung và cả thẻ của phần tử con bên trong (nếu có)

// 2.2 Set và lấy các Attribute (thuộc tính) của các HTML Element
// let demo1 = document.getElementById('demo-1');
// demo1.setAttribute('style', 'color:red'); // thêm thuộc tính style vào trong thẻ demo-1, với giá trị tương ứng là color:red
// demo1.getAttribute('class');
// console.log(demo1.getAttribute('class')); // sẽ trả về giá trị tương ứng với attribute (thuộc tính)

// 2.3 Các thuộc tính CSS (Các thuộc tính sẽ viết theo quy tắc camelCase)
// let demo1 = document.getElementById('demo-1');
// demo1.style.fontSize = '20px'; // Viết theo kebab-case
// demo1.style.color = 'yellow'; 
// demo1.style.display = 'none';

// 3. Event (Sự kiện)
let demo1 = document.getElementById('demo-1');
let btnChange = document.getElementById('btn-change');
console.log(btnChange, demo1);

// Bài Toán: Khi click button change thì:
// 1. Đổi text chữ Demo1 -> Xin chào các bạn
// 2. Đổi màu text -> Màu đỏ
// 3. Tăng kích thước chữ -> 50px

// btnChange.onclick = function () {
//     // console.log('Haha');
//     demo1.innerText = "Xin chào các bạn";
//     demo1.style.color = "red";
//     demo1.style.fontSize = "50px";
// };

function handleClick(){
    demo1.innerText = "Xin chào các bạn";
    demo1.style.color = "red";
    demo1.style.fontSize = "50px";
}