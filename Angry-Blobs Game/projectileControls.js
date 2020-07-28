// This function has been influenced from a answer that I found on.
// https://stackoverflow.com/questions/19588602/three-js-rotate-object-on-mouse-down-and-move.
// The function has been altered to fit my game and has been commented with what the functions do,
// however the credit for the principles in place go to the person who posted the answer on the link above.

window.ProjectileControls = function () {
    // Sets the mouse to false at the start of the function before anything is pressed
    var mouseDown = false;
    mousePositionX = 0; // Value of the mouse position X at the start of the game
    mousePositionY = 0; // Value of the mouse position Y at the start of the game

    // This function allows the object to be rotated when the mouse is held down, otherwise it disables the function
    // the function uses the mouse positioning and adds the gathered value of clientX and clientY to allow the,
    // object's position to be found.
    function onMouseDown(event) {
        // Allows rotation based on the mouse X and Y.
        mouseDown = true;
        mousePositionX = event.clientX;
        mousePositionY = event.clientY;
    }

    // This function gets data related to the objects location and mouse behaviours,
    // and allows the object to be rotated when the mouse is held down and being moved,
    // otherwise the function does nothing.
    function onMouseMove(event) {
        if (!mouseDown) { // if the mouse is not held down, it returns nothing.
            return;
        }
        // The variables rotationX and rotationY are given the mouses position on the screen using the functions,
        // clientX and clientY, which get the mouses current position in the scene.
        // The values of the mousePosition is the current position of the mouse on the screen,
        // these values are taken away from the mouses position so that the object can follow the mouse,
        // position on the screen when the mouse is being moved.
        var rotationX = event.clientX - mousePositionX,
            rotationY = event.clientY - mousePositionY;
        // resets the values to be the same as the current mouse position.
        mousePositionX = event.clientX;
        mousePositionY = event.clientY;
        // calls the function with the mouse position information and the functions information.
        rotateObject(rotationX, rotationY, projectile);
    }

    // This function sets the new position of the object to the default when the mouse button is released
    function onMouseUp() {
        // sets the new location to default till moved again
        mouseDown = false;
    }

    // Checks to see if the mouse is moving, and calls the relevant function
    window.addEventListener('mousemove', function (e) {
        onMouseMove(e);
    }, false);
    // Checks to see if the mouse is held down, and calls the relevant function
    window.addEventListener('mousedown', function (e) {
        onMouseDown(e);
    }, false);
    // Checks to see if the mouse is released, and calls the relevant function
    window.addEventListener('mouseup', onMouseUp, false);

    // This function allows the object to be rotated within the scene.
    // This function also restricts the rotation so the object cannot be aimed backwards
    function rotateObject(rotationX, rotationY, object) {
        if (!launched && !isAI) { // allows the functionality if the projectile isn't fired or isn't the AI's turn
            object.rotation.z += rotationY / 150; // Changes the speed in which the object is rotated.
        }
        if (object.rotation.z > 0.3) {
            object.rotation.z = 0.3; // Stops rotation from going to far down
        } else if (object.rotation.z < -0.8) {
            object.rotation.z = -0.8; // Stops rotation from going to far up
        }
        object.__dirtyPosition = true;
        object.__dirtyRotation = true;
    }
};