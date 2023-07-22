// Storage
// LocalStorage
// Là một đối tượng để lưu trữ dữ liệu, không bị mất dữ liệu khi F5 hoặc tắt trình duyệt
// 1. Các phương thức làm việc với localStorage
// 1.1 setItem (Thêm dữ liệu vào localStorage)
localStorage.setItem('name','Nguyen Van A');
localStorage.setItem('age',16);
localStorage.setItem('name','Nguyen Van B'); // Ghi đè value của key name
// localStorage.setItem("students",{name: 'Nguyen Xuan Bach'});

// 1.2 getItem (lấy dữ liệu từ localStorage)
localStorage.getItem('name');
console.log(localStorage.getItem('name')); //string
console.log(localStorage.getItem('age')); // string

// 1.3 removeItem (xoá dữ liệu trong localStorage)
localStorage.removeItem("students");

// 1.4 clear (xoá toàn bộ dữ liệu trong localStorage)
localStorage.clear();

// 2. Chuyển đổi kiểu dữ liệu (JSON.stringify và JSON.parse)
let students = [
    {id: 1, name: 'Nguyen Van A', age: 20},
    {id: 2, name: 'Nguyen Thi B', age: 25},
];
// Thêm dữ liệu student vào trong localStorage
// Sử dụng JSON.stringify chuyển đổi [object Object] -> string
localStorage.setItem('students', JSON.stringify(students));
// Lấy dữ liệu students từ trong localStorage
console.log(localStorage.getItem('students')); //string
// Sử dụng JSON.parse để chuyển đổi string -> [object Object]
console.log(JSON.parse(localStorage.getItem('students')));




// SessionStorage
// Là một đối tượng để lưu trữ dữ liệu, sẽ bị mất khi kết thúc phiên làm việc (Tắt trình duyệt)
// Cookie