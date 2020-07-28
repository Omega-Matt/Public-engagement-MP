// CHECKS TO SEE IF THE TIMER HAS ALREADY BEEN INITIALIZED OR NOT, SIMILARLY TO THE TANK CAPACITY
if (sessionStorage.getItem('isInitializedTimer') !== "true") {
    sessionStorage.setItem('totalSeconds', 120); // total number of seconds on the timer
    sessionStorage.setItem('isInitializedTimer', "true");
}

// THIS FUNCTION SETS THE TIMER TO GO DOWN OVER TIME AND CLEARS ANY TIMER THAT NEED TO BE STOPPED AFTER
// THE TIME FALLS BELOW 0
function setTime() {
    // THESE LINES OF CODE SPLIT UP THE SECONDS AND MINUTES INTO SEPARATE TEXT STRINGS
    secondsLabel.innerHTML = pad(sessionStorage.getItem('totalSeconds') % 60);
    minutesLabel.innerHTML = pad(parseInt(sessionStorage.getItem('totalSeconds') / 60));

    // THIS CLEARS THE VALUES OF THE TIMER, POINTS AND TANK CAPACITY WHEN THE TIMER GOES BELOW 0 TO MAKE SURE THE
    // VALUES OF THE VARIABLES ARE NOT CHANGED AFTER THE GAME HAS ENDED
    if (sessionStorage.getItem('totalSeconds') < 1) {
        clearInterval(timer);
        clearInterval(capacityTimer);
        clearInterval(userPoints);
        clearInterval(filterTimer);
        endGame();
    }
    // REDUCES THE VALUE OF SECONDS BY 1 EVERY TIME THIS FUNCTION IS CALLED
    sessionStorage.setItem('totalSeconds', sessionStorage.getItem('totalSeconds') - 1);
}

// This function allows the timer string to work correctly.
// The function prints out the current minutes and seconds of the timer onto the screen.
// if one of the strings has a value less than 2, the string is set to 0 and a new instance of the timer is started.
// If the seconds value is 0, then that value is reset to 60 and 1 is taken away from the minutes value.
function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

// CALLS THE TIMER VARIABLE EVERY SECOND, SO THE TIMER GOES DOWN OVER SECONDS
var timer = setInterval(setTime, 1000);

// THIS FUNCTION ALLOWS THE TANK CAPACITY TO GO DOWN BY A VALUE OF 1 EVERY TIME THIS FUNCTION IS CALLED.
// THIS FUNCTION ALSO LIMITS THE TANK CAPACITY TO ONLY GO DOWN IF THE VALUE IS GREATER THAN 1 AND LOWER THAN 100
function tankTimer() {
    if (window.sessionStorage.getItem('Capacity') >= 100) {
        window.sessionStorage.setItem('Capacity', 100);
    } else if (window.sessionStorage.getItem('Capacity') <= 100 && window.sessionStorage.getItem('Capacity') >= 1) {
        window.sessionStorage.setItem('Capacity', parseInt(window.sessionStorage.getItem('Capacity')) - 1);
        tank[3].scale.y -= (0.01);
    }
    if (window.sessionStorage.getItem('Capacity') <= 0) {
        window.sessionStorage.setItem('Capacity', 0);
        tank[3].scale.y = (0.01);
        gameOver();
    }
}
