class preload extends Phaser.Scene {
  constructor() {
    super("preload");

    // Put global variable here
  }

  preload() {this.load.audio("level01music","assets/RetroForest_David_Fesliyan.mp3")}

  create() {
    console.log("*** preload scene");

    // // turn on loop, adjust the volume
    // this.music = this.sound.add("level01music",{loop: true}).setVolume(1);
    
    // // start the background music
    // this.music.play();

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to level_01_game scene");

        this.scene.start(
          "level_01_game",
          // Optional parameters
          {}
        );
      },
      this
    );

    // Add any text in the main page
    this.add.text(10, 10, "Press spacebar to continue", {
      font: "30px Courier",
      fill: "#FFFFFF",
    });

    // Create all the game animations here
  }
}
