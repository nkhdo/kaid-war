import range from 'lodash/range';

const createFrames = (prefix, min, max) => range(min, max + 1).map(idx => ({
  key: 'kaid',
  frame: `${prefix}/${idx}`,
}));

export default createFrames;
