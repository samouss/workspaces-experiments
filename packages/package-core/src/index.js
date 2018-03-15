import { random } from 'lodash';

const createCorePackage = () => {
  const version = random(50);

  return { version };
};

export default createCorePackage;
