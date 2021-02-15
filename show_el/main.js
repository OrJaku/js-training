let text_size = 15
$("#ol_show").css("font-size", text_size + "px");

$(document).ready(function(){
    $(".btn").click(function(){
      $("#ol_show").show();
    });
    $(".btn").dblclick(function(){
        $(".double").toggle("display");

      }); 
    $("#ol_show").click(function(){
        text_size++
        
        var list = $("#ol_show");

        list.css("font-size", text_size + "px");
        console.log(text_size)
    }); 
  });