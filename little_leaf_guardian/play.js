class play extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'play' });
    }

    preload() {
        this.load.image('playImg','assets/scenes/play.jpg');

    }

    create () {


        this.add.image(0, 0, 'play').setOrigin(0, 0);
        
        this.add.text(0,580, 'Press Space to continue', { font: '24px Courier', fill: '#000000' });

        // console.log("*** play scene");
        this.scene.bringToTop("play");
     
       // Add image and detect spacebar keypress
       this.add.image(0, 0, 'playImg').setOrigin(0, 0);
     
       // Check for spacebar or any key here
       let spaceDown = this.input.keyboard.addKey("SPACE");
     
       // On spacebar event, call the world scene
       spaceDown.on("down", function () {
      //  console.log("Jump to level_01_game scene");
       window.heart = 3;
       window.key = 0;
       window.goldseed = 0
       
       this.scene.start("level_01_game");
         },
         this
       );
       
       }
     
     }