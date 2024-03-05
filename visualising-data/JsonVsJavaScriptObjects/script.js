const jsonString = '{"peoplePets":[{"petOwner":"Rabindranath","pet":"Hugh"},{"petOwner":"Arundhati","pet":"Pugh"},{"petOwner":"Amitav","pet":"Barley Magrew"},{"petOwner":"Shashi","pet":"Cuthbert"},{"petOwner":"Khushwant","pet":"Dibble"},{"petOwner":"Vikram","pet":"Grub"}]}';
const jsonObj = JSON.parse(jsonString);
const petList = jsonObj.peoplePets;
const petAnimal = ["cat", "dog", "goldfish", "budgerigar", "pangolin"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const iterationLength = petList.length;
let petSentence = document.querySelector('#petSentence');
for (let i = 0; i < iterationLength; i++) {
    petSentence.innerHTML += (`<p>${petList[i].petOwner} owns a pet <strong>${petAnimal[getRandomInt(iterationLength - 1)]}</strong> called ${petList[i].pet}</p>`);
}

const myRequest = new Request("peoplePets.json");
fetch(myRequest)
    .then(response => {
        return response.json();
    })
    .then(dataObj => {
        const myList = document.querySelector("ul");
        let petArray = dataObj.peoplePets;
        for (const personPet of petArray) {
            const listItem = document.createElement("li");
            listItem.appendChild(document.createElement("strong")).textContent = personPet.petOwner;
            listItem.append(` owns ${personPet.pet}`);
            myList.appendChild(listItem);
        }
    })
    .catch(console.error);

const fruitListJson = [{ "Naruto": "Jackfruit" }, { "Sasuke": "Buddha's Hand" }, { "Sakura": "Mangosteen" }];
const jsonFruitList = JSON.stringify(fruitListJson);
let fruitListParagraph = document.querySelector('#fruitList');
fruitListParagraph.innerHTML += (`<p>${jsonFruitList}</p>`);
