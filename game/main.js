var divWidth = 210;
var divHeight = 210;
var marginImg = 5;
var playerPoints = 0;
var computerPoints = 0;
var playerChoose;
var computerChoose;
var playerChooseId;
var computerChooseId;


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
                playerChoose = img;
                playerChooseId = img.id;
                $(this).toggleClass("img_player");
                if (img.classList.contains("img_player")){
                    console.log(`Player, ${playerChooseId}`)
                    computerSelect()

                }
            });
        }

    const computerSelect = function(){
        const rnd = Math.floor(Math.random() * imgs.length);
        var computerImage = imgs[rnd];
        computerChooseId = computerImage.id;
        console.log("Computer", computerChooseId);
        $(computerImage).toggleClass("img_computer");

        var blinkFrame = setInterval(function() {
            computerImage.style.backgroundColor = (computerImage.style.backgroundColor == 'blue' ? 'rgba(82, 82, 82, 0.1' : 'blue');
        }, 300);
        if (playerChooseId == computerChooseId){
            result.innerHTML = ("Remis");
        }
        else if (playerChooseId == "nozyce" && computerChooseId == "papier"){
            result.innerHTML = ("Gracz Wygrywa");
            playerPoints++;
        }
        else if (playerChooseId == "nozyce" && computerChooseId == "kamien"){
            result.innerHTML = ("Komputer Wygrywa");
            computerPoints++;

        }
        else if (playerChooseId == "kamien" && computerChooseId == "nozyce"){
            result.innerHTML = ("Gracz Wygrywa");
            playerPoints++;
        }
        else if (playerChooseId == "kamien" && computerChooseId == "papier"){
            result.innerHTML = ("Komputer Wygrywa");
            computerPoints++;
        }
        else if (playerChooseId == "papier" && computerChooseId == "kamien"){
            result.innerHTML = ("Gracz Wygrywa");
            playerPoints++;
        }
        else if (playerChooseId == "papier" && computerChooseId == "nozyce"){
            result.innerHTML = ("Komputer Wygrywa");
            computerPoints++;
        }
        score.innerHTML = (`Player: ${playerPoints} || Computer: ${computerPoints}`);
        setTimeout(() => { 
            clearInterval(blinkFrame);
            computerImage.style.backgroundColor = "";
            playerChoose.classList.remove("img_player");
            computerImage.classList.remove("img_computer");
        }, 3000);
    }
