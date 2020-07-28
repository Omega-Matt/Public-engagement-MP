window.StructureCreation = function (level) {// This code allows for the texture to be mapped onto the object that is being made later.
    var cubes = []; // Undefined size array for holding objects.

    // Switches the levels being created.
    function levels() {
        switch (level) {
            case 1:
                level1(); // calls first level
                break;
            case 2:
                level2(); // calls second level
                break;
            case 3:
                level3(); // calls third level
                break;
        }
    }

    levels(); // calls the switch statement

    // Creates the objects for level 1
    function level1() {
        var structureTexture = new THREE.TextureLoader().load('texture/wood.png');
        structureTexture.wrapS = THREE.RepeatWrapping;
        structureTexture.wrapT = THREE.RepeatWrapping;
        structureTexture.anisotropy = 16; // sets an anisotropy so that the texture doesn't go blurry with length
        structureTexture.repeat.set(1, 1);

        var geometry = new THREE.BoxGeometry(2, 8, 2); // sets the geometry for the object (height, width, depth)
        var material = new Physijs.createMaterial(new THREE.MeshBasicMaterial({map: structureTexture}), 1, 0); // Gives the object a basic material,


        var cubeA = new Physijs.BoxMesh(geometry, material, 15); // Left Cube
        var cubeB = new Physijs.BoxMesh(geometry, material, 15); // Right Cube
        var cubeC = new Physijs.BoxMesh(geometry, material, 20); // Top Cube

        cubeA.position.x = (-17);
        cubeA.position.y = (-3.45);
        cubeA.position.z = (0);
        cubeA.__dirtyPosition = true;
        cubes.push(cubeA);

        cubeB.position.x = (-23);
        cubeB.position.y = (-3.45);
        cubeB.position.z = (0);
        cubeB.__dirtyPosition = true;
        cubes.push(cubeB);

        cubeC.position.x = (-20);
        cubeC.position.y = (1.55);
        cubeC.position.z = (0);
        cubeC.rotation.z = Math.PI / 2;
        cubeC.__dirtyPosition = true;
        cubes.push(cubeC);
    }

    // Creates objects for level 2.
    function level2() {

        var structureTexture = new THREE.TextureLoader().load('texture/wood_2.png');
        structureTexture.wrapS = THREE.RepeatWrapping;
        structureTexture.wrapT = THREE.RepeatWrapping;
        structureTexture.anisotropy = 16; // sets an anisotropy so that the texture doesn't go blurry with length
        structureTexture.repeat.set(1, 1);

        var geometry = new THREE.BoxGeometry(2, 8, 2); // sets the geometry for the object (height, width, depth)
        var material = new Physijs.createMaterial(new THREE.MeshBasicMaterial({map: structureTexture}), 1, 0);

        // Layer 1
        var cubeA = new Physijs.BoxMesh(geometry, material, 30); // Left Cube
        var cubeB = new Physijs.BoxMesh(geometry, material, 30); // Right Cube
        var cubeC = new Physijs.BoxMesh(geometry, material, 30); // Top Cube
        // Layer 2
        var cubeD = new Physijs.BoxMesh(geometry, material, 20); // Left Cube
        var cubeE = new Physijs.BoxMesh(geometry, material, 20); // Right Cube
        var cubeF = new Physijs.BoxMesh(geometry, material, 20); // Top Cube

        cubeA.position.x = (-17);
        cubeA.position.y = (-3.45);
        cubeA.position.z = (0);
        cubeA.__dirtyPosition = true;
        cubes.push(cubeA); // pushes the object to the array

        cubeB.position.x = (-23);
        cubeB.position.y = (-3.45);
        cubeB.position.z = (0);
        cubeB.__dirtyPosition = true;
        cubes.push(cubeB); // pushes the object to the array

        cubeC.position.x = (-20);
        cubeC.position.y = (1.55);
        cubeC.position.z = (0);
        cubeC.rotation.z = Math.PI / 2;
        cubeC.__dirtyPosition = true;
        cubes.push(cubeC); // pushes the object to the array

        cubeD.position.x = (-23);
        cubeD.position.y = (6.55);
        cubeD.position.z = (0);
        cubeD.__dirtyPosition = true;
        cubes.push(cubeD);

        cubeE.position.x = (-17);
        cubeE.position.y = (6.55);
        cubeE.position.z = (0);
        cubeE.__dirtyPosition = true;
        cubes.push(cubeE);

        cubeF.position.x = (-20);
        cubeF.position.y = (11.55);
        cubeF.position.z = (0);
        cubeF.rotation.z = Math.PI / 2;
        cubeF.__dirtyPosition = true;
        cubes.push(cubeF); // pushes the object to the array
    }

    // Creates objects for level 3.
    function level3() {

        var structureTexture = new THREE.TextureLoader().load('texture/wood_3.png');
        structureTexture.wrapS = THREE.RepeatWrapping;
        structureTexture.wrapT = THREE.RepeatWrapping;
        structureTexture.anisotropy = 16; // sets an anisotropy so that the texture doesn't go blurry with length
        structureTexture.repeat.set(1, 1);

        var geometry = new THREE.BoxGeometry(2, 6, 2); // sets the geometry for the object (height, width, depth)
        var material = new Physijs.createMaterial(new THREE.MeshBasicMaterial({map: structureTexture}), 1, 0);

        var cubeA = new Physijs.BoxMesh(geometry, material, 40); // Bottom Left Cube
        var cubeB = new Physijs.BoxMesh(geometry, material, 40); // Bottom Middle Cube
        var cubeC = new Physijs.BoxMesh(geometry, material, 40); // Bottom Right Cube

        var cubeD = new Physijs.BoxMesh(geometry, material, 35); // Left Top Cube
        var cubeE = new Physijs.BoxMesh(geometry, material, 40); // Middle Top Cube
        var cubeF = new Physijs.BoxMesh(geometry, material, 35); // Right Top Cube

        var cubeG = new Physijs.BoxMesh(geometry, material, 30); // Second Layer Left Cube
        var cubeH = new Physijs.BoxMesh(geometry, material, 30); // Second layer right cube
        var cubeI = new Physijs.BoxMesh(geometry, material, 30); // Second layer top cube

        var cubeJ = new Physijs.BoxMesh(geometry, material, 20); // Third layer top cube
        var cubeK = new Physijs.BoxMesh(geometry, material, 20); // Top Cube

        cubeA.position.x = (-12);
        cubeA.position.y = (-4.45);
        cubeA.position.z = (0);
        cubeA.__dirtyPosition = true;
        cubes.push(cubeA); // pushes the object to the array

        cubeB.position.x = (-18);
        cubeB.position.y = (-4.45);
        cubeB.position.z = (0);
        cubeB.__dirtyPosition = true;
        cubes.push(cubeB); // pushes the object to the array

        cubeC.position.x = (-24);
        cubeC.position.y = (-4.45);
        cubeC.position.z = (0);
        cubeC.__dirtyPosition = true;
        cubes.push(cubeC); // pushes the object to the array

        cubeD.position.x = (-12);
        cubeD.position.y = (-0.45);
        cubeD.position.z = (0);
        cubeD.rotation.z = Math.PI / 2;
        cubeD.__dirtyPosition = true;
        cubes.push(cubeD); // pushes the object to the array

        cubeE.position.x = (-18);
        cubeE.position.y = (-0.45);
        cubeE.position.z = (0);
        cubeE.rotation.z = Math.PI / 2;
        cubeE.__dirtyPosition = true;
        cubes.push(cubeE); // pushes the object to the array

        cubeF.position.x = (-24);
        cubeF.position.y = (-0.45);
        cubeF.position.z = (0);
        cubeF.rotation.z = Math.PI / 2;
        cubeF.__dirtyPosition = true;
        cubes.push(cubeF); // pushes the object to the array

        cubeG.position.x = (-15);
        cubeG.position.y = (3.55);
        cubeG.position.z = (0);
        cubeG.__dirtyPosition = true;
        cubes.push(cubeG); // pushes the object to the array

        cubeH.position.x = (-21);
        cubeH.position.y = (3.55);
        cubeH.position.z = (0);
        cubeH.__dirtyPosition = true;
        cubes.push(cubeH); // pushes the object to the array

        cubeI.position.x = (-18);
        cubeI.position.y = (7.55);
        cubeI.position.z = (0);
        cubeI.rotation.z = Math.PI / 2;
        cubeI.__dirtyPosition = true;
        cubes.push(cubeI); // pushes the object to the array

        cubeJ.position.x = (-18);
        cubeJ.position.y = (11.55);
        cubeJ.position.z = (0);
        cubeJ.__dirtyPosition = true;
        cubes.push(cubeJ); // pushes the object to the array

        cubeK.position.x = (-18);
        cubeK.position.y = (15.55);
        cubeK.position.z = (0);
        cubeK.rotation.z = Math.PI / 2;
        cubeK.__dirtyPosition = true;
        cubes.push(cubeK); // pushes the object to the array
    }

    return cubes; // returns the array to be used within a different function
};