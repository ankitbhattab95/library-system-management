const sequelize = require("./../database/sequelize");

class DataService {
  static async create(model, body, transaction) {
    try {
      return model.create(body, { transaction });
    } catch (e) {
      throw e.error || e;
    }
  }
  static async findAll(model) {
    try {
      return model.findAll();
    } catch (e) {
      throw e.error || e;
    }
  }
  static async findAllConditionally(model, condition) {
    try {
      return model.findAll({ where: condition });
    } catch (e) {
      throw e.error || e;
    }
  }
  static async findAndCountAll(model, condition) {
    try {
      return model.findAndCountAll({ where: condition });
    } catch (e) {
      throw e.error || e;
    }
  }
  static async findOne(model, condition) {
    try {
      return model.findOne({ where: condition });
    } catch (e) {
      throw e.error || e;
    }
  }
  static async destroy(model, condition) {
    try {
      return model.destroy({ where: condition });
    } catch (e) {
      throw e.error || e;
    }
  }
}
module.exports = DataService;
