const Player = (name, marker) => {
    
    const getName = () => name;
    const getMarker = () => marker;

    return {getName, getMarker};
};

const gameBoard = (() => {
    
    var marks = 
     ["0", "1", "2",
      "3", "4", "5",
      "6", "7", "8"];
    
    const getMarks = () => {
		return marks;
    };

    const updateMarks = (id, turn) => {
        marks[id] = turn;
    };
    
    return {getMarks, updateMarks};
});

const controller = (() => {

    const checkWinner = (turn) => {

        var gameOver = false;
        
        const boardMarks = boardInstance.getMarks();

        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winConditions.length; i++) {

            for (let j = 0; j < 3; j++) {
                
                if (boardMarks[winConditions[i][j]] != turn) {
                    break;
                }
                
                else if (j == 2 && boardMarks[winConditions[i][j]] == turn) {
                    alert(turn + " is the winner");
                    gameOver = true;
                }
            };
        };

        // check for draw

        if (gameOver == false) {
            
            var draw = true;

            for (let k = 0; k < boardMarks.length; k++) {
    
                if (boardMarks[k] != "x" && boardMarks[k] != "o" ) {
                    
                    draw = false;
                }
            };
    
            if (draw == true) {
                
                alert("It's a tie!");
            }
        }

    };

    const init = () => {
        document.addEventListener('mouseover', function(e){
            if (e.target.className == "grid-item" && e.target.innerHTML == ""){
        
                if (turn == "x"){
                    e.target.classList.add("x-grid-hover");
                }
        
                else if (turn == "o"){
                    e.target.classList.add("o-grid-hover");
                }
            }
        });
        
        document.addEventListener('mouseout', function(e){
            if (e.target.classList.contains("x-grid-hover") || e.target.classList.contains("o-grid-hover")){
                
                e.target.classList = "grid-item";
            }
        });
        
        document.addEventListener('click', function(e){
            if (e.target.classList.contains("grid-item") && e.target.innerHTML == ""){
        
                if (turn == "x"){
                    e.target.innerHTML = "<h3>x</h3>";
                    e.target.classList = "grid-item";

                    const id = e.target.id;
                    boardInstance.updateMarks(id, turn);

                    controllerInstance.checkWinner(turn);

                    turn = "o";
                }
        
                else if (turn == "o"){
                    e.target.innerHTML = "<h4>o</h4>";
                    e.target.classList = "grid-item";

                    const id = e.target.id;
                    boardInstance.updateMarks(id, turn);

                    controllerInstance.checkWinner(turn);

                    turn = "x";
                }
            }
        });
    };

    return {checkWinner, init};
});

const DOM = () => {
    const renderPlayers = () => {
        const containerX = document.querySelector("#controls");
        const contentX = document.createElement("div");
        contentX.classList.add("contentX");
        contentX.className = "player-x";
        contentX.innerHTML = `<h3 style="font-size:28;font-weight:50;transform:translate(0px,0px);position:relative;">X ${playerX.getName().toUpperCase()}</h3>`;
        containerX.appendChild(contentX);

        const containerV = document.querySelector("#controls");
        const contentV = document.createElement("div");
        contentV.classList.add("contentV");
        contentV.className = "versus";
        contentV.innerHTML = `<h1 style="line-height:1;">vs.</h1>`;
        containerV.appendChild(contentV);

        const containerO = document.querySelector("#controls");
        const contentO = document.createElement("div");
        contentO.classList.add("contentO");
        contentO.className = "player-o";
        contentO.innerHTML = `<h4 style="font-size:28;font-weight:50;transform:translate(0px,0px);position:relative;">O ${playerO.getName().toUpperCase()}</h4>`;
        containerO.appendChild(contentO);
    };

    return {renderPlayers};
}

const playerX = Player(prompt("Player X, enter your name"), "x");
const playerO = Player(prompt("Player O, enter your name"), "o");
const controllerInstance = controller();
controllerInstance.init();
const domInstance = DOM();
domInstance.renderPlayers();
const boardInstance = gameBoard();


var turn = "x";