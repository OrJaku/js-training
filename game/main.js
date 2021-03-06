var divWidth = 210;
var divHeight = 210;
var marginImg = 5;

var oneLineDivSize = document.querySelectorAll('.one_line');
for(let i=0; i<oneLineDivSize.length; i++){
    oneLineDivSize[i].style.width = divWidth + "px";
    oneLineDivSize[i].style.height = divHeight + "px";
    oneLineDivSize[i].style.margin = "50px 50px";
}

var imageAlign = document.querySelectorAll('.img');
for(let i=0; i<imageAlign.length; i++){
    console.log(i)
    imageAlign[i].style.margin = `${marginImg}px ${marginImg}px`
}

var imgs = document.getElementsByClassName("one_line")
for (let img of imgs){
    $(img).hover(
        function () {
            if (!(img.classList.contains("img_player"))){
            $(this).addClass("img_hover");
        }},
        function () {
            $(this).removeClass("img_hover"); 
        });

    $(img).click(
        function () {
            $(this).toggleClass("img_player");
        });
    }
