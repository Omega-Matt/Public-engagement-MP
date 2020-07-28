// THIS FILE CREATES THE OBJECT OF THE LAKE AND THE HOLDING TANK
window.lakeWater = function () {

    var lakes = [];
    var lakeTurbidity = THREE.Math.randInt(1, 5); // sets the lake turbidity to be random between 1 and 10

    var lakeGeometry = new THREE.BoxGeometry(67, 44, 1);
    var lakeMaterialFull = new THREE.MeshBasicMaterial({color: 0x5F9491});

    var lake = new THREE.Mesh(lakeGeometry, lakeMaterialFull);
    lake.position.x = (25);
    lake.position.y = (-9);
    lakes.push(lake);

    var smallLakeGeo = new THREE.BoxGeometry(67, 28, 1);
    var lakeMaterialEmpty = new THREE.MeshBasicMaterial({color: 0x6292BC});

    var lakeEmpty = new THREE.Mesh(smallLakeGeo, lakeMaterialEmpty);
    lakeEmpty.position.x = (25);
    lakeEmpty.position.y = (-9);
    lakes.push(lakeEmpty);

    var tankGeometry = new THREE.BoxGeometry(30, 30, 1);
    var tankMaterial = new THREE.MeshBasicMaterial({color: 0x616263});

    var holdingTank = new THREE.Mesh(tankGeometry, tankMaterial);
    holdingTank.position.x = (-35);
    holdingTank.position.y = (-6);
    lakes.push(holdingTank);

    var boxGeometry = new THREE.BoxGeometry(28, 48, 1);
    var F1Material = new THREE.MeshBasicMaterial({color: 0x00AFD1});
    var tankWater = new THREE.Mesh(boxGeometry, F1Material, 5);
    tankWater.position.x = (-35);
    tankWater.position.y = (-16);
    lakes.push(tankWater);

    // SETS THE RANDOMISED VALUE OF Turbidity TO LOCAL STORAGE TO BE USED IN SEPARATE HTML SCENES
    sessionStorage.setItem('Turbidity', lakeTurbidity);

    return lakes;
};