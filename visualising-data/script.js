
const myRequest = new Request("peoplePets.json");
fetch(myRequest)
    .then(response => {return response.json();
    })
    .then(dataObj => {
        console.log(dataObj);
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