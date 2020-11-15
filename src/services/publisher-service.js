const publisherModel = require("./../models").publisher;

class PublisherService {
  constructor() {}
  async savePublisher(publisherData) {
    if (!publisherData) {
      throw new Error("Please provide valid publisher data.");
    }
    return await publisherModel.create(publisherData);
  }

  async getAllPublisher() {
    return await publisherModel.findAll();
  }

  async getPublisherById(id) {
    if (!id) {
      throw new Error("Please provide valid publisher data.");
    }
    return await publisherModel.findOne({ where: { id: id } });
  }

  async deletePublisherById(id) {
    if (!id) {
      throw new Error("Please provide valid publisher data.");
    }
    return await publisherModel.destroy({ where: { id: id } });
  }
}
module.exports = PublisherService;
