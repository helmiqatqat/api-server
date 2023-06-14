'use strict';

const { db } = require('../models/index')
const { server } = require('../server')
const supertest = require('supertest')
const mockServer = supertest(server)


beforeAll(async () => {
  await db.sync();
});

describe('testing vehicles routes', () => {
  it('add a new vehicle', async () => {
    const response = await mockServer.post('/new-vehicle').send({
        manifacture: "Nissan",
        year: "2000",
        model: "Sunny"
    });
    expect(response.status).toEqual(201)
  });
  it('update a vehicle', async () => {
    const response = await mockServer.put('/update-vehicle/1')
    expect(response.status).toEqual(201)
  });
  it('getting all vehicles', async () => {
    const response = await mockServer.get('/all-vehicles')
    expect(response.status).toEqual(200)
  });
  it('getting a specific vehicle', async () => {
    const response = await mockServer.get('/vehicle/1')
    expect(response.status).toEqual(200)
  });
  it('delete a vehicle', async () => {
    const response = await mockServer.delete('/remove-vehicle/1')
    expect(response.status).toEqual(204)
  });
});


afterAll(async () => {
  await db.drop();
});