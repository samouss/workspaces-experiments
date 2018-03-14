import { random } from 'lodash';

const createCorePackage = () => {
  const version = random();

  return { version };
};

export default createCorePackage;
