class instruction1 extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'instruction1' });
    }

    preload() {
        this.load.image('instruction1Img','assets/scenes/instruction1.jpg');

    }

    create () {


        this.add.image(0, 0, 'instruction1').setOrigin(0, 0);
        
        this.add.text(0,580, 'Press Space to continue', { font: '24px Courier', fill: '#000000' });

        console.log("*** instruction1 scene");
        this.scene.bringToTop("instruction1");
     
       // Add image and detect spacebar keypress
       this.add.image(0, 0, 'instruction1Img').setOrigin(0, 0);
     
       // Check for spacebar or any key here
       let spaceDown = this.input.keyboard.addKey("SPACE");
     
       // On spacebar event, call the world scene
       spaceDown.on("down", function () {
       console.log("Jump to instruction2 scene");
       window.heart = 3;
       window.key = 0;
       window.goldseed = 0
       
       this.scene.start("instruction2");
         },
         this
       );
       
       }
     
     }