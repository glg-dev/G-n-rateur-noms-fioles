const container = document.getElementById("container")
const contenant = document.querySelector(".contenant")
const contenu = document.querySelector(".contenu")
const containerButton = document.getElementById("containerButton")
const contentButton = document.getElementById("contentButton")

let array1 = ["Potion", "Elixir", "Essence", "Philtre","Poison", "Nectar", "Flacon", "Concentré", "Jus", "Extrait", "Eau", "Huile", "Distillation", "Sérum", "Alcool", "Breuvage", "Quintessence", "Liqueur", "Bouteille", "Fiole", "Graines", "Poudre", "Secret", "Mystère", "Enchantement", "Ensorcellement", "Prophétie", "Sortilège", "Décoction", "Infusion", "Poussière", "Perles", "Magie", "Force"]

let array2 = ["de Rêve", "d'Hiver", "d'Automne", "de Printemps", "d'Éte", "de Feu", "d'Eau", "d'Air", "de Terre", "de Dryades", "de Druides", "de Lutins", "d'Hippogriffes", "de Centaures", "de Fées", "de Dragons", "d'Elfes", "de Griffons", "de Kitsunes", "de Naïades", "de Sirènes", "de Licornes", "de Nymphes", "de Lycans", "de Jackalopes", "de Farfadets", "d'Ents", "de Satyres", "de Muses", "de Géants", "de Gnomes", "d'Ogres", "de Gobelins", "de Trolls", "de Diablotins", "de Magiciens", "de Sorcières", "d'Enchanteurs", "de Phénix", "de Gargouilles", "de Vampires", "de Lumière", "de Nuit", "de Ténèbres", "de Cerf", "de Biche", "de Corbeau", "de Loup", "de Crapaud", "d'Ours","de Vigueur", "de Force", "de Complicité", "de Puissance", "de Vitalité", "de Fertilité", "de Passion", "de Tendresse", "d'Humour", "de Compassion", "d'Amour", "de Chance", "de Bonheur", "de Vérité", "de Coup de foudre", "de Joie", "de Rire", "de Richesse", "de Guérison", "de Soleil", "de Lune", "d'Etoile", "d'Arc en ciel", "de Perlimpinpin"]

console.log(`${array1.length} contenants / ${array2.length} contenus = ${array1.length*array2.length} combinaisons`);

containerButton.addEventListener("click", generateContainer)
contentButton.addEventListener("click", generateContent)
container.addEventListener("click", generateBoth)


function generateContainer() {
    let random1 = Math.random()*array1.length
    contenant.innerHTML = `<p>${array1[Math.floor(random1)]} </p>`
}

function generateContent() {
    let random2 = Math.random()*array2.length
    contenu.innerHTML = `<p>${array2[Math.floor(random2)]}</p>`
    // contenu.innerHTML = `<p>d'Arc en ciel</p>`
}

function generateBoth() {
    generateContainer()
    generateContent()
}

generateContainer()
generateContent()