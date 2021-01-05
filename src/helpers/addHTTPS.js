export default url => {
  var prefix = 'https://';
  if (url.substr(0, prefix.length) !== prefix) {
    return prefix + url;
  }
  return url;
};
