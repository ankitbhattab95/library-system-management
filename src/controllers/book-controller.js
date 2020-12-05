const BookService = require("./../services/book-service");
const SequelizeQueryService = require("./../services/sequelize-query-service");
const bookServiceInstance = new BookService();
const sequelizeQueryService = new SequelizeQueryService();

const saveBook = async (req, resp, next) => {
  try {
    const { title, copies, price, author_id, publisher_id } = req.body;
    const bookData = {
      title: title,
      copies: copies,
      price: price,
      author_id: author_id,
      publisher_id: publisher_id,
    };
    const book = await bookServiceInstance.saveBook(bookData);
    resp.status(201).send({ book: book, status: true });
  } catch (e) {
    console.log(e);
  }
};

const getAllBooks = async (req, resp, next) => {
  try {
    const books = await bookServiceInstance.getAllBooks();
    resp.send({ book: books, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

const getBook = async (req, resp, next) => {
  try {
    const bookId = req.params.id;
    if (!bookId) {
      throw new Error("Please provide book Id");
    }
    const book = await bookServiceInstance.getBookById(bookId);
    resp.send({ book: book, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

const updateBook = async (req, resp, next) => {};

const deleteBook = async (req, resp, next) => {
  try {
    const bookId = req.params.id;
    if (!bookId) {
      throw new Error("Please provide book Id");
    }
    const book = await bookServiceInstance.deleteBookById(bookId);
    resp.send({ book: book, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

const getBookDetails = async (req, resp, next) => {
  try {
    const bookId = req.params.id;
    if (!bookId) {
      throw new Error("Please provide book Id");
    }
    const book = await sequelizeQueryService.getBookDetails(bookId);
    resp.send({ book: book, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  saveBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
  getBookDetails,
};
