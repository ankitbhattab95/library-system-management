const db = require("./../models");
const DataService = require("./data-service");

class PublisherService {
  constructor() {}
  async savePublisher(publisherData) {
    try {
      if (!publisherData) {
        throw new Error("Please provide valid publisher data.");
      }
      return await DataService.create(publisherData, db.publisher);
    } catch (e) {
      throw e.error || e;
    }
  }

  async getAllPublisher() {
    try {
      return await DataService.findAll(db.publisher);
    } catch (e) {
      throw e.error || e;
    }
  }

  async getPublisherById(id) {
    try {
      if (!id) {
        throw new Error("Please provide valid publisher data.");
      }
      return await DataService.findOne(db.publisher, { id: id });
    } catch (e) {
      throw e.error || e;
    }
  }

  async deletePublisherById(id) {
    try {
      if (!id) {
        throw new Error("Please provide valid publisher data.");
      }
      return await DataService.destroy(db.publisher, { id: id });
    } catch (e) {
      throw e.error || e;
    }
  }
}
module.exports = PublisherService;
