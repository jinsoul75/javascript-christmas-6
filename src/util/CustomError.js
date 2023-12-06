import ERROR from '../constant/error.js';

class CustomError extends Error {
  constructor(messsage) {
    super(`${ERROR.header} ${messsage}`);
  }
}

export default CustomError;
