class preload extends Phaser.Scene {
  constructor() {
    super("preload");

    // Put global variable here
  }

  preload() {this.load.audio("level01music","assets/RetroForest_David_Fesliyan.mp3")
    this.load.audio("collect","assets/collect_items.mp3")
    this.load.audio("ouch","assets/getHit.mp3")
    this.load.audio("death","assets/dead.mp3")
    this.load.audio("victory","assets/winning.mp3")
    this.load.audio("shoot","assets/power_shoot.mp3")
    this.load.audio("jump","assets/jump.mp3")
    this.load.audio("damage","assets/damage.mp3")
    this.load.image('mainImg','assets/scenes/main.jpg');
  }

  create() {
    // console.log("*** preload scene");

    this.add.image(0, 0, 'main').setOrigin(0, 0);

    // console.log("*** main scene");
    this.scene.bringToTop("main");
 
   // Add image and detect spacebar keypress
   this.add.image(0, 0, 'mainImg').setOrigin(0, 0);

    // turn on loop, adjust the volume
    window.music = this.sound.add("level01music",{loop: true}).setVolume(0.2);
    
    // start the background music
    window.music.play();

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        // console.log("Jump to storyline scene");

        this.scene.start(
          "storyline",
          // Optional parameters
          {}
        );
      },
      this
    );

    // // Add any text in the main page
    // this.add.text(10, 10, "Press spacebar to continue", {
    //   font: "30px Courier",
    //   fill: "#FFFFFF",
    // });

    // Create all the game animations here
  }
}
