module.exports = [
  {
    name: "Keywords",
    target: /val/g,
    replace: "var"
  },
  {
    name: "Function keyword",
    target: /fun/g,
    replace: "function"
  },
  {
    name: "Constant declaration",
    target: /\B\@\b/g,
    replace: "const "
  },
  {
    name: "Console statement",
    target: /print/g,
    replace: "console.log"
  },
  {
    name: "Type checking",
    target: /type/g,
    replace: "typeof"
  },
  {
    name: "Return token",
    target: /<</g,
    replace: "return"
  },
  {
    name: "Optinal print statement",
    target: />>/g,
    replace: "console.log"
  },
  {
    name: "Non parameter arrow fuction",
    target: /->/g,
    replace: "= () =>"
  },
  {
    name: "Convert to double quotes",
    target: /\'/g,
    replace: "\""
  }
]