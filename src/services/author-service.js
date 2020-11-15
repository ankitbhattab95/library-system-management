const authorModel = require("./../models").author;

class AuthorService {
  constructor() {}
  async saveAuthor(authorData) {
    if (!authorData) {
      throw new Error("Please provide valid author data.");
    }
    return await authorModel.create(authorData);
  }

  async getAllAuthor() {
    return await authorModel.findAll();
  }

  async getAuthorById(id) {
    if (!id) {
      throw new Error("Please provide valid author data.");
    }
    return await authorModel.findOne({ where: { id: id } });
  }

  async deleteAuthorById(id) {
    if (!id) {
      throw new Error("Please provide valid author data.");
    }
    return await authorModel.destroy({ where: { id: id } });
  }
}
module.exports = AuthorService;
