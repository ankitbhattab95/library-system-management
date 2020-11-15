const models = require("./../models");
const { fn, col } = models.Sequelize;
const bookModel = models.book;

class SequelizeQueryService {
  async getBookDetails(id) {
    return await bookModel.findAll({
      where: { id: id },
      attributes: ["title", "price", ["copies", "BookCopies"]],
      include: [
        {
          model: models.author,
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
          model: models.publisher,
          as: "publisher",
          attributes: ["name", "address"],
        },
      ],
    });
  }
}

module.exports = SequelizeQueryService;
