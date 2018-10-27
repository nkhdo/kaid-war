import BodyPart from './body_part';

class Belt extends BodyPart {
  constructor(owner, name) {
    super(owner, name, 'belt', 5);
  }
}

export default Belt;
