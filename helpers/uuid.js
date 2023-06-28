//export a function that generates a random string of numbers and letters for unique note id's
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
