const replaceConfig = require("./rules/replace.js");

module.exports.replaceLangTokens = (source) => {
  if (Array.isArray(replaceConfig)) {
    replaceConfig.forEach(rule => {
      const { target, replace } = rule;

      if (target && replace) {
        const targetPattern = new RegExp(target);
        const replacePattern = replace; // new RegExp(replace);
        source = source.replace(targetPattern, replacePattern);

      }
    });
  }
  return String(source);
} 