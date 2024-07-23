class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });

    // Put global variable here
  }

  // incoming data from scene below
  init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  }

  preload() {

    // this is the exported JSON map file
    this.load.tilemapTiledJSON("world", "assets/Forest2.tmj");

    
    this.load.image("pipoya", "assets/pipoya.png");
    this.load.image("building", "assets/Buildings32x32.png");
    this.load.image("street", "assets/Street32x32.png");
  }

  create() {
    console.log("*** world scene");

    // Create the map from main
    let map = this.make.tilemap({
      key: "world",
    });

    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    let streetTiles = map.addTilesetImage("Street32x32", "street");
    let pipoyaTiles = map.addTilesetImage("pipoya", "pipoya");

    let tilesArray = [buildingTiles, streetTiles, pipoyaTiles];

    // Load in layers by layers
    this.groundLayer = map.createLayer("ground", tilesArray, 0, 0);
    this.tree2Layer = map.createLayer("tree2", tilesArray, 0, 0);

    // Add any text to the game
    this.add.text(10, 10, "Add any text here", {
      font: "30px Courier",
      fill: "#00FFFF",
    });

    // Add main player here with physics.add.sprite

    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    //this.cameras.main.startFollow(this.player);
  } /////////////////// end of create //////////////////////////////

  update() {} /////////////////// end of update //////////////////////////////

  // Function to jump to room1
  room1(player, tile) {
    console.log("room1 function");
    this.scene.start("room1", {
      player: player,
      inventory: this.inventory,
    });
  }
} //////////// end of class world ////////////////////////
