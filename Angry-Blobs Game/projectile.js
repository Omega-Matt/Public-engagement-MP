window.ProjectileShape = function () {

    // This code allows for the texture to be mapped onto the object that is being made later.
    var sphereTexture = new THREE.TextureLoader().load('texture/pattern.png');
    sphereTexture.wrapS = THREE.RepeatWrapping;
    sphereTexture.wrapT = THREE.RepeatWrapping;
    sphereTexture.anisotropy = 16; // sets an anisotropy so that the texture doesn't go blurry with length
    sphereTexture.repeat.set(1, 1);

    var sphereGeometry = new THREE.SphereGeometry(1, 32, 32); // sets the geometry for the object (height, width, depth)
    var sphereMaterial = new Physijs.createMaterial(new THREE.MeshBasicMaterial({map: sphereTexture}), 0.5, 1);
    // Gives the object a basic material, which then maps the texture onto the object

    // creates an object with characteristics and sets it a position on the screen.
    var sphere = new Physijs.SphereMesh(sphereGeometry, sphereMaterial, 5);
    sphere.position.x = (25);
    sphere.position.y = (-6.45);
    sphere.position.z = (0);

    return sphere; // returns the array to be used within a different function
};