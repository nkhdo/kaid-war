import Phaser from 'phaser';
import Character from '../libs/character';

class WorldScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'WorldScene',
    });
    this.player = null;
  }

  create() {
    Character.registerAnimations(this);
    const map = this.make.tilemap({ key: 'map' });
    const tiles = map.addTilesetImage('spritesheet', 'tiles');
    map.createStaticLayer('Grass', tiles, 0, 0);
    const obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);

    this.player = new Character(this, 50, 50, {
      head: 'robe_hood',
      legs: 'pants_greenish',
      belt: 'rope',
      body: 'skeleton',
    });
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.player.sprites.body.setCollideWorldBounds(true);
    this.physics.add.collider(this.player.sprites, obstacles);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player.sprites);
    this.cameras.main.roundPixels = true;
  }
  update(time, delta) {
    this.player.sprites.body.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.player.sprites.body.setVelocityX(-100);
    } else if (this.cursors.right.isDown) {
      this.player.sprites.body.setVelocityX(100);
    }

    // Vertical movement
    if (this.cursors.up.isDown) {
      this.player.sprites.body.setVelocityY(-100);
    } else if (this.cursors.down.isDown) {
      this.player.sprites.body.setVelocityY(100);
    }

    if (this.cursors.left.isDown) {
      this.player.animate('walk', 'left');
    } else if (this.cursors.right.isDown) {
      this.player.animate('walk', 'right');
    } else if (this.cursors.up.isDown) {
      this.player.animate('walk', 'up');
    } else if (this.cursors.down.isDown) {
      this.player.animate('walk', 'down');
    } else {
      this.player.stopAnimation();
    }
  }
}

export default WorldScene;
