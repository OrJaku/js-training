let sqX = 500;
let sqY = 500;
let h = 100;
let w = 100;
const mainColor = "black"
let sq = $(".sq");
sq.css("background-color",  mainColor)
sq.css("height", `${h}px`);
sq.css("width", `${w}px`);
sq.css("left", `${sqX}px`);
sq.css("top", `${sqY}px`);
let drawActive = false;


sq.mousedown(() =>{
    drawActive = !drawActive
    sq.css("background-color", "gray")
    $("body").mousemove(mouseMove)

});
sq.mouseup(() =>{
    drawActive = !drawActive
    sq.css("background-color",  mainColor)
});

const mouseMove = function(event) {
    if (drawActive){
    let cx = event.clientX;
    let cy = event.clientY; 
    var possition = cx + ", " + cy
    sq.css("left", `${cx - h/2}px`);
    sq.css("top", `${cy - w/2}px`);
    $("h1").text( possition )
    }
}

let red = 255;
let green = 255
let blue = 255;

const changBackground = (e) =>{
    console.log(e.keyCode)
    if (e.keyCode == 40 && red >= 0){
        red--;
        green--;
        blue--;
        console.log(red)
    }
    else if (e.keyCode == 38 && red <= 255 ){
        red++;
        green++;
        blue++;
        console.log(red)

    }
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

}

window.addEventListener('keydown', changBackground)