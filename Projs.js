const langproc = require("./langproc")


class Projs {
  static resolve(source) {
    source = langproc.replaceLangTokens(source);
  
    return source;
  }
}

module.exports = Projs;