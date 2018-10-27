import BodyPart from './body_part';

class Behind extends BodyPart {
  constructor(owner, name) {
    super(owner, name, 'behind', 0);
  }
}

export default Behind;
