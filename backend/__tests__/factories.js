import { factory } from 'factory-girl';
import faker from 'faker/locale/pt_BR';

import User from '../src/app/models/User';
import Admin from '../src/app/models/Admin';
import Product from '../src/app/models/Product';
import Category from '../src/app/models/Category';

factory.define('User', User, {
  phone: faker.phone.phoneNumber(),
  name: faker.name.findName(),
});

factory.define('Admin', Admin, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(6),
});

factory.define('Product', Product, {
  name: faker.commerce.productName(),
  description: faker.lorem.text(),
  cost: faker.commerce.price(),
  price: faker.commerce.price(),
});

factory.define('Category', Category, {
  name: faker.lorem.word(),
});

export default factory;
