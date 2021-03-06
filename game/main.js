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
                if (img.classList.contains("img_player")){
                    console.log(`Player, ${img.id}`)
                    computerSelect()

                }
            });
        }

    const computerSelect = function(){
        const rnd = Math.floor(Math.random() * imgs.length);
        var computerImage = imgs[rnd];
        console.log("Computer", computerImage.id)
        $(computerImage).toggleClass("img_computer");
        setInterval(function() {
            computerImage.style.backgroundColor = (computerImage.style.backgroundColor == 'blue' ? 'rgba(82, 82, 82, 0.1' : 'blue');
        }, 500);
    }
