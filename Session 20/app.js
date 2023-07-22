// 1. Var, let, const (MD2)
// Từ khoá var
// - Hoisting là nó chuyển khai báo lên trên cùng
// console.log("Trước khi khai báo", a); // undefined
// var a = 10;
// console.log("Sau khi khai báo", a); // 10
// var a = "Hello World";
// console.log("Sau khi khai báo và gán lại giá trị", a);
// Phạm vi biến
// var b = 10;
// function test () {
//     var b = 5;
//     console.log("Trong hàm", b);
// }
// console.log("Ngoài hàm", b);
// test();

// Từ khoá let
// console.log(a); // Lỗi: ko truy cập đc a trước khi nó được khởi tạo
// let a = 10;
// console.log(a);
// a = 5; // Không thể khai báo lại nhưng có thể gán lại
// console.log("Sau khi gán lại giá trị", 5);
// Phạm vi biến với từ khoá let
// let b = 10;
// function test2 () {
//     let b = 5;
//     console.log("Trong hàm", b);
// }
// console.log("Ngoài hàm", b);
// test2();

// const
// console.log("Trước khi khai báo", a); // lỗi
// const a = 10;
// console.log("Sau khi khai báo", a); // 10
// a = 12;
// console.log("Sau khi gán lại giá trị", a);
// => Không thể khai báo cũng như gán lại giá trị
// Bài tập: 
// var x = 10;
// one();
// function one() {
//   var y = 5;
//   two();
//   function two() {
//     var z = 15;
//     three();
//     function three() {
//       var t = x + y + z;
//       console.log(`1. x + y + z = ${t}`);//30
//       four();
//     }
//   }
// }
// Declaration Function
// function four() {
//   var t = 30;
//   console.log(`2. x = ${x}`); // 10
//   console.log(`3. y = ${y}`); // Lỗi
//   console.log(`4. z = ${z}`); // Lỗi
//   console.log(`5. t = ${t}`); // 30 
// }

// 2. Template Literals (template string)
// let name = "Nguyễn Văn A";
// let age = 30;
// // Output "Tên: Nguyễn Văn A, Tuổi : 30"
// console.log(`Ten: ${name}, Tuoi: ${age}`)
// 3. Class => Trong bài Object
// Các tính chất của OOP (Lập trình hướng đối tượng)
// Tính đóng gói - đa hình - trừu tượng - kế thừa
// class User {
//     contructor(id, name, age){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }
// let User1 = new User(1, "Nguyễn Văn A", 18);
// console.log(User1);
// // Xây dựng user admin (kế thừa từ lớp User)
// class Admin extends User {
//     constructor(id,name,age){
//         //Phương thức super
//         super(id,name,age);
//     }
// }
// let admin1 = new Admin(2, "Nguyễn Admin", 20);
// console.log(admin1);

// 4. Arrow Function (MD2)
// Declaration Function: có thể thực thi trước khi khai báo
// Expression Function: chỉ có thể thực thi sau khi khai báo
// let sum = function tinhTong(a, b) {
//     return a + b;
// }
// a = 1; b = 2
// console.log(sum(1, 2));
// Arrow Function
// C1: Ko có ngoặc nhọn let sum1 = (a,b) => a + b;
// C2: Có ngoặc nhon let sum1 = (a,b) => {
//     return a + b;
// }
// console.log(sum1(1, 2));

// 5. Spread Operation (MD2) => Array
// VD: Cho 2 mảng sử dụng spread operator để gộp 2 mảng
// let a = [1,2,3];
// let b = [4,5,6];
// C1: sử dụng concat
// let result = a.concat(b);
// console.log(result);

// C2: Sử dụng push
// for (let i = 0; i < b.length; i++) {
//     a.push(b[i]);
// }
// console.log(a);

// C3: Sử dụng toán tử ... (Spread Operator)
// let result = [...a]; // clone array - sao chép lại mảng a
// console.log(result);
// result = [...a,b]; // [1,2,3,[4,5,6]]
// result = [...a, ...b]; // [1,2,3,4,5,6]

// VD2: 
// let a2 = [1,2,3];
// let a1 = a2; // Gán a1 = a2 => chung vùng nhớ
// a3 = [...a2]; // Sao chép lại a2 => ghi vào 2 vùng nhớ
// a2.push(4);
// console.log(a1); //[1,2,3,4]
// console.log(a3); //[1,2,3]

// 6. Rest Parameter
// Là tham số đại diện cho các tham số không đc khai báo khi khởi tạo hàm
// Sử dụng function lúc thực thi sẽ ko bị giới hạn đối số truyền vào
// function printNumber(a,b, ...c) {
//     console.log(a); //1
//     console.log(b); //2
//     console.log(c); //[1, 2, 3,4,5, "Hello World"]
// }
// printNumber(1, 2, 3,4,5, "Hello World");

// 7. Destructuring (MD2) - Phá vỡ cấu trúc
// với mảng []
let array = [1,2,3,4];
//console.log(array[1]);
// let [a,b,c,d,e] = array;
// console.log(a,b,c,d,e); //1 2 3 4 undefined
// let [a,,c,d,e] = array;
// console.log(a,c,d,e); //1 3 4 undefined
// let [a,b,...rest] = array;
// console.log(rest); //[3,4]

// // Với Object{} (MD2)
// let student = {
//     id: 1,
//     name: 'Nguyễn Văn A',
//     age: 20,
//     email: 'A@gmail.com',
// };
// // Lấy value các thuộc tính của đối tượng Student
// // student.id, student.age, ....

// let {id,name,age,email} = student;
// console.log(id, name, age, email);

// 8. Tìm hiểu các hàm có sẵn: map, find, findIndex, forEach, reduce