import BodyPart from './body_part';

class Torso extends BodyPart {
  constructor(scene, name) {
    super(scene, name, 'torso', 4);
  }
}

export default Torso;
