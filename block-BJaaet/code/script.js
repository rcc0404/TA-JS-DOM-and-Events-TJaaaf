let input = document.querySelector(`input[type="text]`);
let rootElm = document.querySelector(".movies__list");

let allMoviess = [
    {
        name: "Forest Gump",
        watched: false,
    },
    {
        name: "Inception",
        watched: false,
    },
];

input.addEventListener("keyup", (event) => {
    //adding a movie
    if (event.keyCode === 13) {
        allMoviess.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value = "";
        createMoviesUI();
    }
});

function deletMovie(event) {
    // event.target.parentElement.remove();
    let id = event.target.dataset.id;
    allMoviess.splice(id, 1);
    createMoviesUI();
}

function handleChange(event) {
    let id = event.target.id;
    
    allMoviess[id].watched = !allMoviess[id].watched;
    // let id = event.target.dataset.id;
}

function createMoviesUI() {
    // <li>
    //       <input class="styled-checkbox" id="3" type="checkbox" />
    //       <label for="3">Checkbox</label>
    //       <span>*</span>
    //     </li>
    rootElm.innerHTML = "";

    allMoviess.forEach((movie, i) => {
        let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("styled-checkbox");
    input.type = "checkbox";
        input.id = "i";
        input.checked = movie.watched;

        input.addEventListener('change', handleChange);
    let label = document.createElement("label");
        label.for = "i";
        label.innerText = movie.name;
    let span = document.createElement("span");
        span.innerText = "*";
        span.setAttribute("data-id", i);

        span.addEventListener("click", deletMovie);
        
        li.append(input, label, span);

        rootElm.append(li);
    });
}

createMoviesUI();