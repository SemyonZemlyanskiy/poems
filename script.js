const like1 = document.querySelectorAll('.like1');
const item1 = document.querySelector('.item1');
let i = 0;

item1.addEventListener('click', () => {
    i++;
    if (i >= like1.length) {
        like1[i-1].classList.add("none");
        i=0;
        like1[i].classList.remove("none");
    }
    else {
        like1[i].classList.remove("none");
        like1[i-1].classList.add("none");
    }
})
const like2 = document.querySelectorAll('.like2');
const item2 = document.querySelector('.item2');
let i1 = 0;
let i2 = 0;
item2.addEventListener('click', () => {
    i1++;
    if (i1 >= like2.length) {
        like2[i1-1].classList.add("none");
        i1=0;
        like2[i1].classList.remove("none");
    }
    else {
        like2[i1].classList.remove("none");
        like2[i1-1].classList.add("none");
    }
})
const like3 = document.querySelectorAll('.like3');
const item3 = document.querySelector('.item3');

item3.addEventListener('click', () => {
    i2++;
    if (i2 >= like3.length) {
        like3[i2-1].classList.add("none");
        i2=0;
        like3[i2].classList.remove("none");
    }
    else {
        like3[i2].classList.remove("none");
        like3[i2-1].classList.add("none");
    }
})
