class BodyPart {
  constructor(owner, name, type, layer) {
    this.owner = owner;
    this.scene = this.owner.scene;
    this.name = name;
    this.type = type;
    this.layer = layer;
    this.idleFrame = this.getIdleFrame();
    this.sprite = this.scene.add.sprite(32, 32, 'kaid', this.idleFrame);
    this.owner.container.addAt(this.sprite, this.layer);
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
