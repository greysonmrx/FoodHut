import factory from '../factories';
import Admin from '../../src/app/models/Admin';
import Database from '../../src/database';

describe('User', () => {
  beforeEach(async () => {
    await Database.truncate();
  });

  it('should encrypt user password', async () => {
    const { name, email, password } = await factory.attrs('Admin');

    const admin = await Admin.create({
      name,
      email,
      password,
    });

    const checkPassword = await admin.checkPassword(password);

    expect(checkPassword).toBe(true);
  });
});
