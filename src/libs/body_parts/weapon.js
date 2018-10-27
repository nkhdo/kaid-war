import BodyPart from './body_part';

class Weapon extends BodyPart {
  constructor(scene, name) {
    super(scene, name, 'weapon', 8);
  }
}

export default Weapon;
