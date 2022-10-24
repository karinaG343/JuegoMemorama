const primerImg = document.getElementById('imagen1'), seguImg = document.getElementById('imagen2'), terImg = document.getElementById('imagen3'), cuaImg = document.getElementById('imagen4',
quinImg = document.getElementById('imagen5'), sexImg = document.getElementById('imagen6'), sepImg = document.getElementById('imagen7'), octImg = document.getElementById('imagen8'));
const myTimeout = setTimeout(cambiarImagen, 3000);

primerImg.addEventListener("click", cambiarImagen);
seguImg.addEventListener("click", cambiarImagen2);
terImg.addEventListener("click", cambiarImagen3);
cuaImg.addEventListener("click", cambiarImagen4);
quinImg.addEventListener("click", cambiarImagen5);
sexImg.addEventListener("click", cambiarImagen6);
sepImg.addEventListener("click", cambiarImagen7);
octImg.addEventListener("click", cambiarImagen8);

function cambiarImagen() {
    primerImg.innerHTML = "<img src='img/anabell.jpg' height:'120px' width='120px'>";
    clearTimeout(myTimeout);
}

function cambiarImagen2() {
    seguImg.innerHTML = "<img src='img/bruja.jpg' height:'120px' width='120px'>";
}

function cambiarImagen3() {
    terImg.innerHTML = "<img src='img/catrina.jpg' height:'120px' width='120px'>";
}

function cambiarImagen4() {
    cuaImg.innerHTML = "<img src='img/chuky.jpg' height:'120px' width='120px'>";
}

function cambiarImagen5() {
    quinImg.innerHTML = "<img src='img/it.jpg' height:'120px' width='120px'>";
}

function cambiarImagen6() {
    sexImg.innerHTML = "<img src='img/krueger.jpg' height:'120px' width='120px'>";
}

function cambiarImagen7() {
    sepImg.innerHTML = "<img src='img/myers.jpg' height:'120px' width='120px'>";
}

function cambiarImagen8() {
    octImg.innerHTML = "<img src='img/saw.jpg' height:'120px' width='120px'>";
}

setTimeout
