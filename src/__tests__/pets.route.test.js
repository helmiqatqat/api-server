'use strict';

const { db } = require('../models/index')
const { server } = require('../server')
const supertest = require('supertest')
const mockServer = supertest(server)


beforeAll(async () => {
  await db.sync();
});

describe('testing pets routes', () => {
  it('add a new pet', async () => {
    const response = await mockServer.post('/new-pet').send({
        name: "Sepastian",
        age: "1",
        type: "hamstur"
    });
    expect(response.status).toEqual(201)
  });
  it('update a pet', async () => {
    const response = await mockServer.put('/update-pet/1')
    expect(response.status).toEqual(201)
  });
  it('getting all pets', async () => {
    const response = await mockServer.get('/all-pets')
    expect(response.status).toEqual(200)
  });
  it('getting a specific pet', async () => {
    const response = await mockServer.get('/pet/1')
    expect(response.status).toEqual(200)
  });
  it('delete a pet', async () => {
    const response = await mockServer.delete('/remove-pet/1')
    expect(response.status).toEqual(204)
  });
});


afterAll(async () => {
  await db.drop();
});