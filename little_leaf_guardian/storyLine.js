class storyline extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'storyline' });
    }

    preload() {
        this.load.image('storylineImg','assets/scenes/storyline.jpg');

    }

    create () {


        this.add.image(0, 0, 'storyline').setOrigin(0, 0);
        
        this.add.text(0,580, 'Press Enter to continue', { font: '24px Courier', fill: '#000000' });

        // console.log("*** storyline scene");
        this.scene.bringToTop("storyline");
     
       // Add image and detect spacebar keypress
       this.add.image(0, 0, 'storylineImg').setOrigin(0, 0);
     
       // Check for spacebar or any key here
       let spaceDown = this.input.keyboard.addKey("SPACE");
     
       // On spacebar event, call the world scene
       spaceDown.on("down", function () {
      //  console.log("Jump to instruction1 scene");
       window.heart = 3;
       window.key = 0;
       window.goldseed = 0
       
       this.scene.start("instruction1");
         },
         this
       );
       
       }
     
     }