const path = require("path");
const fs = require("fs");
const ts = require("typescript");

exports.requireTs = function (modulePath) {
  const typescriptFile = fs.readFileSync(require.resolve(modulePath), "utf-8");
  const jsString = ts.transpileModule(typescriptFile, {}).outputText;
  return requireFromString(jsString);
};

function requireFromString(src) {
  const Module = module.constructor;
  const m = new Module();
  m._compile(src, "");
  return m.exports;
}
