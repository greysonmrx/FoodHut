import request from 'supertest';

import app from '../../src/app';
import factory from '../factories';
import Database from '../../src/database';
import Admin from '../../src/app/models/Admin';

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    await Database.truncate(Admin);

    const { name, email, password } = await factory.attrs('Admin');

    await Admin.create({ name, email, password });

    const response = await request(app)
      .post('/sessions')
      .send({ email, password });

    expect(response.status).toBe(200);
  });

  it('should not authenticate with invalid credentials', async () => {
    await Database.truncate(Admin);

    const { name, email, password } = await factory.attrs('Admin');

    await Admin.create({ name, email, password });

    const response = await request(app)
      .post('/sessions')
      .send({ email, password: '' });

    expect(response.status).toBe(401);
  });

  it('should return JWT token when authenticated', async () => {
    await Database.truncate(Admin);

    const { name, email, password } = await factory.attrs('Admin');

    await Admin.create({ name, email, password });

    const response = await request(app)
      .post('/sessions')
      .send({ email, password });

    expect(response.body).toHaveProperty('token');
  });

  it('should be able to access private routes with JWT token', async () => {
    await Database.truncate(Admin);

    const admin = await factory.attrs('Admin');

    const { email, password } = await Admin.create(admin);

    const {
      body: { token },
    } = await request(app)
      .post('/sessions')
      .send({ email, password });

    const response = await request(app)
      .post('/admins')
      .send({
        name: 'Nome sobrenome',
        email: 'email@email.com',
        password: '123456',
      })
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
});
