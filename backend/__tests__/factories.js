import { factory } from 'factory-girl';
import faker from 'faker/locale/pt_BR';

import User from '../src/app/models/User';
import Admin from '../src/app/models/Admin';

factory.define('User', User, {
  phone: faker.phone.phoneNumber(),
  name: faker.name.findName(),
});

factory.define('Admin', Admin, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(6),
});

export default factory;
