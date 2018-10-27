import BodyPart from './body_part';

class Feet extends BodyPart {
  constructor(owner, name) {
    super(owner, name, 'feet', 2);
  }
}

export default Feet;
