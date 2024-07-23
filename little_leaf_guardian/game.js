﻿var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 20,
    height: 32 * 20,
    physics: {
        default: 'arcade',
        arcade: {
            gravity:{y:500},
            debug: true
        }
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    // backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload,main,level_01_game,level_02_game,level_03_game,level_04_game,showInventory]
};

var game = new Phaser.Game(config);
window.heart = 3
window.key = 0