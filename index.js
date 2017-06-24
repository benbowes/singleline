function oneline(multiLineString) {
  return multiLineString.replace(/\s\s+/g, ' ').trim();
}

module.exports = oneline;
