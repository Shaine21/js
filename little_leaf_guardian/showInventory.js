class showInventory extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'showInventory',
        active: false });
    }

    init(data) {
        this.player = data.player;
        this.inventory = data.inventory;
    }

    preload(){
        //Load heart image
        this.load.image('heart', 'assets/heart.png');
        this.load.image('samplingIMG', 'assets/nsampling32x32.png');
        this.load.image('gsamplingIMG', 'assets/gsampling32x32.png');
    }
 
   create () {

        //Place hearts at the top screen
        // console.log("***showInventory");
        this.scene.bringToTop("showInventory");

        // //black bar
        // var rect = new Phaser.Geom.Rectangle(29, 10, 500, 80);
        // var graphics = this.add.graphics({ fillStyle: { color: '0xffffff' } });
        // graphics.fillRectShape(rect).setScrollFactor(0)

       // Setup heart but visible to false
       this.heartimg1 = this.add.image (60,43,'heart').setScrollFactor(0).setVisible(false).setScale(1);
       this.heartimg2 = this.add.image (110,43,'heart').setScrollFactor(0).setVisible(false).setScale(1);
       this.heartimg3 = this.add.image (160,43,'heart').setScrollFactor(0).setVisible(false).setScale(1);

       this.key = this.add.image (850, 50, 'samplingIMG').setScrollFactor(0).setVisible(true);

       this.goldseed = this.add.image (740, 50, 'gsamplingIMG').setScrollFactor(0).setVisible(true);
               
       // Recv an event, call the method
       this.events.on('inventory', this.updateScreen, this)

       //Setup key
      
       this.keyNum = this.add.text(890, 23, window.key, {font: '50px Futura PT Medium', fill: '#ffffff'}).setScrollFactor(0);

       this.goldseedNum = this.add.text(780, 23, window.goldseed, {font: '50px Futura PT Medium', fill: '#ffffff'}).setScrollFactor(0);

    } //end of create

    updateScreen(data){
        // console.log('Received event inventory', data);

        this.keyNum.setText(data.key);
        this.goldseedNum.setText(data.goldseed);

        switch ( data.heart ) {

            case 3: 
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(true)
                this.heartimg3.setVisible(true)
                break;
    
            case 2:
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(true)
                this.heartimg3.setVisible(false)
                break;
    
            case 1:
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(false)
                this.heartimg3.setVisible(false)
                break;
             
            case 0:
                this.heartimg1.setVisible(false)
                this.heartimg2.setVisible(false)
                this.heartimg3.setVisible(false)
                break;    
    
            default:
            break;
        }
    
    }

} // end of class
