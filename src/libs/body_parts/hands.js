import BodyPart from './body_part';

class Hands extends BodyPart {
  constructor(owner, name) {
    super(owner, name, 'hands', 7);
  }
}

export default Hands;
