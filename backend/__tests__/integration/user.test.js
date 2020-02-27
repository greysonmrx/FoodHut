import request from 'supertest';

import app from '../../src/app';
import factory from '../factories';
import Database from '../../src/database';

describe('User', () => {
  beforeEach(async () => {
    await Database.truncate();
  });

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated phone', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(400);
  });

  it('should be able to update', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .put('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to update with a user not found', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .put('/users')
      .send(user);

    expect(response.status).toBe(400);
  });

  it('should be able to delete', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .delete('/users')
      .send(user);

    expect(response.status).toBe(200);
  });

  it('should not be able to delete a user not found', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .delete('/users')
      .send(user);

    expect(response.status).toBe(400);
  });
});
