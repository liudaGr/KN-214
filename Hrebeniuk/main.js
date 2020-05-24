window.onscroll = function showHeader() {
    
    var header = document.querySelector('.header__inner');
    if(window.pageYOffset > 300) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
}

let button1 = document.getElementById("theme1");
let button2 = document.getElementById("theme2");
let light = true;

let dark = {
    picture: "url('BackDark.jpg') center no-repeat",

}
let light = {
    picture: "url('Back.jpg') center no-repeat",
    
}

function change(dark) {
    let back = document.querySelector(".intro");
    back.style.background = dark.picture;
}

button1.addEventListener("click", function() {
    change(dark);
    light = false;
    button1.style.display = "none";
    button2.style.display = "block";
})
