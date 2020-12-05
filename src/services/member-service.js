const db = require("./../models");
const DataService = require("./data-service");

class MemberService {
  constructor() {}
  async saveMember(memberData) {
    try {
      if (!memberData) {
        throw new Error("Please provide valid members data.");
      }
      return await DataService.create(db.member, memberData);
    } catch (e) {
      throw e.error || e;
    }
  }

  async getAllMembers() {
    try {
      return await DataService.findAll(db.member);
    } catch (e) {
      throw e.error || e;
    }
  }

  async getMemberById(id) {
    try {
      if (!id) {
        throw new Error("Please provide valid members data.");
      }
      return await DataService.findOne(db.author, { id: id });
    } catch (e) {
      throw e.error || e;
    }
  }

  async deleteMemberById(id) {
    try {
      if (!id) {
        throw new Error("Please provide valid members data.");
      }
      return await DataService.destroy(db.author, { id: id });
    } catch (e) {
      throw e.error || e;
    }
  }
}
module.exports = MemberService;
