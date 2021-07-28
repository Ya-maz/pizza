function rotateWord(value) {
    const menuInner = document.querySelectorAll(".menuCircle_inner");
    
    deg = -65;
    for (let item of menuInner){
        item.style.transform = `rotate(${deg}deg)`;
        deg += value;
    }

    return value;
}
rotateWord(2);

function rotateSymbol(value) {
    const menuContent = document.querySelectorAll(".menuCircle_content");
    
    deg = 0;
    for (let item of menuContent){
        item.style.transform = `rotate(${deg}deg)`;
        deg += value;
    }
}
rotateSymbol(1.5)

function checkSize () {
    const size = document.querySelectorAll("input"),
          img = document.querySelector("img")
    for (let item of size){
        if (item.checked) {
            switch (item.value.toString()) {
                case 'S':
                    img.style.transform = "scale(0.9)";
                break;
                case 'M':
                    img.style.transform = "scale(1.1)";
                break;
                case 'L':
                    img.style.transform = "scale(1.4)";
                break;
            }
            console.log(item)

        }
    }
}
checkSize()

function changeSize() {
    const choiseSize = document.querySelectorAll(".choiseSize")
    for (let item of choiseSize) {
        item.addEventListener('click', checkSize)
    }
}
window.addEventListener('click', changeSize())
