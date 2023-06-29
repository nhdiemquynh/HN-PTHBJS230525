// Khai báo mảng một chiều có tên arrayInt
var arrayInt = [];

// Nhập 5 giá trị số nguyên từ bàn phím
for (var i = 0; i < 5; i++) {
    var value = parseInt(prompt("Nhập giá trị số nguyên:"));
    arrayInt.push(value);
}

// Hiển thị các giá trị phần tử của mảng
console.log(arrayInt);

// In các phần tử có giá trị chẵn và tính tổng
// Tìm các phần tử số chẵn
var evenNumbers = [];
for (var i = 0; i < arrayInt.length; i++) {
    if (arrayInt[i]%2==0) {
        evenNumbers.push(arrayInt[i]);
    }
}
console.log("Đây là các số chẵn:" + evenNumbers);
// Tính tổng số chẵn
var sumEvenNumbers = 0;
for (var i = 0; i < evenNumbers.length; i++) {
    sumEvenNumbers = sumEvenNumbers + evenNumbers[i];
}
console.log("Tổng của các số chẵn là:" + sumEvenNumbers);

// Tìm các phần tử số lẻ
var oddNumbers = [];
for (var i = 0; i < arrayInt.length; i++) {
    if (arrayInt[i]%2 != 0) {
        oddNumbers.push(arrayInt[i]);
    }
}
console.log("Đây là các số lẻ:" + oddNumbers);
// Tích số lẻ
var multiplyOddNumbers = 1;
for (var i = 0; i < oddNumbers.length; i++) {
    multiplyOddNumbers = multiplyOddNumbers * oddNumbers[i];
}
console.log("Tích của các số lẻ là:" + multiplyOddNumbers);


