const btn = document.getElementById("btn_in");
const btnShow = document.getElementById("show_btn");
var ul = document.getElementById("show_list");
var my_list = []

const addList = function(){
    var input = document.getElementById("text_in")
    val = input.value;
    my_list.push(val)
    input.value = '';
    ul.innerHTML = '';

}
const showList = function(){
    for (i = 0; i < my_list.length; i++) {
        var li = document.createElement("li");
        element = my_list[i]
        li.appendChild(document.createTextNode(element));
        ul.appendChild(li);
    }
 
}
btn.addEventListener("click", addList);
btnShow.addEventListener("click", showList);