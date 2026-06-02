const btn = document.getElementById("button")
const colorPicker = document.getElementById("colorSelect")


colorPicker.addEventListener("change", function(){
    fetch("https://www.thecolorapi.com/scheme?mode=analogic")
    .then(response => response.json())
    .then(data => )
})