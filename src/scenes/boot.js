import Phaser from 'phaser';

import mapData from '../assets/map/map.json';
import mapSpritesheet from '../assets/map/spritesheet.png';
import kaidTexture from '../assets/characters/kaid.png';
import kaidAtlas from '../assets/characters/kaid.json';
import kaidStats from '../assets/characters/kaid_stats.json';

class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene',
    });
  }
  preload() {
    this.load.image('tiles', mapSpritesheet);
    this.load.tilemapTiledJSON('map', mapData);
    this.load.atlas('kaid', kaidTexture, kaidAtlas);
    this.load.json('kaidStats', kaidStats);
  }
  create() {
    this.scene.start('WorldScene');
  }
}

export default BootScene;
