import BodyPart from './body_part';

class Torso extends BodyPart {
  constructor(owner, name) {
    super(owner, name, 'torso', 4);
  }
}

export default Torso;
