const memberModel = require("./../models").member;

class MemberService {
  constructor() {}
  async saveMember(memberData) {
    if (!memberData) {
      throw new Error("Please provide valid members data.");
    }
    return await memberModel.create(memberData);
  }

  async getAllMembers() {
    return await memberModel.findAll();
  }

  async getMemberById(id) {
    if (!id) {
      throw new Error("Please provide valid members data.");
    }
    return await memberModel.findOne({ where: { id: id } });
  }

  async deleteMemberById(id) {
    if (!id) {
      throw new Error("Please provide valid members data.");
    }
    return await memberModel.destroy({ where: { id: id } });
  }
}
module.exports = MemberService;
