////////////////////////////////////////////////////////



const menu = document.querySelector('.menu');

menu.onmouseover = menuShow;
menu.onmouseout = menuHide;

document.onkeydown = function (event) {

    if (event.code == 'Space') menuShow();

    if (event.code == 'Escape') menuHide();
}

function menuShow() {
    menu.style.top = 0;
}

function menuHide() {
    menu.style.top = '-12vh';

    setTimeout(function () {
        document.querySelector('.logo').style.display = 'none';
    }, 8000);

}

menuHide();

///////////////////////////////////////////////// 

document.oncontextmenu = () => {         //ContextMenu = off
    return false;
}


///////////////////       Create Page/Save content/ load content
document.querySelector('.createBtn').addEventListener('click', createPage);
const text = document.querySelector('.text');

text.addEventListener('keyup', storage);

function createPage(text) {
    let page = window.open();
    page.document.write(document.forms[0].elements[0].value);
    page.document.close();
}

function storage() {
    localStorage.setItem('createPage', this.value);
}

if (localStorage.getItem('createPage') !== null) {
    let q = localStorage.getItem('createPage');
    text.textContent = q;
}

let btnClean = document.querySelector('.btnClean');
btnClean.addEventListener('click', clean);

function clean() {
    localStorage.removeItem('createPage');
    document.location.reload();
}


//////////////////////////////////////////////////////////////

let body = document.getElementsByTagName('body')[0];


function check() {


    let checkBox = document.querySelector('#checkBox1');


    if (checkBox.checked == false) {
        body.classList.remove('bg-dark');
        text.classList.remove('bg-dark');
        text.style.color = 'black';

    } else {
        body.classList.add('bg-dark');
        text.classList.add('bg-dark');
        text.style.color = 'white';
    }

}


////////////////////////////////////////////////////////////


let btnColorPage = document.querySelector('#btn123');
btnColorPage.addEventListener('click', setTextColor);



function setTextColor(picker) {
    body.style.backgroundColor = '#' + picker;
    out.innerHTML = picker;


    localStorage.setItem('pageBg', picker);
    localStorage.setItem('fontBg', picker);
}


if (localStorage.getItem('pageBg') !== null) {
    let pageBg = localStorage.getItem('pageBg');
    body.style.backgroundColor = pageBg;
}


///////////////////////////////////////////////
var openFile = function (event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        var node = document.querySelector('.text');
        node.innerText = text;
        console.log(reader.result.substring(0, 200));
    };
    reader.readAsText(input.files[0]);
};

function previewFile() {
    var preview = document.querySelector('.img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}

/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////  

var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}
function updateFirst(event) {
    var p = document.querySelector(".text");

    if (p) {
        p.style.color = event.target.value;
    }
} function updateAll(event) {
    document.querySelector("p").forEach(function (p) {
        p.style.color = event.target.value;
    });
}



///////////////////////////////////////////////////////////////////////  Random Color


var el_up = document.getElementById('.text');
var rgbValue = [255, 0, 0];

function getforeGColor(rgb) {
    var cols = rgb.match(/^rgb\((\d+), \s*(\d+), \s*(\d+)\)$/);
    var b = 1;
    var rValue = cols[1];
    var gValue = cols[2];
    var bValue = cols[3];
    var rV = Math.floor((255 - rValue) * b);
    var gV = Math.floor((255 - gValue) * b);
    var bV = Math.floor((255 - bValue) * b);
    return 'rgb(' + rV + ', ' + gV + ', ' + bV + ')';
}

function setColor() {
    rgbValue[0] = Math.round(Math.random() * 255);
    rgbValue[1] = Math.round(Math.random() * 255);
    rgbValue[2] = Math.round(Math.random() * 255);
    var color = Math.round(((parseInt(rgbValue[0]) * 299) +
        (parseInt(rgbValue[1]) * 587) +
        (parseInt(rgbValue[2]) * 114)) / 1000);
    var backColor =
        'rgb(' + rgbValue[0] + ', ' + rgbValue[1] + ', '
        + rgbValue[2] + ')';

    var textColor = getforeGColor(backColor);
    $('#backG').css('color', textColor);
    $('#backG').css('background-color', backColor);
}

function GFG_Fun() {
    setColor();
}
