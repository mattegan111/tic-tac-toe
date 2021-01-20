// const Player = (name, marker) => {
//     const getName = () => name;
//     const getMarker = () => marker;
//     return {getName, getMarker};
// }

// const playerX = PlayerX(prompt("Player X, enter your name"), "x");
// const playerO = PlayerO(prompt("Player O, enter your name"), "o");

// const gameBoard = (() => {
//     var marks = 
//     ["a1", "a2", "a3",
//      "b1", "b2", "b3",
//      "c1", "c2", "c3"];
//     return {marks};
// })();



// const containerX = document.querySelector("#controls");
// const contentX = document.createElement("div");
// contentX.classList.add("contentX");
// contentX.className = "player-x";
// contentX.innerHTML = `<h3 style="font-size:28;font-weight:50;transform:translate(0px,0px);position:relative;">X ${playerX.getName().toUpperCase()}</h3>`;
// containerX.appendChild(contentX);

// const containerV = document.querySelector("#controls");
// const contentV = document.createElement("div");
// contentV.classList.add("contentV");
// contentV.className = "versus";
// contentV.innerHTML = `<h1 style="line-height:1;">vs.</h1>`;
// containerV.appendChild(contentV);

// const containerO = document.querySelector("#controls");
// const contentO = document.createElement("div");
// contentO.classList.add("contentO");
// contentO.className = "player-o";
// contentO.innerHTML = `<h4 style="font-size:28;font-weight:50;transform:translate(0px,0px);position:relative;">O ${playerO.getName().toUpperCase()}</h4>`;
// containerO.appendChild(contentO);




var turn = "x";

document.addEventListener('move', function(e){
    let xImage = document.querySelector("#x-image");
    xImage.css({left:e.pageX, top:e.pageY});
});

document.addEventListener('mouseover', function(e){
    if (e.target.className == "grid-item" && e.target.innerHTML == ""){

        if (turn == "x"){
            e.target.classList.add("x-grid-hover");
        }

        else if (turn == "o"){
            e.target.classList.add("o-grid-hover");
        }
    }
})

document.addEventListener('mouseout', function(e){
    if (e.target.classList.contains("x-grid-hover") || e.target.classList.contains("o-grid-hover")){
        
        e.target.classList = "grid-item";
    }
})

document.addEventListener('click', function(e){
    if (e.target.classList.contains("grid-item") && e.target.innerHTML == ""){

        if (turn == "x"){
            e.target.innerHTML = "<h3>x</h3>";
            e.target.classList = "grid-item";
            turn = "o";
        }

        else if (turn == "o"){
            e.target.innerHTML = "<h4>o</h4>";
            e.target.classList = "grid-item";
            turn = "x";
        }
    }
})


// const displayController = (() => {
    
// })();