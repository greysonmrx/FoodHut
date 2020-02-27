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

  it('should not be able to register with duplicate name', async () => {
    const category = await factory.attrs('Category');
    const admin = await factory.attrs('Admin');

    const { email, password } = await Admin.create(admin);

    const {
      body: { token },
    } = await request(app)
      .post('/sessions')
      .send({ email, password });

    await request(app)
      .post('/categories')
      .set('Authorization', `Bearer ${token}`)
      .send(category);

    const response = await request(app)
      .post('/categories')
      .set('Authorization', `Bearer ${token}`)
      .send(category);

    expect(response.status).toBe(400);
  });

  it('should be able to delete', async () => {
    const category = await factory.attrs('Category');
    const admin = await factory.attrs('Admin');

    const { email, password } = await Admin.create(admin);

    const {
      body: { token },
    } = await request(app)
      .post('/sessions')
      .send({ email, password });

    const {
      body: { id },
    } = await request(app)
      .post('/categories')
      .set('Authorization', `Bearer ${token}`)
      .send(category);

    const response = await request(app)
      .delete(`/categories/${id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  it('should not be able to delete with inexistent category', async () => {
    const admin = await factory.attrs('Admin');

    const { email, password } = await Admin.create(admin);

    const {
      body: { token },
    } = await request(app)
      .post('/sessions')
      .send({ email, password });

    const response = await request(app)
      .delete(`/categories/${token}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(400);
  });
});
