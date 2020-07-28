// This function has the creation of the ground plane to be passed into the main HTML script.
window.GroundPlane = function () {

    // This code allows for the texture to be mapped onto the object that is being made later.
    var groundTexture = new THREE.TextureLoader().load('texture/grass.png');
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(25, 1); // sets the texture to repeat a number of times up and across the object
    groundTexture.anisotropy = 16; // sets an anisotropy so that the texture doesn't go blurry with length

    // Creates a material for the ground mesh, which can be given a texture and some additional parameters,
    // when made into a Physijs material, such as friction and bounce.
    var groundMaterial = new Physijs.createMaterial(new THREE.MeshBasicMaterial({map: groundTexture}), 1, 0);
    var ground = new Physijs.BoxMesh(
        new THREE.BoxGeometry(100, 1, 80), groundMaterial, 0
    );
    ground.position.y = -7.95; // gives the plane a position in the scene
    ground.__dirtyPosition = true; // sets the position of the plane so it does not move with gravity

    return ground; // returns the array to be used within a different function
};