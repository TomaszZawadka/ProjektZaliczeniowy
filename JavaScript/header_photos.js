const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");
const counter = document.querySelector(".actual-slide");
const slide = document.querySelector(".slide");

const imgs = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_1tVtr7ymlsMSz1C8sfvFZE4IbVtsiLHgg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYUst9tLRVJeEK-f8alZy3sK-UCnitkX3vQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_ZI6SkYldW77pVz_Ei1BNbPvT-AIf4TIWg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5OiEHcwADVC3wnR7StK0dWm1xSphGBsstQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzqnC3YucPbR6AZvT9Cn2DK_JXt3edskGnA&usqp=CAU",
]

slide.src = imgs[0];
let i = 0;
navLeft.classList.add("unactive");
counter.textContent = `${i + 1}/${imgs.length}`;

slideLeft = () => {
    i--;
    counter.textContent = `${i + 1}/${imgs.length}`;
    slide.src = imgs[i];
    navRight.classList.remove("unactive");
    if (i === 0) {
        navLeft.classList.add("unactive");
    }
};

slideRight = () => {
    i++;
    counter.textContent = `${i + 1}/${imgs.length}`;
    navLeft.classList.remove("unactive");
    slide.src = imgs[i];
    if (i === imgs.length - 1) {
        navRight.classList.add("unactive");
    }
};

navLeft.addEventListener("click", slideLeft);
navRight.addEventListener("click", slideRight);