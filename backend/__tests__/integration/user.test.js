import request from 'supertest';

import app from '../../src/app';
import factory from '../factories';

describe('User', () => {
  it('should be able to register', async () => {
    const { phone } = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send({ phone });

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated phone', async () => {
    const { phone } = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send({ phone });

    const response = await request(app)
      .post('/users')
      .send({ phone });

    expect(response.status).toBe(400);
  });
});
