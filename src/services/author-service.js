const db = require("./../models");
const DataService = require("./data-service");

class AuthorService {
  constructor() {}
  async saveAuthor(authorData) {
    try {
      if (!authorData) {
        throw new Error("Please provide valid author data.");
      }
      return await DataService.create(db.author, authorData);
    } catch (e) {
      throw e.error || e;
    }
  }

  async getAllAuthor() {
    try {
      return await DataService.findAll(db.author);
    } catch (e) {
      throw e.error || e;
    }
  }

  async getAuthorById(id) {
    try {
      if (!id) {
        throw new Error("Please provide valid author data.");
      }
      return await DataService.findOne(db.author, { id: id });
    } catch (e) {
      throw e.error || e;
    }
  }

  async deleteAuthorById(id) {
    try {
      if (!id) {
        throw new Error("Please provide valid author data.");
      }
      return await DataService.destroy(db.author, { id: id });
    } catch (e) {
      throw e.error || e;
    }
  }
}
module.exports = AuthorService;
