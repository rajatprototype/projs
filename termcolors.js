
const RESET = "\x1b[0m";

// Reset custom effect
module.exports.reset = RESET;

// Bright text
module.exports.bright = (s) => `\x1b[1m${s}${RESET}`;

// Dim text
module.exports.dim = (s) => `\x1b[2m${s}${RESET}`;

// Foreground Red
module.exports.fgred = (s) => `\x1b[31m${s}${RESET}`;

// Foreground Green
module.exports.fggreen = (s) => `\x1b[32m${s}${RESET}`;

// Foreground Yellow
module.exports.fgyellow = (s) => `\x1b[33m${s}${RESET}`;

// Foreground Cyan
module.exports.fgcyan = (s) => `\x1b[36m${s}${RESET}`;

// Foreground White
module.exports.fgwhite = (s) => `\x1b[37m${s}${RESET}`;
