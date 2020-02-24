import { factory } from 'factory-girl';
import faker from 'faker/locale/pt_BR';

import User from '../src/app/models/User';

factory.define('User', User, {
  phone: faker.phone.phoneNumber(),
  name: faker.name.findName(),
});

export default factory;
