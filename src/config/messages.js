module.exports = {
  400: "",
  403: "",
  404: "",
  500: "",

  responses: {
    success: "success",
    error: "error",
    appTokenNotProvided:
      "appToken must be included in" + " querystring/params/body for request",
    errorParsingObject: "Invalid JSON object provided",
    fileNotProvided: "Valid file not provided",
    idNotProvided: "Valid request ID not provided",
    bodyNotProvided: "Valid request body not provided",
    statusNotProvided: "Valid status not provided",
    userNotProvided: "Valid user not provided",
    recordFetch: "Records fetch successfully",
    recordSaved: "Record saved successfully",
    recordDeleted: "Record deleted successfully",
    recordUpdated: "Record updated successfully",
    dbError: "Something went wrong. Please try again later",
    noRowFound: "No record found",
  },
};
