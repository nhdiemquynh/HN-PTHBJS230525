// 1. Khái niệm về Object (đối tương)
// Các thuộc tính của 1 sinh viên: mã sinh viên, tên, tuổi, địa chỉ, khoá học, ngành
// Là kiểu dữ liệu lưu trữ các thuộc tính của một đối tượng
//2. Cách khai báo object
let student = {
    id: 1,
    name: 'Quỳnh',
    age: 23,
    address: 'Hà Nội',
};
console.log('Log doi tuong student: ', student);

// 3. Thao tác với CRUD với kiểu dữ liệu
// R (Read one - Read All)
// Read one
// Cú pháp: object_name.key -> lấy ra được value tương ứng với key đó
console.log('Lấy giá trị của thuộc tính name', student.name);
// Read All
for (const key in student) {
    console.log(`${key}:${student[key]}`);
}
// C (Create) - Thêm mới thuộc tính cho đối tượng
student.email = 'nguyenhoangdiemquynh@gmail.com';
console.log('Sau khi thêm thuộc tính email', student);

// U (Update) - Thay đổi value cho thuộc tính (key) của đối tượng
student.age = 18;
console.log('Sau khi update tuổi', student);

// D (Delete) - Xoá một thuộc tính (key) của đối tượng
delete student.address;
console.log('Sau khi xoá thuộc tính address của đối tượng', student);