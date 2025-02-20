const countrySelectEl = document.getElementById("countrySelect")
const selectedFlagEl = document.getElementById("selectedFlag")

let cards = []
let flag = undefined
let revealNumber = 0

fetch("countries.json")
.then(res => res.json())
.then(countires =>{
    let selected = countires[Math.floor(Math.random()*countires.length)]
    flag = selected
    let img = `https://countryflagsapi.netlify.app/flag/${selected.code}.svg`

    selectedFlagEl.style.backgroundImage = `url(${img})`
    countires.forEach(country => {
        let option = document.createElement("option")
        option.value = country.code
        option.innerHTML = country.country
        countrySelectEl.appendChild(option)
    });

    for(let i = 0; i < 6; i++){
        let card = document.createElement("div")
        selectedFlagEl.appendChild(card)
        cards.push(card)
    }

    cards[0].classList.add("reveal")
})

function tipp(){
    let country_code = countrySelectEl.value
    if(flag.code === country_code){
        alert("Correct!")
        cards.forEach(card => {
            if(!card.classList.contains("reveal")){
                card.classList.add("reveal")
            }
        })
    }else{
        cards[revealNumber].classList.add("reveal")
        revealNumber += 1
    }
    if(revealNumber == 6){
        alert("You lost! Solution: " + flag.country)
    }
}