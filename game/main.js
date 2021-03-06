var imgs = document.getElementsByClassName("img")

for (img of imgs){
    console.log(img.classList.contains('img_player'))
    img.style.margin = "50px 50px 50px 50px"
    // var n = false
    // var k = false
    // var p = false

    $(img).click(
        function () {
            $(this).addClass("img_player");
        });

    if (!(img.classList.contains('img_player'))){
    
    $(img).hover(
        function () {
            $(this).addClass("img_hover");
        },
        function () {
            $(this).removeClass("img_hover");
        }
        );
    }
}

