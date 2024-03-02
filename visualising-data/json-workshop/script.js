
// 
const jsonString = '{"peoplePets":[{"petOwner":"Rabindranath","pet":"Hugh"},{"petOwner":"Arundhati","pet":"Pugh"},{"petOwner":"Amitav","pet":"Barley Magrew"},{"petOwner":"Shashi","pet":"Cuthbert"},{"petOwner":"Khushwant","pet":"Dibble"},{"petOwner":"Vikram","pet":"Grub"}]}';
const jsonObj = JSON.parse(jsonString);
// console.log(typeof jsonObj.peoplePets)
const petList = jsonObj.peoplePets;
// console.log(petList);
const petAnimal = ["cat", "dog", "goldfish", "budgerigar", "pangolin", "dodo"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const iterationLength = petList.length;
// console.log("jsonObj lenght is " + iterationLength);
// console.log("Random number is " + getRandomInt(iterationLength));
//  let sentence = `${petOwner} owns a pet ${petAnimal} called ${pet}`;
let petSentence = document.querySelector('#petSentence');
for (let i = 0; i < iterationLength; i++) {
    // let petType = petAnimal[getRandomInt(iterationLength - 1)];
    // console.log(petType);
    // let petOwner = petList[i].petOwner;
    // console.log(petOwner);
    // let pet = petList[i].pet;
    // console.log(pet);
    petSentence.innerHTML += (`<p><strong>${petList[i].petOwner} </strong> owns a pet ${petAnimal[getRandomInt(iterationLength - 1)]} called ${petList[i].pet}</p>`);
    // console.log(petSentence);
}

const myRequest = new Request("peoplePets.json");
fetch(myRequest)
    .then(response => {
        return response.json();
    })
    .then(dataObj => {
        // console.log(dataObj);
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
console.log(jsonFruitList)
fruitListParagraph.innerHTML += (`<p>${jsonFruitList}</p>`);
