class BodyPart {
  constructor(scene, name, type, layer) {
    this.scene = scene;
    this.name = name;
    this.type = type;
    this.layer = layer;
    this.sprite = null;
    this.idleFrame = this.getIdleFrame();
  }

  render(x, y) {
    if (!this.sprite) {
      this.sprite = this.scene.physics.add.sprite(x, y, 'kaid', this.idleFrame);
    }
  }

  animate(animation, direction) {
    if (!this.sprite) {
      return;
    }
    if (animation === 'hurt') {
      this.hurt();
      return;
    }
    const animationName = `${animation}/${this.type}/${this.name}/${direction}`;
    this.checkAndPlay(animationName);
  }

  hurt() {
    if (!this.sprite) {
      return;
    }
    const animationName = `hurt/${this.type}/${this.name}`;
    this.checkAndPlay(animationName);
  }

  checkAndPlay(animationName) {
    const anim = this.scene.anims.get(animationName);
    if (anim) {
      this.sprite.anims.play(animationName);
    } else {
      this.stopAnimation();
      this.sprite.setFrame('transparent');
    }
  }

  stopAnimation() {
    this.sprite.anims.stop();
  }


  getIdleFrame() {
    const frameName = `walk/${this.type}/${this.name}/down/0`;
    // check if frame exits
    const texture = this.scene.textures.get('kaid');
    return texture.has(frameName) ? frameName : 'transparent';
  }
}

export default BodyPart;
