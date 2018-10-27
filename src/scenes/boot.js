import Phaser from 'phaser';

import mapData from '../assets/map/map.json';
import mapSpritesheet from '../assets/map/spritesheet.png';
import charSpritesheet from '../assets/characters/spritesheet.png';
import kaidTexture from '../assets/characters/kaid.png';
import kaidAtlas from '../assets/characters/kaid.json';

class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene',
    });
  }
  preload() {
    this.load.image('tiles', mapSpritesheet);
    this.load.tilemapTiledJSON('map', mapData);
    this.load.spritesheet('player', charSpritesheet, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.atlas('kaid', kaidTexture, kaidAtlas);
  }
  create() {
    this.scene.start('WorldScene');
  }
}

export default BootScene;
