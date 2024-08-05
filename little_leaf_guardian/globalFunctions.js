////////////////////////////////////////////////////////
//
// access this function using updateInventory.call(this)
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
function updateInventory() {
    console.log("*** updateInventory()")
    // Emit events showInventory
    this.inventory = {}
    this.inventory.key = window.key
    this.inventory.goldseed = window.goldseed
    this.inventory.heart = window.heart
     
    console.log('*** updateInventory() Emit event', this.inventory)
    this.invEvent = (event, data) =>  { 
			    this.scene.get('showInventory').events.emit(event, data); 
		    }
    this.invEvent("inventory", this.inventory);
  }
  
  ////////////////////////////////////////////////////////
  //
  // access this function with globalHitFire
  // Uses a JS function to prevent repeated codes
  // 
  ///////////////////////////////////////////////////////
  function globalHitEnemies(player,item) {
      console.log("*** player overlap enemy");
     
      this.collectItemSnd = this.sound.add("ouch").setVolume(1);
      this.collectItemSnd.play()

      // Shake screen
     this.cameras.main.shake(100);
     //this.hitenemySnd.play();
  
		  // deduct heart
      window.heart--;
      item.disableBody(true, true);
      
      // Call globalFunctions.js updateInventory
      updateInventory.call(this)
 
    if (window.heart == 0){
	    console.log("*** player gameOver");
      this.scene.start("gameover");
      this.collectItemSnd = this.sound.add("death").setVolume(1);
      this.collectItemSnd.play()
      //this.loselifeSnd.play();
    }
  }

  if (
    this.player.x > 6337.55 && window.key>4
  ) {
    console.log("Go to win function");
    this.scene.start("gamewin");
      this.collectItemSnd = this.sound.add("victory").setVolume(1);
      this.collectItemSnd.play()
  }
  
  ////////////////////////////////////////////////////////
  //
  // access this function with globalCollectKey
  // Uses a JS function to prevent repeated codes
  // 
  /////////////////////////////////////////////////////// 
 function globalCollectKey(player,item) {
    console.log("*** player overlap key");

    this.collectItemSnd = this.sound.add("collect").setVolume(0.5);
    this.collectItemSnd.play()
   
    // Shake screen
   this.cameras.main.shake(0);

   //this.hitenemySnd.play();

	// increase key count
    window.key++;
    item.disableBody(true, true);
    updateInventory.call(this)
}

function globalCollectSeeds(player,item) {
  console.log("*** player overlap goldseed");

  this.collectItemSnd = this.sound.add("collect").setVolume(0.5);
  this.collectItemSnd.play()
 
  // Shake screen
 this.cameras.main.shake(0);

 //this.hitenemySnd.play();

// increase key count
  window.goldseed++;
  item.disableBody(true, true);
  updateInventory.call(this)
}

function globalKillEnemies(bullet,item) {
  console.log("*** bullet overlap enemies");

  this.collectItemSnd = this.sound.add("damage").setVolume(0.5);
  this.collectItemSnd.play()
 
//   // Shake screen
//  this.cameras.main.shake(0);

//  //this.hitenemySnd.play();

// // increase key count
//   window.goldseed++;
  item.disableBody(true, true);
//   updateInventory.call(this)
}
