import BodyPart from './body_part';

class Body extends BodyPart {
  constructor(scene, name) {
    super(scene, name, 'body', 1);
  }
}

export default Body;
