let i = 0;

// Array di oggetti

const arrayOggetti = [
    {
        img: "img/01.jp",
        titolo: "Titolo 1",
        sottotitolo: "Sottotitolo 1"
    },
    {
        img: "img/02.jp",
        titolo: "Titolo 2",
        sottotitolo: "Sottotitolo 2"
    },
    {
        img: "img/03.jp",
        titolo: "Titolo 3",
        sottotitolo: "Sottotitolo 3"
    },
    {
        img: "img/04.jp",
        titolo: "Titolo 4",
        sottotitolo: "Sottotitolo 4"
    },
    {
        img: "img/05.jp",
        titolo: "Titolo 5",
        sottotitolo: "Sottotitolo 5"
    }
]

let currentTitle = document.getElementsByClassName('titolo-img')[i];

currentTitle.innerHTML = arrayOggetti[i].titolo;

let currentSubTitle = document.getElementsByClassName('sottotitolo-img')[i];

currentSubTitle.innerHTML = arrayOggetti[i].sottotitolo;





let currentImg = document.getElementsByClassName('slide')[i];

currentImg.classList.add('active');

let currentSlide = document.getElementsByClassName('slide-preview')[i];

currentSlide.classList.add('selected');

const btnUp = document.getElementById('upArr');

const btnDo = document.getElementById('doArr');

btnUp.addEventListener('click', function() {
    currentImg.classList.remove('active');
    currentSlide.classList.remove('selected');
    if(i == 0) {
        i = 4;
    } else {
        i--;
    }
    currentImg = document.getElementsByClassName('slide')[i];
    currentSlide = document.getElementsByClassName('slide-preview')[i];
    currentImg.classList.add('active');
    currentSlide.classList.add('selected');

    currentTitle = document.getElementsByClassName('titolo-img')[i];
    currentSubTitle = document.getElementsByClassName('sottotitolo-img')[i];
    currentTitle.innerHTML = arrayOggetti[i].titolo;
    currentSubTitle.innerHTML = arrayOggetti[i].sottotitolo;
    
});

btnDo.addEventListener('click', function() {
    currentImg.classList.remove('active');
    currentSlide.classList.remove('selected');
    if(i == 4) {
        i = 0;
    } else {
        i++;
    }
    currentImg = document.getElementsByClassName('slide')[i];
    currentSlide = document.getElementsByClassName('slide-preview')[i];
    currentImg.classList.add('active');
    currentSlide.classList.add('selected');

    currentTitle = document.getElementsByClassName('titolo-img')[i];
    currentSubTitle = document.getElementsByClassName('sottotitolo-img')[i];
    currentTitle.innerHTML = arrayOggetti[i].titolo;
    currentSubTitle.innerHTML = arrayOggetti[i].sottotitolo;

});