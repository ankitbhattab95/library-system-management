const authorService = require("./../services/author-service");
const authorServiceInstance = new authorService();

const saveAuthor = async (req, resp, next) => {
  const { email, first_name, last_name, gender } = req.body;
  try {
    const authorData = { email, first_name, last_name, gender };
    const author = await authorServiceInstance.saveAuthor(authorData);
    resp.send({ author: author, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

const getAllAuthor = async (req, resp, next) => {
  try {
    const author = await authorServiceInstance.getAllAuthor();
    resp.send({ author: author, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

const getAuthor = async (req, resp, next) => {
  try {
    const authorId = req.params.id;
    if (!authorId) {
      throw new Error("Please provide member Id");
    }
    const author = await authorServiceInstance.getAuthorById(authorId);
    resp.send({ author: author, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};
const updateAuthor = async (req, resp, next) => {};

const deleteAuthor = async (req, resp, next) => {
  try {
    const authorId = req.params.id;
    if (!authorId) {
      throw new Error("Please provide valid author Id");
    }
    const author = await authorServiceInstance.deleteAuthorById(authorId);
    resp.send({ author: author, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  saveAuthor,
  getAllAuthor,
  getAuthor,
  updateAuthor,
  deleteAuthor,
};
