const countrySelectEl = document.getElementById("countrySelect")
const selectedFlagEl = document.getElementById("selectedFlag")

fetch("countries.json")
.then(res => res.json())
.then(countires =>{
    let selected = countires[Math.floor(Math.random()*countires.length)]

    let img = `https://countryflagsapi.netlify.app/flag/${selected.code}.svg`

    selectedFlagEl.style.backgroundImage = `url(${img})`
    countires.forEach(country => {
        let option = document.createElement("option")
        option.value = country.code
        option.innerText = country.country
        countrySelectEl.appendChild(option)
    });
})