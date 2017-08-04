/**
 * Turns a multiline string into a single line string, optionallly with or without spaces.
 * @param {String} multiLineString - If using an es6 template string be sure to tab out.
 * @param {Boolean} noSpaces - If you'd like there to be no spaces between say your HTML add this boolean.
 * @returns {String}
 */

function singleline(multiLineString, noSpaces) {
  const delimiter = noSpaces ? '' : ' ';
  return multiLineString.replace(/\s\s+/g, delimiter).trim();
}

module.exports = singleline;
