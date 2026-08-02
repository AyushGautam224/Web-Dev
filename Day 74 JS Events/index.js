let button = document.getElementById("btn")

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b> wow now clicked</b> enjoy the click"

})
button.addEventListener("contextmenu", () => {
    alert("Right click pls")

})
document.addEventListener("keydown", (e) => {
    console.log(e.key , e.keyCode)

})
// button.addEventListener("lclick", () => {
//     document.querySelector(".box").innerHTML = "<b> wow now clicked</b> enjoy the click"

// })