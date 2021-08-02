const menu = [
    {
        name: "Маргарита",
        ingredients: "моцарелло, соус томаты пелатин, свежий базилик",
        price : {
        s: "4,5$",
        m: "5,5$",
        l: "6,5$"
        },
        checked:true,
},  
    {
        name: "Пепперони",
        ingredients: "моцарелло, соус томаты пелатин, пепперони",
        price : {
        s: "5,8$",
        m: "6,8$",
        l: "7,8$",
    },
        checked:false,
}
];
function rotateWord(value) {
    const menuInner = document.querySelectorAll(".menuCircle_inner");
    
    deg = -65;
    for (let item of menuInner){
        item.style.transform = `rotate(${deg}deg)`;
        deg += value;
    }

    return value;
}
function rotateSymbol(value) {
    const menuContent = document.querySelectorAll(".menuCircle_content");
    
    deg = 0;
    for (let item of menuContent){
        item.style.transform = `rotate(${deg}deg)`;
        deg += value;
    }
}
function checkSize () {
    const size = document.querySelectorAll("input"),
          img = document.getElementsByTagName("img")
    let result
    for (let item of size){
        if (item.checked) {
            switch (item.value.toString()) {
                case 'S':
                    img[slideIndex - 1].style.transform = "scale(0.9)";
                    result = "s"
                break;
                case 'M':
                    img[slideIndex - 1].style.transform = "scale(1.1)";
                    result = "m"
                break;
                case 'L':
                    img[slideIndex - 1].style.transform = "scale(1.2)";
                    result = "l"
                break;
            }
        }
    }
    return result
}
function checkPizzaName() {
    const currentNamePizza = document.querySelector(".currentNamePizza");
    let result
    for (let i = 0; menu.length > i; i++){ 
        if (menu[i].name === currentNamePizza.children[0].innerHTML){
        menu[i].checked = true
        result = menu[i].name
        }
    }
    return result
}


function basketValue(pizza, size) {
    const price = document.querySelector(".price")
    // pizza()
    // size()
    for (let i = 0; menu.length > i; i++){  
        if (menu[i].name === pizza()){
            price.textContent = menu[i].price[size()]

        }
    }
}  
//Slide pizza
let slideIndex = 1,
    navLeft = document.querySelector(".left"),
    navRight = document.querySelector(".right")
function showSlider(n) {
    let sliderItem = document.querySelectorAll('.slider-item'),
        name = document.querySelector('.name'),
        ingredients = document.querySelector('.ingredients')
    sliderItem.forEach(item => item.style.display = 'none')
    if (n > sliderItem.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = sliderItem.length
    }
    name.textContent = menu[slideIndex - 1].name
    ingredients.textContent = menu[slideIndex - 1].ingredients
    sliderItem[slideIndex - 1].style.display = 'block'

}
function plusSlideIndex(n){
    showSlider(slideIndex += n)
}
navLeft.addEventListener('click', () => plusSlideIndex(-1))
navRight.addEventListener('click', () => plusSlideIndex(1))

showSlider (slideIndex)

rotateWord(2);
rotateSymbol(1.5)
checkSize()
checkPizzaName()
basketValue (checkPizzaName, checkSize)

document.querySelectorAll('.choiseSize')
.forEach(item=> item.addEventListener('click',
 ()=>basketValue (checkPizzaName, checkSize) ))
