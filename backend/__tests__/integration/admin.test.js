import request from 'supertest';

import app from '../../src/app';
import factory from '../factories';
import Database from '../../src/database';
import Admin from '../../src/app/models/Admin';

describe('Admin', () => {
  beforeEach(async () => {
    await Database.truncate();
  });

  it('should be able to register', async () => {
    const admin = await factory.attrs('Admin');

    const { email, password } = await Admin.create(admin);

    const {
      body: { token },
    } = await request(app)
      .post('/sessions')
      .send({ email, password });

    const response = await request(app)
      .post('/admins')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'name', email: 'email@gmail.com', password: '123456' });

    expect(response.body).toHaveProperty('id');
  });

  it('should be able to update', async () => {
    const admin = await factory.attrs('Admin');

    const { email, password } = await Admin.create(admin);

    const {
      body: { token },
    } = await request(app)
      .post('/sessions')
      .send({ email, password });

    const response = await request(app)
      .put('/admins')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'new name', email });

    expect(response.body).toHaveProperty('name');
  });
});
