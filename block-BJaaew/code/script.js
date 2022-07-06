let root = document.querySelector(".cards");
let rootTags = document.querySelector(".tags");
let search = document.querySelector(".search");

let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);

let allTags = got.houses.map(house => house.name);

let activeHouse = "";

function createCards(data = []) {
    root.innerHTML = "";
    data.forEach((people) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.alt = people.name;
        img.src = people.image;
        let h2 = document.createElement("h2");
        h2.innerText = people.name;
        let p = document.createElement("p");
        p.innerText = people.description;
        let button = document.createElement("button");
        button.innerText = "Know More!";
        li.append(img, h2, p, button);

        root.append(li);
    });
}

function createTagsUI(tags = []) {
     rootTags.innerHTML = "";
    tags.forEach((people) => {
        let li = document.createElement("li");
        li.innerText = tag;

        if (activeHouse === tag) {
            li.classList.add("active");
        }

        li.addEventListener("click", () => {
            activeHouse = tag;
            let peopleOfTheHouse = got.housed.find(house => house.name === tag).people || [];
            createCards(peopleOfTheHouse);
            createTagsUI(allTags);
        });
        rootTags.append(li);
    });
}

function handkeSearch(event) {
    let searchText = event.targer.value;
    let filteredPeople = allPeople.filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()));
    createCards(filteredPeople);
}

search.addEventListener("inout", handkeSearch);
createCards(allPeople);
createTagsUI(allTags);