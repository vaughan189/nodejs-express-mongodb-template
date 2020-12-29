/* globals expect it beforeAll afterAll */
const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);

const contact = require('../fixtures/Contact');
const { URL } = require('../fixtures');
const Contact = require('../../model/Contact');

const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

it('Post Contacts Endpoint', async (done) => {
  const response = await request.post('/api/v1/contact').send(contact.create);
  expect(response.status).toBe(200);
  expect(response.body.message).toBe('New contact created!');
  done();
});

it('Get All Contacts Endpoint', async (done) => {
  const response = await request.get('/api/v1/contact');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('Contacts retrieved successfully');
  done();
});

afterAll(async () => {
  await Contact.deleteMany();
  await mongoose.connection.close();
});
