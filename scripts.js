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
          img = document.querySelector("img")
    let result
    for (let item of size){
        if (item.checked) {
            switch (item.value.toString()) {
                case 'S':
                    img.style.transform = "scale(0.9)";
                    result = "s"
                break;
                case 'M':
                    img.style.transform = "scale(1.1)";
                    result = "m"
                break;
                case 'L':
                    img.style.transform = "scale(1.4)";
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
function changeSize() {
    const choiseSize = document.querySelectorAll(".choiseSize")
    for (let item of choiseSize) {
        item.addEventListener('click', checkSize)
    }
    basketValue(checkPizzaName, checkSize);
}

function basketValue(pizza, size) {
    const price = document.querySelector(".price")
    console.log(price)
    for (let i = 0; menu.length > i; i++){  
        if (menu[i].name === pizza()){
            price.textContent = menu[i].price[size()]
        }
    // switch (pizza() === menu) {
    //     case 'S':
    //         img.style.transform = "scale(0.9)";
    //         result = "s"
    //     break;
    }
}    
const menu = [
    {
        name: "Маргарита",
        price : {
        s: "4.5$",
        m: "5.5$",
        l: "6.5$"
        },
        checked:true,
},  
    {
        name: "Пепперони",
        price : {
        s: "5.8$",
        m: "6.8$",
        l: "7.8$",
    },
        checked:false,
}
];

console.log(checkSize())
console.log(checkPizzaName())
rotateWord(2);
rotateSymbol(1.5)
checkSize()
checkPizzaName()
basketValue (checkPizzaName, checkSize)
window.addEventListener('click', changeSize())

