const Validator = require("validatorjs");

export function validator(body, rules, customMessages, callback) {
  const validation = new Validator(body, rules, customMessages);
  validation.passes(() => callback(null, true));
  validation.fails(() => callback(validation.errors, false));
}

export function executeValidator(req, res, next, postData, validationRule) {
  this.validator(postData, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        status: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
}

export function executeValidatorSync(postData, validationRule) {
  const validation = new Validator(postData, validationRule, {});

  if (validation.fails()) {
    return validation.errors;
  }
  return true;
}
