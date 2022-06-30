let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");

let dataSet = [
    {
        name: "rock",
        beats: "scissors",
    },
    {
        name: "scissors",
        beats: "paper",
    },
    {
        name: "paper",
        beats: "rock",
    },
];

{
    // <li class="selected"><i class="fa fa-hand-rock-o"></i></li>
}

function creatUserLayout() {
    dataSet.forEach((icon) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = `fa fa-hand-${icon.name}-o`;
        li.append(i);

        userRoot.append(li);
    });
}

creatUserLayout();