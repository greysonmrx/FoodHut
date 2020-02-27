import request from 'supertest';

import app from '../../src/app';
import factory from '../factories';
import Database from '../../src/database';
import Admin from '../../src/app/models/Admin';

describe('Category', () => {
  beforeEach(async () => {
    await Database.truncate();
  });

  it('should be able to register', async () => {
    const category = await factory.attrs('Category');
    const admin = await factory.attrs('Admin');

    const { email, password } = await Admin.create(admin);

    const {
      body: { token },
    } = await request(app)
      .post('/sessions')
      .send({ email, password });

    const response = await request(app)
      .post('/categories')
      .set('Authorization', `Bearer ${token}`)
      .send(category);

    expect(response.body).toHaveProperty('id');
  });
});
