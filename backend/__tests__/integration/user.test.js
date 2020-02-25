import request from 'supertest';

import app from '../../src/app';
import factory from '../factories';
import Database from '../../src/database';
import User from '../../src/app/models/User';

describe('User', () => {
  it('should be able to register', async () => {
    await Database.truncate(User);

    const { phone } = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send({ phone });

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated phone', async () => {
    await Database.truncate(User);

    const { phone } = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send({ phone });

    const response = await request(app)
      .post('/users')
      .send({ phone });

    expect(response.status).toBe(400);
  });

  it('should be able to update', async () => {
    await Database.truncate(User);

    const { phone, name } = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send({ phone });

    const response = await request(app)
      .put('/users')
      .send({ name, phone });

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to update with a user not found', async () => {
    await Database.truncate(User);

    const { phone, name } = await factory.attrs('User');

    const response = await request(app)
      .put('/users')
      .send({ name, phone });

    expect(response.status).toBe(400);
  });

  it('should be able to delete', async () => {
    await Database.truncate(User);

    const { phone } = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send({ phone });

    const response = await request(app)
      .delete('/users')
      .send({ phone });

    expect(response.status).toBe(200);
  });

  it('should not be able to delete a user not found', async () => {
    await Database.truncate(User);

    const { phone } = await factory.attrs('User');

    const response = await request(app)
      .delete('/users')
      .send({ phone });

    expect(response.status).toBe(400);
  });
});
