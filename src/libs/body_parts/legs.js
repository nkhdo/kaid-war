import BodyPart from './body_part';

class Legs extends BodyPart {
  constructor(owner, name) {
    super(owner, name, 'legs', 3);
  }
}

export default Legs;
