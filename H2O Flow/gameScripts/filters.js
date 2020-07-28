// THIS FILE CREATES FILTER OBJECTS FOR THE BACKGROUND THAT ARE NOT INTRACTABLE, BUT EFFECT THE FOREGROUND FILTERS
window.Filters = function () {

    var filters = [];
    var color = 0x6F6F6F; // colour of the filter
    var flocculant = 1; // initial value for the userData

    var boxGeometry = new THREE.ConeGeometry(5, 10, 22); // sets the geometry for the object (height, width, depth)

    var valveGeometry = new THREE.BoxGeometry(5, 5, 0); // sets the geometry for the object (height, width, depth)
    var valveTexture = new THREE.TextureLoader().load('waterTexture/valveGood.png');
    var valveMaterial = new THREE.MeshBasicMaterial({map: valveTexture});

    // CREATES THE OUTLINE OBJECT TO HOLD USERDATA AND GIVE THE ILLUSION OF BOARDER HIGHLIGHTING
    var outlineMaterial = new THREE.MeshBasicMaterial({color: color});
    var outlineMesh = new THREE.Mesh(boxGeometry, outlineMaterial);
    outlineMesh.position.x = (24);
    outlineMesh.position.y = (5);
    outlineMesh.position.z = (0);
    outlineMesh.rotation.z = 3.14; // turns the "cone" upside down
    outlineMesh.scale.multiplyScalar(1.06); // makes this cone bigger (grey background)
    outlineMesh.userData = {"filterLoad": THREE.Math.randInt(10, 80), "Flocculant": flocculant};
    filters.push(outlineMesh);

    var valve = new THREE.Mesh(valveGeometry, valveMaterial, 5);
    valve.position.x = (-2.5);
    valve.position.y = (1);
    valve.position.z = (0);
    valve.userData = {"Flocculant": flocculant};
    filters.push(valve);

    return filters; // returns the array to be used within a different function

};