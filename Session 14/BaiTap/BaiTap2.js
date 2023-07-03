// Chu vi hinh tron Circumference = 2pr
// Dien tich hinh tron Area = pr^2

var p = 3.14;
function circumference(p,r) {
    return 2*p*r;
}

function area(p,r) {
    return p * (r**2);
}

var r = Number(prompt('Type in the radius'));
var circumference = 2*p*r;
var roundedCircumference = circumference.toFixed(2); // toFix(number) -> làm tròn đến number số thập phân
var area = p*(r**2);
document.write(`Chu vi hình tròn là ${roundedCircumference} và Diện tích hình tròn là ${area}`);