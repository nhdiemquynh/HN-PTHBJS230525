// Bai 1: An, hien button
let text = document.getElementById("text");
let btnHideText = document.getElementById("btnHideText");
let btnShowText = document.getElementById("btnShowText");
// console.log(text1, btnHideText, btnShowText);

btnHideText.onclick = function (){
    text.style.display = 'none';
};

btnShowText.onclick = function (){
    text.style.display = 'block';
};

// Bai 2: Bam nut doi mau background
let clickOne = true;
let btnChange = document.getElementById("btnChange");
btnChange.onclick = function (){
    if (clickOne == true) {
        document.body.style.backgroundColor = 'lightblue';
        clickOne = false;
    } else {
        document.body.style.backgroundColor = 'white';
        clickOne = true;
    };
};

// Bai 3: 
let text2 = document.getElementById("text-2");
let btnZoomIn = document.getElementById("btnZoomIn");
btnZoomIn.onclick = function (){
    text2.style.fontSize = '40px';
    text2.style.color = 'red';
}
