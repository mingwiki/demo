function sum() {
  return [...arguments].reduce((v1, v2) => v1 + v2)
}
module.exports = { sum }