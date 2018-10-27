import Behind from './body_parts/behind';
import Body from './body_parts/body';
import Feet from './body_parts/feet';
import Legs from './body_parts/legs';
import Torso from './body_parts/torso';
import Belt from './body_parts/belt';
import Head from './body_parts/head';
import Hands from './body_parts/hands';
import Weapon from './body_parts/weapon';
import createFrames from '../utils/create_frames';

class Character {
  constructor(scene, x, y) {
    this.scene = scene;

    this.behind = new Behind(this.scene, null);
    this.behind.render(x, y);
    this.body = new Body(this.scene, 'human');
    this.body.render(x, y);
    this.feet = new Feet(this.scene, 'plate_armor_shoes');
    this.feet.render(x, y);
    this.legs = new Legs(this.scene, 'plate_armor_pants');
    this.legs.render(x, y);
    this.torso = new Torso(this.scene, 'chain_armor_torso');
    this.torso.render(x, y);
    this.belt = new Belt(this.scene, 'leather');
    this.belt.render(x, y);
    this.head = new Head(this.scene, 'plate_armor_helmet');
    this.head.render(x, y);
    this.hands = new Hands(this.scene, 'plate_armor_gloves');
    this.hands.render(x, y);
    this.weapon = new Weapon(this.scene, 'shield_cutout_chain_armor_helmet');
    this.weapon.render(x, y);

    this.parts = [
      this.behind,
      this.body,
      this.feet,
      this.legs,
      this.torso,
      this.belt,
      this.head,
      this.hands,
      this.weapon,
    ];

    this.animate('hurt', 'down');
  }

  animate(animation, direction, loop = false) {
    this.parts.forEach(part => part.animate(animation, direction, loop));
  }
}

Character.registerAnimations = (scene) => {
  const { animations } = scene.cache.json.get('kaidStats');
  animations.forEach(([key, framesCount, isMulti]) => {
    // isMulti: the animation has 4 directions (up/down/left/right)
    if (isMulti) {
      ['up', 'down', 'left', 'right'].forEach((direction) => {
        const dKey = `${key}/${direction}`;
        scene.anims.create({
          key: dKey,
          frames: createFrames(dKey, 1, framesCount - 1),
          frameRate: 10,
          repeat: -1,
        });
      });
    } else {
      scene.anims.create({
        key,
        frames: createFrames(key, 1, framesCount - 1),
        frameRate: 10,
        repeat: 0,
      });
    }
  });
};

export default Character;
