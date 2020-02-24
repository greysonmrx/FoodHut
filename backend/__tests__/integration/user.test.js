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
});
