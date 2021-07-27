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