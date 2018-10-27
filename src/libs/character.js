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
import constants from '../config/constants';

class Character {
  constructor(scene, x, y, {
    behind = null,
    body = 'human',
    feet = null,
    legs = null,
    torso = null,
    belt = null,
    head = null,
    hands = null,
    weapon = null,
  } = {}) {
    this.scene = scene;
    this.sprites = this.scene.add.container(x, y);
    this.scene.physics.add.existing(this.sprites);
    this.sprites.body.setCircle(32);

    this.behind = new Behind(this, behind);
    this.body = new Body(this, body);
    this.feet = new Feet(this, feet);
    this.legs = new Legs(this, legs);
    this.torso = new Torso(this, torso);
    this.belt = new Belt(this, belt);
    this.head = new Head(this, head);
    this.hands = new Hands(this, hands);
    this.weapon = new Weapon(this, weapon);

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

    this.animate('walk', 'down');
  }

  animate(animation, direction, loop = false) {
    this.parts.forEach(part => part.animate(animation, direction, loop));
  }

  stopAnimation() {
    this.parts.forEach(part => part.stopAnimation());
  }
}

Character.registerAnimations = (scene) => {
  const { animations } = scene.cache.json.get('kaidStats');
  animations.forEach(([key, framesCount, isMulti]) => {
    const frameRate = constants.ANIMATION_FRAME_RATE;
    const repeat = key.startsWith('walk') ? -1 : 0;
    // isMulti: the animation has 4 directions (up/down/left/right)
    if (isMulti) {
      ['up', 'down', 'left', 'right'].forEach((direction) => {
        const dKey = `${key}/${direction}`;
        scene.anims.create({
          key: dKey,
          frames: createFrames(dKey, 1, framesCount - 1),
          frameRate,
          repeat,
        });
      });
    } else {
      scene.anims.create({
        key,
        frames: createFrames(key, 1, framesCount - 1),
        frameRate,
        repeat,
      });
    }
  });
};

export default Character;
