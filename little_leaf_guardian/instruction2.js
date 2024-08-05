class instruction2 extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'instruction2' });
    }

    preload() {
        this.load.image('instruction2Img','assets/scenes/instruction2.jpg');

    }

    create () {


        this.add.image(0, 0, 'instruction2').setOrigin(0, 0);
        
        this.add.text(0,580, 'Press Space to continue', { font: '24px Courier', fill: '#000000' });

        console.log("*** instruction2 scene");
        this.scene.bringToTop("instruction2");
     
       // Add image and detect spacebar keypress
       this.add.image(0, 0, 'instruction2Img').setOrigin(0, 0);
     
       // Check for spacebar or any key here
       let spaceDown = this.input.keyboard.addKey("SPACE");
     
       // On spacebar event, call the world scene
       spaceDown.on("down", function () {
       console.log("Jump to play scene");
       window.heart = 3;
       window.key = 0;
       window.goldseed = 0
       
       this.scene.start("play");
         },
         this
       );
       
       }
     
     }