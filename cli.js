
const FLAG_PATTERN = new RegExp(/\B\-\w*/);

/**
 * Command argument list
 * @type {Getter} args
 * @return {Array<string>}
 */
module.exports.__defineGetter__('args', 
    () => process.argv.slice(2)
);

/**
 * Argument flags (hyphen as prefix)
 * @type {Getter} flags
 * @return {Array<string>}
 */
module.exports.__defineGetter__('flags', 
    () => this.args.filter(arg => arg.match(FLAG_PATTERN))
);

/**
 * Pure command arguments except flag values
 * @type {Getter} values
 * @return {Array<string>}
 */
module.exports.__defineGetter__('values', 
    () => this.args.filter(arg => !arg.match(FLAG_PATTERN))
);

/**
 * Consider second pure argument as an action
 * @type {Getter} action
 * @return {string}
 */
module.exports.__defineGetter__('action', 
    () => this.values[0] || null
);

/**
 * Except first argument as an action
 * @type {Getter} param
 * @return {Array<string>}
 */
module.exports.__defineGetter__('param', 
    () => this.values.slice(1)
);

/**
 * Existent of global flag
 * @type {Getter} targetGlobal
 * @return {boolean}
 */
module.exports.__defineGetter__('targetGlobal', 
    () => this.flags.some(flag => ['-g', '--global'].includes(flag))
);