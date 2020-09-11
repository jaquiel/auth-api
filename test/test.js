//const assert = require('assert');
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const app = require('../app')
const request = chai.request(app)
const assert = chai.assert
const expect = chai.expect

context('Serviço de Login', () => {

describe('GET', () => {
  describe('/users', () => {
    it('Deve listar os usuários', done => {
      request
        .get('/users')
        .end( (err, res) => {
          expect(res).to.has.status(200)
          //console.log(res.body)
          done()
        })
    })
  })
})

})


//console.log(chai.assert.typeOf)