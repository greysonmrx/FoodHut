import factory from '../factories';
import Admin from '../../src/app/models/Admin';
import Database from '../../src/database';

describe('User', () => {
  it('should encrypt user password', async () => {
    await Database.truncate(Admin);

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
