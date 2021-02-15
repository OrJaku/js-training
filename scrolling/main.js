// let window_h = 10000;
document.body.style.height = window_h + "px";
const div = document.createElement("div");
document.body.appendChild(div);
var lastScrollTop = 0;
var window_w = window.innerWidth;


div.style.position = "fixed";
div.style.top = 0;
div.style.left = 0;
div.style.width = "0px";
div.style.height =  "10px";
div.style.backgroundColor = "green";

window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    let width = st*(window_w/window_h);
    if (st > lastScrollTop && width <= window_h){
        let bar_size = width + 30

        div.style.width = bar_size + "px";

    }else{
        let bar_size = width + 30
        div.style.width = bar_size + "px";
    };
    lastScrollTop = st <= 0 ? 0 : st;

}, false);


