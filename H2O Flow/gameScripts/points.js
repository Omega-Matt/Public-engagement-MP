// CHECKS TO SEE IF THE POINTS HAVE ALREADY BEEN INITIALIZED OR NOT, SIMILARLY TO THE TANK CAPACITY
if (sessionStorage.getItem('isInitializedPoints') !== "true") {
    var totalPoints = 0;
    sessionStorage.setItem('points', totalPoints);
    sessionStorage.setItem('isInitializedPoints', "true");
}

// REDUCES THE POINTS BY 1 EVERY TIME THIS FUNCTION IS CALLED UNTIL THE VALUE GETS BELOW 0 OR ABOVE 100
function points() {
    if (window.sessionStorage.getItem('Capacity') <= 100) {
        if (waterQuality === true){
            window.sessionStorage.setItem('points', parseInt(window.sessionStorage.getItem('points')) + waterFlow);
            window.sessionStorage.setItem('Capacity', parseInt(window.sessionStorage.getItem('Capacity')) + waterFlow);
            tank[3].scale.y += (0.04); // changes the scale of the lake object, based on the points removed.
        } else if (waterQuality === false){
            window.sessionStorage.setItem('points', parseInt(window.sessionStorage.getItem('points')) - waterFlow);
            window.sessionStorage.setItem('Capacity', parseInt(window.sessionStorage.getItem('Capacity')) - waterFlow / 2);
            tank[3].scale.y -= (0.04); // changes the scale of the lake object, based on the points gained.
        }
        // prevents the tank capacity from being above 100 and sets the tank[3] object to be full size.
        if (window.sessionStorage.getItem('Capacity') >= 100){
            window.sessionStorage.setItem('Capacity', 100);
            tank[3].scale.y = (1);
        } if (window.sessionStorage.getItem('Capacity') <= 0) {
            window.sessionStorage.setItem('Capacity', 0);
            tank[3].scale.y = (0.01); // makes the tank[3] object small
        }
    }
}

// THIS FUNCTION CREATES A COOKIE WITH SOME VALUES TO BE USED LATER
    function setNameCookie(cname, cvalue) {
        var d = new Date();
        d.setDate(d.getDate() + 1); // Expires cookie after 12 hours
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires;
    }

// THIS FUNCTION GETS THE VALUES OF THE COOKIE THAT HAS BEEN STORED, OR RETURNS NULL IF THERE ISN'T ONE TO GET
// THIS FUNCTION WAS INSPIRED AND ALTERED FROM CODE FOUND ON W3SCHOOLS. https://www.w3schools.com/js/js_cookies.asp
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';'); // splits up different cookie values using a semicolon

        // Loops through the ca array and reads out each value c = ca[i]).
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) { // If the cookie is found , return the value of the cookie.
                return c.substring(name.length, c.length);
            }
        }
        return null; // If the cookie is not found, return "".
    }

// THIS FUNCTION ALLOWS HIGH SCORES TO BE ADDED TO THE TABLE.
// THE FUNCTION STARTS BY PROMPTING THE PLAYER FOR A NAME SO THAT THEIR SCORE CAN BE SAVED.
    function addHighScore() {
        var user = prompt("Enter a player name:", "");
        user = user.replace(/[^\w\s]/gi, ''); // prevents the use of "special characters"
        user = user.substring(0, 10); // Characters limited to 10.
        var result = sessionStorage.getItem('points'); // sets a variable to contain the points of the player
        // THIS STATEMENT CHECKS TO SEE IF THE VALUE OF "user" IS NOT AN EMPTY STRING OR NULL
        if (user !== "" && user !== null) {
            var scores = getScores(); // GETS THE SCORE THAT HAS BEEN STORED
            scores.push({'name': user, 'score': result}); // PUSHES THE VALUES OF NAME AND SCORE TO AN ARRAY
            // This function sorts the values so the highest score is first
            scores.sort(function (a, b) {
                return b.score - a.score
            });
            scores = scores.slice(0, 15);
            setScores(scores);
        }
        document.getElementById("enterName").disabled = true;
    }

// THIS FUNCTION GETS THE SCORES THAT HAVE BEEN STORED, AND CONVERTS THEM INTO READABLE TEXT FOR THE
// HIGH SCORE TABLE ON THE INDEX PAGE
    function showHighScores() {
        var scores = getScores();
        var ret = '<div class="userTitle">NAME</div>\t<div class="scoreTitle">SCORE</div><br />';
        var i = 0;
        // this loop changes the background color of the scores based on if it is an even or odd number
        scores.forEach(function (score) {
            var background = ++i % 2 ? 'odd' : 'even';
            ret += '<div class="scoreWrapper ' + background + ' "><div class="name">' + score.name +
                '</div><div class="score">' + score.score + '</div></div>'
        });
        return ret;
    }

// THIS FUNCTION STORES THE SCORES THAT IT HAS INTO AN ARRAY TO BE CALLED LATER
// IF THERE ARE NO SCORES TO GET, THE FUNCTION RETURNS AN EMPTY ARRAY
    function getScores() {
        var scores = getCookie('scores');
        if (scores === null) {
            scores = [];
        } else {
            scores = JSON.parse(scores);
        }
        return scores;
    }

// SETS THE SCORE VALUES TO A STRING IN THE COOKIE
    function setScores(scores) {
        setNameCookie('scores', JSON.stringify(scores));
    }