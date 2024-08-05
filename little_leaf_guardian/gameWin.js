class gamewin extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gamewin' });
    }

    preload() {
        this.load.image('gamewinImg','assets/scenes/win.jpg');

    }

    create () {


      this.scene.bringToTop("gameWin");
      window.music.setVolume(0);

        this.add.image(0, 0, 'gamewin').setOrigin(0, 0);
        
        this.add.text(0,580, 'Press Enter to continue', { font: '24px Courier', fill: '#000000' });

        // console.log("*** gamewin scene");
        this.scene.bringToTop("gamewin");
     
       // Add image and detect spacebar keypress
       this.add.image(0, 0, 'gamewinImg').setOrigin(0, 0);
     
       // Check for spacebar or any key here
       let enterDown = this.input.keyboard.addKey("ENTER");
     
       // On spacebar event, call the world scene
       enterDown.on("down", function () {
      //  console.log("Jump to main scene");
       window.heart = 3;
       window.key = 0;
       window.goldseed = 0
       
       this.scene.start("main");
         },
         this
       );
       
       }
     
     }


//         console.log("This is Gameover");

//         //this.input.once('pointerdown', function(){
//         var spaceDown = this.input.keyboard.addKey('SPACE');
        
//         spaceDown.on('down', function(){
//         console.log("Spacebar pressed, goto level_01_game");
//         this.scene.stop("gameover");
//         this.scene.start("level_01_game");
//         }, this );
		
		
// 		var key1 = this.input.keyboard.addKey(49);
// 		var key2 = this.input.keyboard.addKey(50);
// 		var key3 = this.input.keyboard.addKey(51);
//         var key4 = this.input.keyboard.addKey(52);
		
// 		key1.on('down', function(){
// 		this.scene.start("level_01_game");	
// 		}, this );
	

// 		key2.on('down', function(){
// 		this.scene.start("level_02_game");	
// 		}, this );

// 		key3.on('down', function(){
// 		this.scene.start("level_03_game");	
// 		}, this );

//         key4.on('down', function(){
//             this.scene.start("level_04_game");	
//             }, this );

//     }

// }
