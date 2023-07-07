// Bài 1
let people = {
    name: 'Nguyen Hoang Diem Quynh',
    age: 23,
    address: 'Ha Noi',
    phone: '0837622676',
}
console.log(people);
console.log(people.name);

// Bài 2
let student = {
    id: 1,
    name: 'Nguyễn Văn A',
    gender: 'Nam',
    age: 20,
    mark: 8,
};

let newStudent = {
    id: 2,
    name: 'Nguyễn Văn B',
    gender: 'Nam',
    age: 20,
    mark: 9,
};

let students = [];
students.push(student, newStudent);
console.log(students);

// Bài 3
let check = -1;

let max = students[0].mark;
for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= max) {
        max = students[i].mark;
        check = i;
    }
}
console.log(students[check]);

let findIndex = students.findIndex((element) => element.mark == max); // element là từng phần tử trong mảng students
console.log(findIndex);
console.log(students[findIndex]);

// Bài 4
let newStudent2 = {
    id: 2,
    name: 'Nguyễn Văn C',
    gender: 'Nam',
    age: 24,
    mark: 9,
};

students.push(newStudent2);
console.log('Sau khi thêm sinh viên thứ 3', students);
//B1: Tính tổng điểm các học sinh
let sum = 0;
for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].mark
}
let average = sum/students.length
console.log(average);

if(average > 7.5) {
    console.log('Lớp khá');
} else if (5 < average && average < 7.5) {
    console.log('Lớp trung bình');
} else {
    console.log('Lớp yếu');
}

