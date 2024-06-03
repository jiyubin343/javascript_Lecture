const reviewList = [
    {
        id: 1,
        name: "1",
        type: "indoor",
        img: "버.jpg",
        text: "벙성"
    },
    {
        id: 2,
        name: "2",
        type: "indoor",
        img: "빠른 속사정 .jpg",
        text: "벙성"
    },
    {
        id: 3,
        name: "3",
        type: "indoor",
        img: "알파카.jpg",
        text: "벙성"
    }
]

const mainImg = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentTndex = 1;

window.addEventListener("DOMContentLoaded", function() {
    let item = reviewList[currentTndex];
    mainImg.src = item.img;
    foodName.textContent = item.name
    tyoe.textContent = item.type
    info.textContent = item.text
})

function showReview(index) {
    const item = reviewList[index];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
}

preBtn.addEventListener("click", function() {
    currentTndex--;
    if (currentTndex < 0) {
        currentTndex = reviewList.length -1
    }
    showReview(currentTndex);
})

nextBtn.addEventListener("click", function() {
    currentTndex++;
    if (currentTndex >= reviewList.length) {
        currentTndex = 0
    }
    showReview(currentTndex);
})