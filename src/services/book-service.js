const db = require("./../models");
const DataService = require("./data-service");

class BookService {
  constructor() {}

  async saveBook(bookData) {
    try {
      if (!bookData) {
        throw new Error("Please provide valid books data.");
      }
      return await DataService.create(db.book, bookData);
    } catch (e) {
      throw e.error || e;
    }
  }

  async getAllBooks() {
    try {
      return await DataService.findAll(db.book);
    } catch (e) {
      throw e.error || e;
    }
  }

  async getBookById(id) {
    try {
      if (!id) {
        throw new Error("Please provide valid book data.");
      }
      return await DataService.findOne(db.book, { id: id });
    } catch (e) {
      throw e.error || e;
    }
  }

  async deleteBookById() {
    try {
      if (!id) {
        throw new Error("Please provide valid book data.");
      }
      return await bookModel.destroy(db.book, { id: id });
    } catch (e) {
      throw e.error || e;
    }
  }

  async updateBook() {
    try {
    } catch (e) {
      throw e.error || e;
    }
  }
}
module.exports = BookService;
