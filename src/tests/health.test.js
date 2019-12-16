import supertest from 'supertest';
import app from '../http/app';

const request = supertest(app);

describe('/', () => {
  test('/', (done) => {
    request
      .get('/')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.status).toEqual('Welcome to the TREP lifestyle');
        done();
      });
  });
});
