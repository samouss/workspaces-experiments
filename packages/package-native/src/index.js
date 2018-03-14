import { get } from 'lodash';
import createCorePackage from 'package-core';

const createNativePackage = () => {
  const version = get(createCorePackage(), 'version');

  return `Native package running with core version: ${version}`;
};

export default createNativePackage;
