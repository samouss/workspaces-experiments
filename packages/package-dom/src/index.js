import { get } from 'lodash';
import createCorePackage from 'package-core';

const createDomPackage = () => {
  const version = get(createCorePackage(), 'version');

  return `DOM package running with core version: ${version}`;
};

export default createDomPackage;
