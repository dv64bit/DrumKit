// For keyboard key press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// For mouse key press
var numOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i <= numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}



function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kicks = new Audio("sounds/kick-bass.mp3");
            kicks.play();
            break;
        default:
            console.log(innerHTML);
            break;
    }
}


function buttonAnimation(currentKey) {
    var activeKeyPress = document.querySelector("." + currentKey);
    activeKeyPress.classList.add("pressed"); // equal to -->[ document.querySelector("."+currentKey).classList.add("pressed"); ]
    setTimeout(function () {
        activeKeyPress.classList.remove("pressed"); // equal to -->[ document.querySelector("."+currentKey).classList.remove("pressed"); ]
    }, 100);
}



































        // -----Using If Else Statement----
        // if (i === 0) {
        // }
        // else if (i === 1) {
        //     var audio = new Audio("sounds/tom-2.mp3");
        //     audio.play();
        // }
        // else if (i === 2) {
        //     var audio = new Audio("sounds/tom-3.mp3");
        //     audio.play();
        // }
        // else if (i === 3) {
        //     var audio = new Audio("sounds/tom-4.mp3");
        //     audio.play();
        // }
        // else if (i === 4) {
        //     var audio = new Audio("sounds/snare.mp3");
        //     audio.play();
        // }
        // else if (i === 5) {
        //     var audio = new Audio("sounds/crash.mp3");
        //     audio.play();
        // }
        // else if (i === 6) {
        //     var audio = new Audio("sounds/kick-bass.mp3");
        //     audio.play();
        // }


// Calcuator Function
// function add(num1, num2)
// {
//     return num1 + num2;
// }
// function multiply(num1, num2)
// {
//     return num1 * num2;
// }
// function divide(num1, num2)
// {
//     return num1 / num2;
// }
// function subtract(num1, num2)
// {
//     return num1 - num2;
// }

// function calcuator(num1, num2, operator) //High order Fuction
// {
//     return operator(num1, num2);
// }



// ------- Lecture 7 & 10 constructor-----
// function BellBoy(name, age, workExperience, repertoire) {
//     this.name = name;
//     this.age = age;
//     this.workExperience = workExperience;
//     this.repertoire = repertoire;
//     this.clean = function () {
//         alert("Cleaning in Progress");
//     }
// }

// var houseKepper1 = new BellBoy('ABC',34,'10 Years',["Bathroom", "Carpantery"]);

// console.log(houseKepper1.clean());