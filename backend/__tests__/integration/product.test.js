import request from 'supertest';

import app from '../../src/app';
import factory from '../factories';
import Database from '../../src/database';
import Category from '../../src/app/models/Category';
import Admin from '../../src/app/models/Admin';

describe('Product', () => {
  beforeEach(async () => {
    await Database.truncate();
  });

  it('should be able to register', async () => {
    const product = await factory.attrs('Product');
    const category = await factory.attrs('Category');
    const admin = await factory.attrs('Admin');

    const { id } = await Category.create(category);
    const { email, password } = await Admin.create(admin);

    const {
      body: { token },
    } = await request(app)
      .post('/sessions')
      .send({ email, password });

    const response = await request(app)
      .post('/products')
      .set('Authorization', `Bearer ${token}`)
      .send({ categories: [id], ...product });

    expect(response.body).toHaveProperty('id');
  });
});
