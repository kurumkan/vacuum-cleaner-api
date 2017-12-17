// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

import cleaner from '../instance';
import { PORT } from '../server';

// Require the dev-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
chai.use(chaiHttp);

// Our parent block
describe('Vacuum Cleaner', () => {
  // reset the model to the initial state
  beforeEach((done) => {
    cleaner.reset();
    done();
  });

  /*
   * Test the /GET route
   */
  describe('/GET device', () => {
    it('it should GET current state of the VC', (done) => {
      chai.request(`http://localhost:${PORT}`)
        .get(`/api/${cleaner.getDeviceInfo().serialNumber}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('isOn');
          res.body.should.have.property('mode');
          res.body.should.have.property('power');
          res.body.should.have.property('deviceInfo');
          res.body.deviceInfo.serialNumber.should.be.eql(cleaner.getDeviceInfo().serialNumber);
          done();
        });
    });
  });

  /*
   * Test the /GET 'onoff' route
   */
  describe('/GET onoff', () => {
    it('it should GET current on/off mode', (done) => {
      chai.request(`http://localhost:${PORT}`)
        .get(`/api/${cleaner.getDeviceInfo().serialNumber}/onoff`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('isOn');
          res.body.isOn.should.be.eql(false);
          done();
        });
    });
  });

  /*
   * Test the /PUT 'onoff' route
   */
  describe('/PUT onoff', () => {
    it('it should turn on the device', (done) => {
      chai.request(`http://localhost:${PORT}`)
        .put(`/api/${cleaner.getDeviceInfo().serialNumber}/onoff`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('isOn');
          res.body.isOn.should.be.eql(true);
          done();
        });
    });
  });

  /*
   * Test the /GET 'mode' route
   */
  describe('/GET mode', () => {
    it('it should GET current mode state', (done) => {
      chai.request(`http://localhost:${PORT}`)
        .get(`/api/${cleaner.getDeviceInfo().serialNumber}/mode`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('mode');
          res.body.mode.should.be.eql('dry');
          done();
        });
    });
  });

  /*
   * Test the /PUT 'onoff' route
   */
  describe('/PUT onoff', () => {
    it('it should change mode', (done) => {
      chai.request(`http://localhost:${PORT}`)
        .put(`/api/${cleaner.getDeviceInfo().serialNumber}/mode`)
        .send({ mode: 'washing' })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('mode');
          res.body.mode.should.be.eql('washing');
          done();
        });
    });

    it('it should fail to change mode', (done) => {
      chai.request(`http://localhost:${PORT}`)
        .put(`/api/${cleaner.getDeviceInfo().serialNumber}/mode`)
        .send({ mode: 'washing1' })
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });

  /*
   * Test the /GET 'power' route
   */
  describe('/GET power', () => {
    it('it should GET current power state', (done) => {
      chai.request(`http://localhost:${PORT}`)
        .get(`/api/${cleaner.getDeviceInfo().serialNumber}/power`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('power');
          res.body.power.should.be.eql(0);
          done();
        });
    });
  });

  /*
   * Test the /PUT 'power' route
   */
  describe('/PUT power', () => {
    it('it should charge the device', (done) => {
      chai.request(`http://localhost:${PORT}`)
        .put(`/api/${cleaner.getDeviceInfo().serialNumber}/power`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('power');
          res.body.power.should.be.eql(100);
          done();
        });
    });
  });

  /*
   * Test the /GET 'stats' route
   */
  describe('/GET stats', () => {
    it('it should GET statistics', (done) => {
      chai.request(`http://localhost:${PORT}`)
        .get(`/api/${cleaner.getDeviceInfo().serialNumber}/stats`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(cleaner.getStatistics().length);
          done();
        });
    });
  });
});