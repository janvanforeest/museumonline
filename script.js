const mytitle = document.getElementById("mytitle");
const myimage = document.getElementById("myimage");
const input = document.getElementById("input");

let directionbuttons = {
    "noord": document.getElementById('noord'),
    "oost": document.getElementById('oost'),
    "zuid": document.getElementById('zuid'),
    "west": document.getElementById('west')
}

let current_index = 0;

let locations =
[
    {
        "title":"plaats 0",
        "image":"img/0.jpg",
        "directions": {
            "zuid": 1
        }
    }
]

function show (index){
    mytitle.innerHTML = locations[index].title;
    myimage.src = locations[index].image;
    current_index = index;
    updatedirections();
}

function updatedirections(){
    let possible = locations[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionbuttons);
    for(const key of button_keys){
        directionbuttons[key].style.visibility = 'hidden';
    }
    for(const key of possible_keys){
        directionbuttons[key].style.visibility = 'visible';
    }
}

function getinput(){
    show(input.value);
    myinput.value = "";
    myinput.focus();
}

function godirection(direction){
    let punt_index = locations[current_index].directions[direction];
    show(punt_index);
}

show(0)