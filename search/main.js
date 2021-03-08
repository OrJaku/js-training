var input = document.querySelector("input")
var ul = document.querySelector("ul")

elList = ["Ewelina", "Kuba", "Ziomeczek", "Pierogi", "Film", "Pianinko"]
elList.forEach(element => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    ul.appendChild(li);

    
});
var elLi = document.querySelectorAll("li")
console.log(elLi)

const search = (e) => {
    const serachText = e.target.value.toLowerCase();
    let tasks = [...elLi];
    searchText = e.target.value.toLowerCase();

    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(serachText));
    ul.textContent = ""
    tasks.forEach(element => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(element.textContent));
        ul.appendChild(li);
    })

}

input.addEventListener("input", search)