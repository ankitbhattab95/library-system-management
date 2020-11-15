const PublisherService = require("./../services/publisher-service");
const publisherServiceInstance = new PublisherService();

const savePublisher = async (req, resp, next) => {
  try {
    const { name, address, email } = req.body;
    const publisherData = { name, address, email };
    const publishers = await publisherServiceInstance.savePublisher(
      publisherData
    );
    resp.send({ publisher: publishers, status: true }).status(201);
  } catch (e) {
    console.log(e);
  }
};

const getAllPublishers = async (req, resp, next) => {
  try {
    const publishers = await publisherServiceInstance.getAllPublisher();
    resp.send({ publisher: publishers, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

const getPublisher = async (req, resp, next) => {
  try {
    const publisherId = req.params.id;
    if (!publisherId) {
      throw new Error("Please provide valid publisher Id");
    }
    const publisher = await publisherServiceInstance.getPublisherById(
      publisherId
    );
    resp.send({ publisher: publisher, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

const updatePublisher = async (req, resp, next) => {};

const deletePublisher = async (req, resp, next) => {
  try {
    const publisherId = req.params.id;
    if (!publisherId) {
      throw new Error("Please provide valid publisher Id");
    }
    const publisher = await publisherServiceInstance.deletePublisherById(
      publisherId
    );
    resp.send({ publisher: publisher, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  savePublisher,
  getAllPublishers,
  getPublisher,
  deletePublisher,
  updatePublisher,
};
