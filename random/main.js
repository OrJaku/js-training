const btn = document.getElementById("btn");
const show = document.getElementById("show");
const lst = ["A", "B", "C", "D", "E"];

const randomValue = () => {
    const rnd = Math.floor(Math.random() * 5);
    console.log(rnd)
    const value = lst[rnd];
    show.textContent = value;
}

btn.addEventListener('click', randomValue);