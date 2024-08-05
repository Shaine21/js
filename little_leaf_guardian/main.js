class main extends Phaser.Scene {

    constructor() {
        super({
            key: 'main'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here

        this.load.image('mainImg','assets/scenes/main.jpg');


        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        window.music.setVolume(0.2);

        // console.log('*** main scene');

        this.add.image(0, 0, 'main').setOrigin(0, 0);

        // console.log("*** main scene");
        this.scene.bringToTop("main");
     
       // Add image and detect spacebar keypress
       this.add.image(0, 0, 'mainImg').setOrigin(0, 0);
      

        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

        //this.music.play()
        //window.music = this.music


        // Add image and detect spacebar keypress
        //this.add.image(0, 0, 'main').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        // spaceDown.on('down', function () {
        //     console.log('Jump to storyline scene');

        //     this.scene.start('storyline',
        //         // Optional parameters
        //         {

        //         }
        //     );
        // }, this);

        spaceDown.on('down', function(){
            // console.log("Jump to storyline scene");
            this.scene.stop("main");
            this.scene.start("storyline");
            }, this );

        // // Add any text in the main page
        // this.add.text(90, 600, 'Press spacebar to continue', {
        //     font: '30px Courier',
        //     fill: '#FFFFFF'
        // });


        // Create all the game animations here

    }
    


}