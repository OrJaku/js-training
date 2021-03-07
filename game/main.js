var divWidth = 210;
var divHeight = 210;
var marginImg = 5;
var playerPoints = 0;
var computerPoints = 0;
var playerChoose;
var computerChoose;


var oneLineDivSize = document.querySelectorAll('.one_line');
for(let i=0; i<oneLineDivSize.length; i++){
    oneLineDivSize[i].style.width = divWidth + "px";
    oneLineDivSize[i].style.height = divHeight + "px";
    oneLineDivSize[i].style.margin = "50px 50px";
}
var score = document.getElementById("score");result
var result = document.getElementById("result");

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
                playerChoose = img.id;
                $(this).toggleClass("img_player");
                if (img.classList.contains("img_player")){
                    console.log(`Player, ${playerChoose}`)
                    computerSelect()

                }
            });
        }

    const computerSelect = function(){
        const rnd = Math.floor(Math.random() * imgs.length);
        var computerImage = imgs[rnd];
        computerChoose = computerImage.id
        console.log("Computer", computerChoose)
        $(computerImage).toggleClass("img_computer");
        setInterval(function() {
            computerImage.style.backgroundColor = (computerImage.style.backgroundColor == 'blue' ? 'rgba(82, 82, 82, 0.1' : 'blue');
        }, 500);
        if (playerChoose == computerChoose){
            result.innerHTML = ("Remis");
        }
        else if (playerChoose == "nozyce" && computerChoose == "papier"){
            result.innerHTML = ("Gracz Wygrywa");
            playerPoints++;

        }
        else if (playerChoose == "nozyce" && computerChoose == "kamien"){
            result.innerHTML = ("Komputer Wygrywa");
            computerPoints++;

        }
        else if (playerChoose == "kamien" && computerChoose == "nozyce"){
            result.innerHTML = ("Gracz Wygrywa");
            playerPoints++;

        }
        else if (playerChoose == "kamien" && computerChoose == "papier"){
            result.innerHTML = ("Komputer Wygrywa");
            computerPoints++;

        }
        else if (playerChoose == "papier" && computerChoose == "kamien"){
            result.innerHTML = ("Gracz Wygrywa");
            playerPoints++;

        }
        else if (playerChoose == "papier" && computerChoose == "nozyce"){
            result.innerHTML = ("Komputer Wygrywa");
            computerPoints++;

        }
        score.innerHTML = (`Player: ${playerPoints} || Computer: ${computerPoints}`);


    }


