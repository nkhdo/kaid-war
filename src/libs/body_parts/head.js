import BodyPart from './body_part';

class Head extends BodyPart {
  constructor(scene, name) {
    super(scene, name, 'head', 6);
  }
}

export default Head;
