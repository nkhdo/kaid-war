import Phaser from 'phaser';

import mapData from '../assets/map/map.json';
import mapSpritesheet from '../assets/map/spritesheet.png';
import charSpritesheet from '../assets/characters/spritesheet.png';

class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene',
    });
  }
  preload() {
    // map tiles
    this.load.image('tiles', mapSpritesheet);
    // map in json format
    this.load.tilemapTiledJSON('map', mapData);
    // our two characters
    this.load.spritesheet('player', charSpritesheet, {
      frameWidth: 16,
      frameHeight: 16,
    });
    window.console.log('loaded');
  }
  create() {
    this.scene.start('WorldScene');
  }
}

export default BootScene;
