class level_03_game extends Phaser.Scene {

    constructor() {
        super({ key: 'level_03_game' });
        
        // Put global variable here
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {
    // this is the exported JSON map file
    this.load.tilemapTiledJSON("level_03_game", "assets/A1_map3.tmj");

     //map
     this.load.image("parktilesets_32x32IMG", "assets/parktilesets_32x32.png");
 
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
    this.load.image("underground_d3IMG","assets/Day2/D2_bg2.png")
    this.load.image("d3_bg1IMG","assets/Day3/day3_bg1.png")
    this.load.image("d3_bg2IMG","assets/Day3/day3_bg2.png")
    this.load.image("d3_bg3IMG","assets/Day3/day3_bg3.png")
    this.load.image("d3_bg4IMG","assets/Day3/day3_bg4.png")
    }

    create() {
    // Load the tilemap to map variable
    this.level_03_game = this.make.tilemap({key: 'level_03_game'});

    // Add the two background for parallax effect
    // create an tiled sprite with the size of our game screen
    this.bg_b = this.add.tileSprite(0, 0, game.config.width, 430, "d3_bg1IMG");
    this.bg_b.setOrigin(0, 0);
    this.bg_b.setScrollFactor(0);

    // Add a second background layer.
    this.bg_f2 = this.add.tileSprite(0, 100, game.config.width, 750, "d3_bg2IMG");
    this.bg_f2.setOrigin(0, 0);
    this.bg_f2.setScrollFactor(0);

     // Add a third background layer.
     this.bg_f3 = this.add.tileSprite(0, 100, game.config.width, 750, "d3_bg3IMG");
     this.bg_f3.setOrigin(0, 0);
     this.bg_f3.setScrollFactor(0);

      // Add a fourth background layer.
      this.bg_f4 = this.add.tileSprite(0, 100, game.config.width, 750, "d3_bg4IMG");
      this.bg_f4.setOrigin(0, 0);
      this.bg_f4.setScrollFactor(0);

    console.log('*** level_03_game scene');

    // Create the map from main
    let map = this.make.tilemap({
        key: "level_03_game",
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

      let platformTiles = map.addTilesetImage("parktilesets_32x32", "parktilesets_32x32IMG");
      let undergroundTiles = map.addTilesetImage("D2_bg4", "underground_d3IMG");

      let tilesArray = [platformTiles,undergroundTiles];

      // Load in layers by layers
      this.undergroundLayer = map.createLayer("underground",tilesArray,0,0);
      this.platformLayer = map.createLayer("platform", tilesArray, 0, 0);
      this.groundLayer = map.createLayer("ground",tilesArray,0,0);
      
      //Load in items
      let start = map.findObject("character",(obj)=>obj.name === "start");

      let seed1 = map.findObject("seeds",(obj)=>obj.name === "seed1");
      let seed2 = map.findObject("seeds",(obj)=>obj.name === "seed2");
      let seed3 = map.findObject("seeds",(obj)=>obj.name === "seed3");
      let seed4 = map.findObject("seeds",(obj)=>obj.name === "seed4");
      let seed5 = map.findObject("seeds",(obj)=>obj.name === "seed5");
      let seed6 = map.findObject("seeds",(obj)=>obj.name === "seed6");
      let seed7 = map.findObject("seeds",(obj)=>obj.name === "seed7");

      let enemy1 = map.findObject("enemies",(obj)=>obj.name === "enemy1");
      let enemy2 = map.findObject("enemies",(obj)=>obj.name === "enemy2");
      let enemy3= map.findObject("enemies",(obj)=>obj.name === "enemy3");
      let enemy4 = map.findObject("enemies",(obj)=>obj.name === "enemy4");
      let enemy5= map.findObject("enemies",(obj)=>obj.name === "enemy5");
      let enemy6 = map.findObject("enemies",(obj)=>obj.name === "enemy6");
      let enemy7= map.findObject("enemies",(obj)=>obj.name === "enemy7");
      let enemy8 = map.findObject("enemies",(obj)=>obj.name === "enemy8");

      //Adam is the alias in preload
      this.player=this.physics.add.sprite(start.x,start.y,"Adam_run_32x32IMG");

      //debug player
      window.layer=this.player

      this.seed1=this.physics.add.sprite(seed1.x,seed1.y,"samplingIMG");
      this.seed2=this.physics.add.sprite(seed2.x,seed2.y,"samplingIMG");
      this.seed3=this.physics.add.sprite(seed3.x,seed3.y,"samplingIMG");
      this.seed4=this.physics.add.sprite(seed4.x,seed4.y,"samplingIMG");
      this.seed5=this.physics.add.sprite(seed5.x,seed5.y,"samplingIMG");
      this.seed6=this.physics.add.sprite(seed6.x,seed6.y,"samplingIMG");
      this.seed7=this.physics.add.sprite(seed7.x,seed7.y,"samplingIMG");

      this.enemy1=this.physics.add.sprite(enemy1.x,enemy1.y,"3enemy32x32IMG");
      this.enemy2=this.physics.add.sprite(enemy2.x,enemy2.y,"3enemy32x32IMG");
      this.enemy3=this.physics.add.sprite(enemy3.x,enemy3.y,"3enemy32x32IMG");
      this.enemy4=this.physics.add.sprite(enemy4.x,enemy4.y,"3enemy32x32IMG");
      this.enemy5=this.physics.add.sprite(enemy5.x,enemy5.y,"3enemy32x32IMG");
      this.enemy6=this.physics.add.sprite(enemy6.x,enemy6.y,"3enemy32x32IMG");
      this.enemy7=this.physics.add.sprite(enemy7.x,enemy7.y,"3enemy32x32IMG");
      this.enemy8=this.physics.add.sprite(enemy8.x,enemy8.y,"3enemy32x32IMG");

      this.tweens.add({
        targets: this.enemy1,
        x: enemy1.x+250,
        flipX: false,
        yoyo: true,
        duration: 800,
        repeat: -1
      })
    
      this.tweens.add({
        targets: this.enemy2,
        x: enemy2.x+50,
        flipX:  false,
        yoyo: true,
        duration: 300,
        repeat: -1
    })
    
    this.tweens.add({
      targets: this.enemy3,
      x: enemy3.x+100,
      flipX:  false,
      yoyo: true,
      duration: 600,
      repeat: -1
    })
    
    this.tweens.add({
      targets: this.enemy4,
      x: enemy4.x+250,
      flipX:  false,
      yoyo: true,
      duration: 800,
      repeat: -1
    })

    this.tweens.add({
      targets: this.enemy5,
      x: enemy5.x+200,
      flipX:  false,
      yoyo: true,
      duration: 800,
      repeat: -1
    })
    
    this.tweens.add({
      targets: this.enemy6,
      x: enemy6.x+250,
      flipX: false,
      yoyo: true,
      duration: 800,
      repeat: -1
    })

    this.tweens.add({
        targets: this.enemy7,
        x: enemy7.x+50,
        flipX:  false,
        yoyo: true,
        duration: 300,
        repeat: -1
      })
      
      this.tweens.add({
        targets: this.enemy8,
        x: enemy8.x+250,
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
    
    // //enemies
    this.physics.add.collider(this.groundLayer, [this.enemy1,this.enemy3,this.enemy4,this.enemy5,this.enemy6,this.enemy8]);
    this.physics.add.collider(this.platformLayer,[this.enemy2,this.enemy7]);

    this.physics.add.collider(this.platformLayer, [this.seed4,this.seed6,this.seed7]);
    this.physics.add.collider(this.groundLayer, [this.seed1,this.seed2,this.seed3,this.seed5]);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // set bounds so the camera won't go outside the game world
   this.cameras.main.setBounds(0, 0, this.level_03_game.widthInPixels, this.level_03_game.heightInPixels);

    // camera follow player
    this.cameras.main.startFollow(this.player);

     // set background color, so the sky is not black    
     this.cameras.main.setBackgroundColor('#39639e');

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
      this.physics.add.overlap(this.player, [this.enemy1, this.enemy2,this.enemy3, this.enemy4,this.enemy5, this.enemy6,this.enemy7, this.enemy8], globalHitEnemies, null, this);
      this.physics.add.overlap(this.player, [this.seed1, this.seed2,this.seed3, this.seed4,this.seed5, this.seed6,this.seed7], globalCollectKey, null, this);
  
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
              //this.blasterSnd.play();   
          }

              // Parallax scrolling codes
    // scroll the texture of the tilesprites proportionally to the camera scroll
    this.bg_b.tilePositionX = this.cameras.main.scrollX * .2;
    this.bg_f2.tilePositionX = this.cameras.main.scrollX * .5;
    this.bg_f3.tilePositionX = this.cameras.main.scrollX * .7;
    this.bg_f4.tilePositionX = this.cameras.main.scrollX * .9;

    }/////////////////// end of update //////////////////////////////

     // Function to jump to level_04_game
  level_03_game(player, tile) {
    console.log("level_01_game function");
    this.scene.start("level_04_game", {
      player: player,
      inventory: this.inventory,
    });
}//////////// end of class world //////////////////////// 

    }
