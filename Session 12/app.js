// Hàm - Function
// 1. Hàm là gì?
// - Hàm là một khối lệnh thực hiện 1 nhiệm vụ cụ thể (tính tổng, ktra số nguyên tố, tìm chẵn lẻ)
// - Hàm có thể được tái sử dụng để giúp nâng cao hiệu suất và để bảo trì (maintenance)

// 2. Phân loại hàm
// Có 2 dạng: Hàm được xây dựng sẵn và Hàm tự định nghĩa
// - Hàm có sẵn: split(), sort(), map(), concat(),...
// - Hàm tự định nghĩa: là hàm mà người dùng tự xây dựng

// 3. Các tính chất của hàm
// - Thực thi và định nghĩa (khởi tạo)
// - Hàm không tự thực thi khi định nghĩa
// - Hàm chỉ thực thi khi gọi
// - Hàm có thể nhận vào 1 hay nhiều tham số
// - Hàm có thể trả về 1 giá trị (return)
// *** Mọi câu lệnh sau từ khoá return ở trong khối code đó sẽ bị vô hiệu hoá (không có tác dụng)
// function sum(a, b) {
//     return a, b;
// }
// console.log(sum(1, 2));

// 4. Cách khai báo hàm
// - Declaration function: có thể thực thi trước khi khởi tạo, liên quan đến thuật toán Hoisting - chuyển mọi khai báo lên đầu tiên
// VD: Đặt tên hàm theo quy tắc camelCase
// Bước định nghĩa hàm
// Khi định nghĩa hàm thì gọi là tham số (parameter)
// hello("Hello thay", "Hello cac ban", "Hello Quynh");
// function hello(message1, message2, a) {
//     console.log(message1);
//     console.log(message2);
//     console.log(a);
// }
// Gọi hàm
// Khi gọi thì truyền đối số (argument), số lượng arguments phải bằng với số lương của parameters
// tinhTong("Hello thay", "Hello cac ban", "Hello Quynh");

// - Expression function: không thể thực thi trước khi khởi tạo hàm
// + Sử dụng từ khoá var, let, const đều được
// let people = function () {
//     console.log("Hello Quỳnh");
// };
// people();

// var helloPeople = function (message1, message2) {
//     console.log(message1);
//     console.log(message2);
// }
// helloPeople("Hello thay", "Hello cac ban");
// - Arrow function (ES6)