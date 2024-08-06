class level_02_game extends Phaser.Scene {

    constructor() {
        super({ key: 'level_02_game' });
        
        // Put global variable here
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {
    // this is the exported JSON map file
    this.load.tilemapTiledJSON("level_02_game", "assets/A1_map2.tmj");

     //map
     this.load.image("towntilesets_32x32IMG", "assets/towntilesets_32x32.png");
 
     //items collect
     this.load.image("samplingIMG","assets/nsampling32x32.png")
 
     //characters
     this.load.spritesheet("Adam_run_32x32IMG","assets/Adam_run_32x32.png",{frameWidth:32,frameHeight:64})
     this.load.spritesheet("Adam_idle_32x32IMG","assets/Adam_idle32x32.png",{frameWidth:32,frameHeight:64})

    //character's power
    this.load.image("powerIMG","assets/power.png")

    //enemies
    this.load.image("1enemy32x32IMG","assets/1enemy32x32.png",{frameWidth:32,frameHeight:32})
    this.load.image("2enemy32x32IMG","assets/2enemy32x32.png",{frameWidth:64,frameHeight:64})
    this.load.image("3enemy32x32IMG","assets/3enemy32x32.png",{frameWidth:32,frameHeight:32})

    //scrolling bg
    this.load.image("underground_d2IMG","assets/Day2/underground_d2.png")
    this.load.image("D2_bg1IMG","assets/Day2/D2_bg1.png")
    this.load.image("D2_bg2IMG","assets/Day2/D2_bg2.png")
    this.load.image("D2_bg3IMG","assets/Day2/D2_bg3.png")
    this.load.image("D2_bg4IMG","assets/Day2/D2_bg4.png")
    this.load.image("D2_bg5IMG","assets/Day2/D2_bg5.png")
    }

    create() {
    // Load the tilemap to map variable
    this.level_02_game = this.make.tilemap({key: 'level_02_game'});

    // Add the two background for parallax effect
    // create an tiled sprite with the size of our game screen

    // Add a first background layer.
    this.D2_bg1 = this.add.tileSprite(0, 0, game.config.width, 750, "D2_bg1IMG");
    this.D2_bg1.setOrigin(0, 0);
    this.D2_bg1.setScrollFactor(0);

    // Add a second background layer.
    this.D2_bg2 = this.add.tileSprite(0, 100, game.config.width, 750, "D2_bg2IMG");
    this.D2_bg2.setOrigin(0, 0);
    this.D2_bg2.setScrollFactor(0);

    // Add a third background layer.
    this.D2_bg3 = this.add.tileSprite(0, 100, game.config.width, 750, "D2_bg3IMG");
    this.D2_bg3.setOrigin(0, 0);
    this.D2_bg3.setScrollFactor(0);

    // // Add a fourth background layer.
    // this.bg4 = this.add.tileSprite(0, 100, game.config.width, 750, "bg4IMG");
    // this.bg4.setOrigin(0, 0);
    // this.bg4.setScrollFactor(0);

    // Add a fifth background layer.
    this.D2_bg5 = this.add.tileSprite(0, 100, game.config.width, 750, "D2_bg5IMG");
    this.D2_bg5.setOrigin(0, 0);
    this.D2_bg5.setScrollFactor(0);

    // console.log('*** level_02_game scene');

    // Create the map from main
    let map = this.make.tilemap({
        key: "level_02_game",
      });

    //Load in players

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('Adam_run_32x32IMG', {
            start: 0,
            end: 5
        }),
        frameRate: 7,
        repeat: -1
    });
  
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('Adam_idle_32x32IMG', {
          start: 3,
          end: 3
      }),
      frameRate: 5,
      repeat: -1
  });
  
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('Adam_run_32x32IMG', {
            start: 12,
            end: 17
        }),
        frameRate: 7,
        repeat: -1
      });
      
        // let background_d2Tiles = map.addTilesetImage("background_d2", "background_d2IMG");
        let platformTiles = map.addTilesetImage("towntilesets_32x32", "towntilesets_32x32IMG");
        let undergroundTiles = map.addTilesetImage("underground_d2", "underground_d2IMG");

        let tilesArray = [platformTiles,undergroundTiles];

        // Load in layers by layers
        this.undergroundLayer = map.createLayer("underground",tilesArray,0,0);
        this.platformLayer = map.createLayer("platform", tilesArray, 0, 0);
        this.decorLayer = map.createLayer("decor", tilesArray, 0, 0);
        this.groundLayer = map.createLayer("ground",tilesArray,0,0);

         //Load in items
        let start = map.findObject("character",(obj)=>obj.name === "start");

        let seed1 = map.findObject("seeds",(obj)=>obj.name === "seed1");
        let seed2 = map.findObject("seeds",(obj)=>obj.name === "seed2");
        let seed3 = map.findObject("seeds",(obj)=>obj.name === "seed3");
        let seed4 = map.findObject("seeds",(obj)=>obj.name === "seed4");
        let seed5 = map.findObject("seeds",(obj)=>obj.name === "seed5");
        let seed6 = map.findObject("seeds",(obj)=>obj.name === "seed6");

        let enemy1 = map.findObject("enemies",(obj)=>obj.name === "enemy1");
        let enemy2 = map.findObject("enemies",(obj)=>obj.name === "enemy2");
        let enemy3= map.findObject("enemies",(obj)=>obj.name === "enemy3");
        let enemy4 = map.findObject("enemies",(obj)=>obj.name === "enemy4");
        let enemy5= map.findObject("enemies",(obj)=>obj.name === "enemy5");
        let enemy6 = map.findObject("enemies",(obj)=>obj.name === "enemy6");

        //Adam is the alias in preload
        this.player=this.physics.add.sprite(start.x,start.y,"Adam_run_32x32IMG");

          //debug player
        window.layer=this.player

        this.bullet = this.physics.add.sprite(
          this.player.x,
          this.player.y,
          "powerIMG"
        )
        this.bullet.setVisible(false);
    
        let attackRight = this.input.keyboard.addKey("SPACE");
    
        attackRight.on(
          "down",
          function () {
            this.attackRight();
          },
          this
        );    

        this.seed1=this.physics.add.sprite(seed1.x,seed1.y,"samplingIMG");
        this.seed2=this.physics.add.sprite(seed2.x,seed2.y,"samplingIMG");
        this.seed3=this.physics.add.sprite(seed3.x,seed3.y,"samplingIMG");
        this.seed4=this.physics.add.sprite(seed4.x,seed4.y,"samplingIMG");
        this.seed5=this.physics.add.sprite(seed5.x,seed5.y,"samplingIMG");
        this.seed6=this.physics.add.sprite(seed6.x,seed6.y,"samplingIMG");

        this.enemy1=this.physics.add.sprite(enemy1.x,enemy1.y,"1enemy32x32IMG");
        this.enemy2=this.physics.add.sprite(enemy2.x,enemy2.y,"1enemy32x32IMG");
        this.enemy3=this.physics.add.sprite(enemy3.x,enemy3.y,"1enemy32x32IMG");
        this.enemy4=this.physics.add.sprite(enemy4.x,enemy4.y,"1enemy32x32IMG");
        this.enemy5=this.physics.add.sprite(enemy5.x,enemy5.y,"1enemy32x32IMG");
        this.enemy6=this.physics.add.sprite(enemy6.x,enemy6.y,"1enemy32x32IMG");

        this.tweens.add({
          targets: this.enemy1,
          x: enemy1.x+80,
          flipX: false,
          yoyo: true,
          duration: 800,
          repeat: -1
        })
      
        this.tweens.add({
          targets: this.enemy2,
          x: enemy2.x+100,
          flipX:  false,
          yoyo: true,
          duration: 800,
          repeat: -1
      })
      
      this.tweens.add({
        targets: this.enemy3,
        x: enemy3.x+200,
        flipX:  false,
        yoyo: true,
        duration: 1000,
        repeat: -1
      })
      
      this.tweens.add({
        targets: this.enemy4,
        x: enemy4.x+250,
        flipX:  false,
        yoyo: true,
        duration: 1500,
        repeat: -1
      })

      this.tweens.add({
        targets: this.enemy5,
        x: enemy5.x+200,
        flipX:  false,
        yoyo: true,
        duration: 1000,
        repeat: -1
      })
      
      this.tweens.add({
        targets: this.enemy6,
        x: enemy6.x+50,
        flipX: false,
        yoyo: true,
        duration: 800,
        repeat: -1
      })

    // set the boundaries of our game world
    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;

    // // Setup collider for ground and platform layer
    // this.groundLayer.setCollisionByProperty({ collides: true });
    // this.platformLayer.setCollisionByProperty({ collides: true });

    this.groundLayer.setCollisionByExclusion(-1, true);
    this.platformLayer.setCollisionByExclusion(-1, true);

    // What will collider witg what layers
    //characters
    this.physics.add.collider(this.groundLayer, this.player);
    this.physics.add.collider(this.platformLayer, this.player);
    
    //enemies
    this.physics.add.collider(this.groundLayer, [this.enemy1,this.enemy2,this.enemy6]);
    this.physics.add.collider(this.platformLayer,[this.enemy3,this.enemy4,this.enemy5]);

    this.physics.add.collider(this.platformLayer, [this.seed3,this.seed4]);
    this.physics.add.collider(this.groundLayer, [this.seed1,this.seed2,this.seed5,this.seed6]);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // set bounds so the camera won't go outside the game world
   this.cameras.main.setBounds(0, 0, this.level_02_game.widthInPixels, this.level_02_game.heightInPixels);

    // camera follow player
    this.cameras.main.startFollow(this.player);

     // set background color, so the sky is not black    
     this.cameras.main.setBackgroundColor('background_d2');

         //this.input.once('pointerdown', function(){
    
		var key1 = this.input.keyboard.addKey(49);
		var key2 = this.input.keyboard.addKey(50);
		var key3 = this.input.keyboard.addKey(51);
    var key4 = this.input.keyboard.addKey(52);
		
		key1.on('down', function(){
		this.scene.start("level_01_game");	
		}, this );

		key2.on('down', function(){
		this.scene.start("level_02_game");	
		}, this );

		key3.on('down', function(){
		this.scene.start("level_03_game");	
		}, this );

    key4.on('down', function(){
      this.scene.start("level_04_game");	
      }, this );
    
      // Call to update inventory items
    this.time.addEvent({
      delay: 100,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
    });
    
    // start another scene in parallel
    this.scene.launch("showInventory");
    
    // Call globalFunction globalHitEnemy on overlap
    this.physics.add.overlap(this.player, [this.enemy1, this.enemy2,this.enemy3, this.enemy4,this.enemy5, this.enemy6], globalHitEnemies, null, this);
    this.physics.add.overlap(this.player, [this.seed1, this.seed2,this.seed3, this.seed4,this.seed5,this.seed6], globalCollectKey, null, this);
    this.physics.add.overlap(this.bullet, [this.enemy1, this.enemy2,this.enemy3, this.enemy4,this.enemy5, this.enemy6], globalKillEnemies, null, this);

  } /////////////////// end of create //////////////////////////////

    update() {
        let speed = 260;

        if (this.cursors.left.isDown)
          {
              this.player.body.setVelocityX(-250);
              this.player.anims.play('left', true); // walk left
              //this.player.flipX = true; // flip the sprite to the left
          }
          else if (this.cursors.right.isDown)
          {
              this.player.body.setVelocityX(250);
              this.player.anims.play('right', true);
              //this.player.flipX = false; // use the original sprite looking to the right
          } else {
              this.player.body.setVelocityX(0);
              this.player.anims.play('idle', true);
          }
          // jump 
          if (this.cursors.up.isDown && this.player.body.onFloor())
          {
              this.player.body.setVelocityY(-430);   
              this.jumpSnd = this.sound.add("jump").setVolume(0.5);
              this.jumpSnd.play()   
          }


          if (
            this.player.x > 6337.55 && window.key>2
          ) {
            // console.log("Go to level 3 function");
            window.heart=3
            this.level_03_game();
          }
      
          if (this.player.y>605.00 ) {
            window.heart--

            if (window.heart == 0){
              // console.log("*** player gameOver");
              this.scene.start("gameover");
              this.collectItemSnd = this.sound.add("death").setVolume(1);
              this.collectItemSnd.play()
              //this.loselifeSnd.play();
            }
            
            this.scene.start("level_02_game")
          }

        // Parallax scrolling codes
        // scroll the texture of the tilesprites proportionally to the camera scroll
        this.D2_bg1.tilePositionX = this.cameras.main.scrollX * .2;
        this.D2_bg2.tilePositionX = this.cameras.main.scrollX * .5;
        this.D2_bg3.tilePositionX = this.cameras.main.scrollX * .7;
        // this.bg4.tilePositionX = this.cameras.main.scrollX * .9;
        this.D2_bg5.tilePositionX = this.cameras.main.scrollX * .9;

    }/////////////////// end of update //////////////////////////////

    attackRight() {
    
      // console.log("attack right");
      this.shootSnd = this.sound.add("shoot").setVolume(0.5);
      this.shootSnd.play()
      this.bullet.x = this.player.x;
      this.bullet.y = this.player.y;
      this.bullet.body.setAllowGravity(false);
  
     
      this.bullet.setVisible(true);
      this.bullet.body.setEnable(true);
  
      // speed of the bullet
      this.bullet.body.setVelocityX(500);
      this.bullet.body.setVelocityY(0);
    }

    // Function room1
  room1(player, tile) {
    // console.log("Function to jump to room1 scene");
    this.scene.start("room1",);
  }

     // Function to jump to level_03_game
  level_03_game(player, tile) {
    // console.log("level_03_game function");
    this.scene.start("level_03_game", {
      player: player,
      inventory: this.inventory,
    });
  }
}//////////// end of class world //////////////////////// 

