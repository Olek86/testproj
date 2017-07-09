const NAME_REGEXP = '[a-zA-Z]{2,20}(\ [a-zA-Z]{2,20})?';
const EMAIL_REGEXP = '[a-zA-Z._]{3,30}\@[a-zA-Z]{3,30}\.[a-zA-Z]{2,18}([a-zA-Z]{2,3})?'; // replace with more sophisticated

const validateNameInput = (inputValue) => {
    return inputValue.match(NAME_REGEXP) && inputValue.length < 20
};

const validateEmailInput = (inputValue) => {
    return inputValue.match(EMAIL_REGEXP)
};

// const validateModel = (model, item) => {
//   return model.length > 0 && model.length <= 9 && !checkEmailInModel(model, item)
// };

const validateModelLength = (model) => {
    return model.length > 0 && model.length <= 9
};

const validateNewEmailInModel = (model, item) => {
    for (let i = 0; i < model.length; i++) {
        if (model[i].email === item.email) {
            return false
        }
        return true
    }
};

export {validateNameInput, validateEmailInput, validateModelLength, validateNewEmailInModel}
