const btn = document.getElementById("button")
const colorDropDown = document.getElementById("colorDropDown")
const color = document.querySelector('[type="color"')


btn.addEventListener("click", function(){
    const url = `https://www.thecolorapi.com/scheme?hex=${color.value.slice(1)}&mode=${colorDropDown.value}&count=5`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < 5; i++){
            const colors = document.getElementById(`c${i}`)
            const hex = document.getElementById(`h${i}`)
            colors.style.backgroundColor = data.colors[i].hex.value
            hex.textContent = data.colors[i].hex.value
        }

    }

    )
})