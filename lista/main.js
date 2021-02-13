const btn = document.getElementById("btn_in");
const btnShow = document.getElementById("show_btn");
var my_list = []

const addList = function(){
    var input = document.getElementById("text_in")
    val = input.value;
    my_list.push(val)
    input.value = '';
    console.log(my_list);

}
const showList = function(){
    var ul = document.getElementById("show_list");
    var li = document.createElement("li");
    li.value = '';
    for (i = 0; i < my_list.length; i++) {
        console.log(my_list[i])
        li.appendChild(document.createTextNode(my_list[i]));
        ul.appendChild(li)
    }
 
}
btn.addEventListener("click", addList);
btnShow.addEventListener("click", showList);