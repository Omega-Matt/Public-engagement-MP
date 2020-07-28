window.Pipes = function () {
    var pipes = [];
    // CREATES THE PIPE OBJECTS TO BE USED WITHIN THE SCENES

    var groundPipe = new THREE.BoxGeometry(24, 1.6, 0); // sets the geometry for the object (height, width, depth)
    var cleanWaterPipe = new THREE.BoxGeometry(1.8, 12, 0); // horizontal pipe from the filter
    var cleanWaterPipeS = new THREE.BoxGeometry(1.6, 7, 0); // vertical pipe up from the valve
    var cleanWaterPipeH = new THREE.BoxGeometry(25, 1.6, 0); // horizontal pipe to the tank
    var wasteWaterPipe = new THREE.BoxGeometry(2, 15, 0); // vertical pipe down from the valve
    var lakePipe = new THREE.BoxGeometry(24.3, 1.35, 0);
    var lakePipeS = new THREE.BoxGeometry(1.1, 5, 0);

    var waterPipeTexture = new THREE.TextureLoader().load('waterTexture/waterPipeH.png'); // dirty pipe from filter
    var cleanWaterTexture = new THREE.TextureLoader().load('waterTexture/cleanWaterPipe.png'); // clean pipe from filter
    var cleanWaterTextureD = new THREE.TextureLoader().load('waterTexture/cleanWaterPipeD.png'); // pipe down to tank
    var cleanWaterHTexture = new THREE.TextureLoader().load('waterTexture/cleanWaterH.png'); // pipe to tank
    var wasteWaterTexture = new THREE.TextureLoader().load('waterTexture/wasteWaterPipe.png'); // pipe down to waste
    var lakePipeTexture = new THREE.TextureLoader().load('waterTexture/lakePipe.png'); // pipe from lake
    var lakePipeTextureV = new THREE.TextureLoader().load('waterTexture/lakePipeV.png'); // pipe from lake down

    // Textures linked to the above texture loaders. (The variables are in the same order)
    var waterPipe = new THREE.MeshBasicMaterial({map: waterPipeTexture});
    var cleanWater = new THREE.MeshBasicMaterial({map: cleanWaterTexture});
    var cleanWaterD = new THREE.MeshBasicMaterial({map: cleanWaterTextureD});
    var cleanWaterH = new THREE.MeshBasicMaterial({map: cleanWaterHTexture});
    var wasteWater = new THREE.MeshBasicMaterial({map: wasteWaterTexture});
    var lakeWaterPipe = new THREE.MeshBasicMaterial({map: lakePipeTexture});
    var lakeWaterPipeV = new THREE.MeshBasicMaterial({map: lakePipeTextureV});

    var pipeGroundRight = new THREE.Mesh(groundPipe, waterPipe);
    pipeGroundRight.position.x = (12);
    pipeGroundRight.position.y = (0.2);
    pipes.push(pipeGroundRight);

    var pipeCleanWater = new THREE.Mesh(cleanWaterPipe, cleanWater);
    pipeCleanWater.position.x = (-2.60);
    pipeCleanWater.position.y = (9.5);
    pipes.push(pipeCleanWater);

    var pipeWasteWater = new THREE.Mesh(wasteWaterPipe, wasteWater);
    pipeWasteWater.position.x = (-2.6);
    pipeWasteWater.position.y = (-9);
    pipes.push(pipeWasteWater);

    var pipeCleanWaterH = new THREE.Mesh(cleanWaterPipeH, cleanWaterH);
    pipeCleanWaterH.position.x = (-14.2);
    pipeCleanWaterH.position.y = (16.1);
    pipeCleanWaterH.position.z = (1.5);
    pipes.push(pipeCleanWaterH);

    var pipeCleanWaterV = new THREE.Mesh(cleanWaterPipeS, cleanWaterD);
    pipeCleanWaterV.position.x = (-25.9);
    pipeCleanWaterV.position.y = (12.5);
    pipes.push(pipeCleanWaterV);

    var lakePipeH = new THREE.Mesh(lakePipe, lakeWaterPipe);
    lakePipeH.position.x = (35.9);
    lakePipeH.position.y = (15.3);
    lakePipeH.position.z = (1.5);
    pipes.push(lakePipeH);

    var lakePipeV = new THREE.Mesh(lakePipeS, lakeWaterPipeV);
    lakePipeV.position.x = (24.3);
    lakePipeV.position.y = (12.8);
    pipes.push(lakePipeV);

    return pipes;
};