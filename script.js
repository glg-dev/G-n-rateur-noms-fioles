const container = document.getElementById("container")
const contenant = document.querySelector(".contenant")
const contenu = document.querySelector(".contenu")
const containerButton = document.getElementById("containerButton")
const contentButton = document.getElementById("contentButton")

let array1 = ["Potion", "Elixir", "Essence", "Philtre","Poison", "Nectar", "Flacon", "Concentré", "Jus", "Extrait", "Eau", "Huile", "Distillation", "Sérum", "Alcool", "Breuvage", "Quintessence", "Liqueur", "Bouteille", "Fiole", "Graines", "Poudre", "Secret", "Mystère", "Enchantement", "Ensorcellement", "Prophétie", "Décoction", "Infusion", "Poussière", "Perles"]

let array2 = ["d'Amour", "de Vitalité", "de Chance", "de Bonheur", "d'Arc en ciel", "de Lumière", "de Puissance", "de Fertilité", "de Passion", "de Nuit", "de Vérité", "de Tendresse", "de Coup de foudre", "de Joie", "de Rire", "de Rêve", "de Vigueur", "de Complicité", "de Licorne", "de Nymphe", 
"de Fées", "de Perlimpinpin", "de Dragon", "de Griffon", "d'Etoile"]

console.log(`${array1.length} contenants / ${array2.length} contenus = ${array1.length*array2.length} combinaisons`);

containerButton.addEventListener("click", generateContainer)
contentButton.addEventListener("click", generateContent)
container.addEventListener("click", generateContainer)
container.addEventListener("click", generateContent)


function generateContainer() {
    let random1 = Math.random()*array1.length
    contenant.innerHTML = `<p>${array1[Math.floor(random1)]} </p>`
}

function generateContent() {
    let random2 = Math.random()*array2.length
    contenu.innerHTML = `<p>${array2[Math.floor(random2)]}</p>`
    // contenu.innerHTML = `<p>d'Arc en ciel</p>`
}

generateContainer()
generateContent()