import BodyPart from './body_part';

class Head extends BodyPart {
  constructor(owner, name) {
    super(owner, name, 'head', 6);
  }
}

export default Head;
