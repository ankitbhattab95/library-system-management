const sequelize = require("./../database/sequelize");
const models = require("./../models");
const { fn, col } = models.Sequelize;
const bookModel = models.book;

class BookService {
  constructor() {}

  async saveBook(bookData) {
    if (!bookData) {
      throw new Error("Please provide valid books data.");
    }
    return await sequelize.transaction(async (t) => {
      return await bookModel.create(bookData, { transaction: t });
    });
  }

  async getAllBooks() {
    return await bookModel.findAll();
  }

  async getBookById(id) {
    if (!id) {
      throw new Error("Please provide valid book data.");
    }
    return await bookModel.findOne({ where: { id: id } });
  }

  async deleteBookById() {
    if (!id) {
      throw new Error("Please provide valid book data.");
    }
    return await bookModel.destroy({ where: { id: id } });
  }

  async updateBook() {}
}
module.exports = BookService;
