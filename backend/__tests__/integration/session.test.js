import request from 'supertest';

import app from '../../src/app';
import factory from '../factories';
import Database from '../../src/database';
import Admin from '../../src/app/models/Admin';

describe('Authentication', () => {
  beforeEach(async () => {
    await Database.truncate();
  });

  it('should authenticate with valid credentials', async () => {
    const { name, email, password } = await factory.attrs('Admin');

    await Admin.create({ name, email, password });

    const response = await request(app)
      .post('/sessions')
      .send({ email, password });

    expect(response.status).toBe(200);
  });

  it('should not authenticate with invalid credentials', async () => {
    const { name, email, password } = await factory.attrs('Admin');

    await Admin.create({ name, email, password });

    const response = await request(app)
      .post('/sessions')
      .send({ email, password: '' });

    expect(response.status).toBe(401);
  });
});
