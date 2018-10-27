import BodyPart from './body_part';

class Body extends BodyPart {
  constructor(owner, name) {
    super(owner, name, 'body', 1);
  }
}

export default Body;
