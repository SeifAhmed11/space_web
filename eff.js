// Header


let n1 =document.querySelector(".home");
let n2 =document.querySelector(".destination");
let n3 =document.querySelector(".Crew");
let n4 =document.querySelector(".Technology");

n2.remove();
n3.remove();
n4.remove();


function home() {
    n2.remove();
    n3.remove();
    n4.remove();
    document.body.appendChild(n1);
}

function destination() {
    n3.remove();
    n1.remove();
    n4.remove();
    document.body.appendChild(n2);
}

function Crew() {
    n1.remove();
    n2.remove();
    n4.remove();
    document.body.appendChild(n3);
}

function Technology() {
    n1.remove();
    n2.remove();
    n3.remove();
    document.body.appendChild(n4);
}

//planets


let m1 =document.querySelector(".Mooon");
let m2 =document.querySelector(".Marss");
let m3 =document.querySelector(".Euroopa");
let m4 =document.querySelector(".Titaan");

m2.remove();
m3.remove();
m4.remove();


function Mmoon() {
    m2.remove();
    m3.remove();
    m4.remove();
    document.body.appendChild(m1);
}

function Mmars() {
    m3.remove();
    m1.remove();
    m4.remove();
    document.body.appendChild(m2);
}

function Euuropa() {
    m1.remove();
    m2.remove();
    m4.remove();
    document.body.appendChild(m3);
}

function Titan() {
    m1.remove();
    m2.remove();
    m3.remove();
    document.body.appendChild(m4);
}
