// THIS FUNCTION SETS ALL THE "isInitalitzed" VARIABLES TO FALSE SO THEY CAN BE CALLED AGAIN,
// WHEN A NEW GAME IS BEING PLAYED, SO THE VALUES ARE ALL SET BACK TO NORMAL

// THIS IS THE FUNCTION THAT CREATES THE CONTENT FOR THE END GAME POP-UP
function endGame() {
    var modal = document.getElementById('endGame');
    modal.style.display = "block";
    appendPlayerResults(sessionStorage.getItem('points'));
    document.getElementById("cleanFilter").disabled = true;
    document.getElementById("addFloc").disabled = true;
    document.getElementById("removeFloc").disabled = true;

}

// Allows for the reset of the variables when the function is called
function resetVariables() {
    sessionStorage.setItem('isInitializedTimer', "false");
    sessionStorage.setItem('isInitialized', "false");
    sessionStorage.setItem('isInitializedPoints', "false");
    document.getElementById("cleanFilter").disabled = false;
    document.getElementById("addFloc").disabled = false;
    document.getElementById("removeFloc").disabled = false;
    document.getElementById("enterName").disabled = false;
}

// THIS IS THE FUNCTION THAT CREATES THE CONTENT FOR THE GAME OVER POP-UP
function gameOver() {
    var gameOverModal = document.getElementById('gameOver');
    gameOverModal.style.display = "block";

    document.getElementById("cleanFilter").disabled = true;
    document.getElementById("addFloc").disabled = true;
    document.getElementById("removeFloc").disabled = true;
    // STOPS THE TIMERS WHEN THE POP-UP IS VISIBLE
    clearInterval(timer);
    clearInterval(capacityTimer);
    clearInterval(userPoints);
    clearInterval(filterTimer);
}

// Allows for the reset of the variables when the function is called
function newGame() {
    sessionStorage.setItem('isInitializedTimer', "false");
    sessionStorage.setItem('isInitialized', "false");
    sessionStorage.setItem('isInitializedPoints', "false");
    document.getElementById("cleanFilter").disabled = false;
    document.getElementById("addFloc").disabled = false;
    document.getElementById("removeFloc").disabled = false;
    document.getElementById("enterName").disabled = false;
}



