require('@code-fellows/supergoose');
const middleware = require('../src/auth/middleware/bearer');
const Users = require('../src/auth/models/users');

let users = {
  admin: { username: 'admin', password: 'password' ,role:'admin'},
};

// Pre-load our database with fake users

beforeAll(async () => {
  await new Users(users.admin).save()
});
describe('Auth Middleware', () => {

  // admin:password: YWRtaW46cGFzc3dvcmQ=
  // admin:foo: YWRtaW46Zm9v

  // Mock the express req/res/next that we need for each middleware call
  const req = {};
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(() => res)
  }
  const next = jest.fn();

  describe('user authentication', () => {

    it('fails a login for a user (admin) with the incorrect basic credentials', () => {
            console.log('ahmadddddddddddddddddddddddddddddddddddddddddddddd');
      // Change the request to match this test case
      req.headers = {
        authorization: 'Basic YWRtaW46Zm9vw',
      };

      return middleware(req, res, next)
        .then(() => {
          console.log('res.status',res.status)
          console.log('ahmadddddddddddddddddddddddddddddddddddddddddddddd');
          expect(next).not.toHaveBeenCalled();
          expect(res.status).toHaveBeenCalledWith(403);
        });

    }); // it()

    it('logs in an admin user with the right credentials', () => {

      // Change the request to match this test case

      console.log('ahmadddddddddddddddddddddddddddddddddddddddddddddd');
      req.headers = {
        authorization: 'Basic YWRtaW46cGFzc3dvcmQ=',
      };

      return middleware(req, res, next)
        .then(() => {
          expect(next).not.toHaveBeenCalledWith();
        });

    }); // it()

  });

});
