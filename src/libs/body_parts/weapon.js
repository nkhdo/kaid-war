import BodyPart from './body_part';

class Weapon extends BodyPart {
  constructor(owner, name) {
    super(owner, name, 'weapon', 8);
  }
}

export default Weapon;
