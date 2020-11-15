const memberService = require("./../services/member-service");
const memberServiceInstance = new memberService();

const getMember = async (req, resp, next) => {
  try {
    const memberId = req.params.id;
    if (!memberId) {
      throw new Error("Please provide member Id");
    }
    const member = await memberServiceInstance.getMemberById(memberId);
    resp.send({ member: member, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

const getAllMembers = async (req, resp, next) => {
  try {
    const members = await memberServiceInstance.getAllMembers();
    resp.send({ members: members, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

const saveMember = async (req, resp, next) => {
  const {
    email,
    mobile,
    guest,
    first_name,
    last_name,
    gender,
    dob,
    member_type,
  } = req.body;
  const memberData = {
    user_name: "E002",
    email: email,
    mobile: mobile,
    first_name: first_name,
    last_name: last_name,
    gender: gender,
    member_type: member_type,
  };
  try {
    const member = await memberServiceInstance.saveMember(memberData);
    resp.send({ member: member, status: true }).status(201);
  } catch (e) {
    console.log(e);
  }
};

const updateMember = async (req, resp, next) => {
  try {
    const memberId = req.params.id;
    if (!memberId) {
      throw new Error("Please provide member Id");
    }

    const allowedFields = ["email", "mobile", "guest"];
    const updateFields = Object.keys(req.body);
    const isValid = updateFields.every((field) =>
      allowedFields.includes(field)
    );

    if (!isValid) {
      return resp.send({ status: 400, resp: "Bad request parameters!" });
    }

    const member = await memberServiceInstance.getMemberById(memberId);

    if (!memberId) {
      return resp.send({ status: 400, resp: "Invalid memberId!" });
    }
    updateFields.forEach((field) => {
      member[field] = req.body[field];
    });
    member.save();
    return resp.send({ status: 200, resp: "Member Updated!", member: member });
  } catch (e) {
    console.log(e);
  }
};

const deleteMember = async (req, resp, next) => {
  try {
    const memberId = req.params.id;
    if (!memberId) {
    }
    //hard delete
    const member = await memberServiceInstance.deleteMemberById(memberId);
    //#ToDo : Soft delete
    resp.send({ member: member, status: true }).status(200);
  } catch (e) {
    console.log(e);
  }
};

const sendResponse = (res, { status, resp } = (data = {})) => {
  res.status(status).send({
    status,
    resp,
  });
};

module.exports = {
  getAllMembers,
  getMember,
  saveMember,
  updateMember,
  deleteMember,
};
