const heading = document.querySelector("h1");
heading.textContent = "Alatoo International University - Gateway to the world"

let name = "Azamat"
alert(name);

let number = -5.23;
let boolean = false;
let myArray = [1, 'wassup', true, [23, 'favorite', false]];

let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert ('Yantzee, I love chocolate ise cream!');

} else {
    alert ('Aww, but chocolate is my favorite...')
}


function multiply (num1, num2) {
    let result = num1 * num2;
    return result;
}

let button = document.querySelector("button");
button.onclick = function () {
    let name = prompt("Enter your name:");
    if (name != null) {
        document.querySelector("h1").innerHTML = "Welcome " + name + '!';
    }
}

let imgjs = document.querySelector('img');
imgjs.onclick = () => {
    if (document.querySelector('img').getAttribute('src') === 'https://upload.wikimedia.org/wikipedia/en/0/07/Ala-Too_International_University_Seal.png') {
        document.querySelector('img').setAttribute('src', './images/PngItem_2331175.png');
    } else {
        document.querySelector('img').setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/0/07/Ala-Too_International_University_Seal.png');
    }
}



//This is a comment
/*
let myObject = docment 
*/