const { readFileSync, existsSync, writeFileSync } = require("fs")
const cli = require("./cli")
const { parse, join } = require("path")
const colors = require("./termcolors")
const Projs = require("./Projs")

// Execute argum script files
cli.args.forEach((file) => {
  let { name: fname, ext } = parse(file);
  let filename = null;
  let filepath = null;
  
  // Auto concat .p ext if doesn't supplied 
  ext = ext || '.p';

  try {
    // Support lang ext
    if (!['.p', '.pjs', '.js'].includes(ext)) {
      throw new Error(`${colors.fgred("Use supported lang extension like")} .p, .pjs`);
    }
    filename = fname.concat(ext);
    filepath = join(__dirname, filename);

    if (!existsSync(filepath)) {
      throw new Error(`Can't find <${colors.fgred(filename)}>`);
    }

    writeFileSync(
      join(__dirname, fname.concat('.js')), 
      Projs.resolve(readFileSync(filepath, "UTF-8")), 
      "UTF-8"
    );
  
  } catch(err) {
    console.error(err.message);
  }
})