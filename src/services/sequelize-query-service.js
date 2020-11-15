const {
  book: bookModel,
  author: authorModel,
  publisher: publisherModel,
  Sequelize,
} = require("./../models");
const { fn, col } = Sequelize;

class SequelizeQueryService {
  async getBookDetails(id) {
    return await bookModel.findAll({
      where: { id: id },
      attributes: ["title", "price", ["copies", "BookCopies"]],
      include: [
        {
          model: authorModel,
          as: "author",
          attributes: [
            [
              fn("CONCAT", col("first_name"), " ", col("last_name")),
              "fullName",
            ],
            "email",
          ],
        },
        {
          model: publisherModel,
          as: "publisher",
          attributes: ["name", "address"],
        },
      ],
    });
  }
}

module.exports = SequelizeQueryService;
