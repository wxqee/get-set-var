module.exports = function () {
  var message = '';
  if (arguments.length === 1) {
    message = arguments[0];
  }
  console.error(message);
  process.exit(1);
}

