for (var i = 0; i < 5; i++) {
  ((i) => setTimeout(function () {
    console.log(i)
  }, 0))(i)
}