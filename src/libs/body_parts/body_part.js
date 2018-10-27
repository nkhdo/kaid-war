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

  animate(animation, direction, loop = false) {
    if (!this.sprite) {
      return;
    }
    const animationName = `${animation}/${this.type}/${this.name}/${direction}`;
    // check if the animation exists
    const anim = this.scene.anims.get(animationName);
    if (anim) {
      this.sprite.anims.play(animationName, loop);
    } else {
      this.stopAnimating();
      this.sprite.setFrame(this.idleFrame);
    }
  }

  stopAnimating() {
    this.sprite.anims.stop();
  }

  hurt() {
    if (!this.sprite) {
      return;
    }
    const animationName = `hurt/${this.type}/${this.name}`;
    this.sprite.anims.play(animationName);
  }

  getIdleFrame() {
    const frameName = `walk/${this.type}/${this.name}/down/0`;
    // check if frame exits
    const frame = this.scene.textures.get('kaid', frameName);
    if (frame) {
      return frameName;
    }
    return 'transparent';
  }
}

export default BodyPart;
