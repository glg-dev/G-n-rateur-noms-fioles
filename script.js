const container = document.getElementById("container")
const contenant = document.querySelector(".contenant")
const contenu = document.querySelector(".contenu")
const containerButton = document.getElementById("containerButton")
const contentButton = document.getElementById("contentButton")

let array1 = ["Potion", "Elixir", "Essence", "Philtre","Poison", "Nectar", "Flacon", "Concentré", "Jus", "Extrait", "Eau", "Huile", "Distillation", "Sérum", "Alcool", "Breuvage", "Quintessence", "Liqueur", "Bouteille", "Fiole", "Graines", "Poudre", "Secret", "Mystère", "Enchantement", "Ensorcellement", "Prophétie", "Sortilège", "Décoction", "Infusion", "Poussière", "Perles", "Magie", "Force"]

let array2 = ["de Rêve", "d'Hiver", "d'Automne", "de Printemps", "d'Été", "de Feu", "d'Eau", "d'Air", "de Terre", "des Dryades", "des Druides", "des Lutins", "des Hippogriffes", "des Centaures", "des Fées", "des Dragons", "des Elfes", "des Griffons", "des Kitsunes", "des Naïades", "des Sirènes", "des Licornes", "des Nymphes", "des Lycans", "des Jackalopes", "des Farfadets", "des Ents", "des Satyres", "des Muses", "des Géants", "des Gnomes", "des Ogres", "des Gobelins", "des Trolls", "des Diablotins", "des Magiciens", "des Sorcières", "des Enchanteurs", "des Phénix", "des Gargouilles", "des Vampires", "des Mages", "des Golems", "des Djinns", "des Alchimistes", "de Lumière", "de Nuit", "de Ténèbres", "des Cerfs", "des Biches", "des Corbeaux", "des Renards", "des Loups", "des Crapauds", "des Ours","de Vigueur", "de Force", "de Complicité", "de Puissance", "de Vitalité", "de Fertilité", "de Passion", "de Tendresse", "d'Humour", "de Compassion", "d'Amour", "de Chance", "de Bonheur", "de Vérité", "de Coup de foudre", "de Joie", "de Rire", "de Richesse", "de Guérison", "de Soleil", "de Lune", "d'Etoile", "d'Arc en ciel", "de Perlimpinpin"]

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