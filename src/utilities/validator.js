let Validator = {};

Validator.validateloginId = function (loginId) {
    let pattern = new RegExp("/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/");
    if (pattern.test(loginId)) {
        let err = new Error("Error in login Id");
        err.status = 406
        throw err;
    }
}


Validator.validatepwdId = function (pwdId) {
    if (new String(pwdId).length != 8) {
        let err = new Error("Error in pwd Id");
        err.status = 406;
        throw err;
    }
}

module.exports = Validator;