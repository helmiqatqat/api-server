const { server } = require('../server')
const supertest = require('supertest')
const mockServer = supertest(server)

describe('test bad route', () => {
  it('404 error', async ()=>{
    const response = await mockServer.get('/bad')
    expect(response.status).toEqual(404)
  })
})
