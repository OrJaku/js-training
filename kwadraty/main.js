const btn = document.querySelector("button");
var red = 0;
var green = 255;
var blue = 0;
var direction = true;
var num = 0;

const addElement = function() {

    const div = document.createElement("div");
    div.textContent = num;
    if (red > 255){
        direction = false
    }
    else if (red < 0){
        direction = true

    };
    if (direction){
        red += 2
        green--
        blue += 2
    }
    else {
        red -= 2
        green++
        blue -= 2
    };
    if (num % 5 == 0 && num != 0){
        div.classList.add("circle")
    };
    num++;
    div.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.body.appendChild(div);


}
btn.addEventListener("click", addElement);