class Dialog {
  constructor($node) {
    this.$node = $node
    this.init()
    this.bind()
  }
  init() {
    this.$close = this.$node.querySelector(".icon-close")
    this.$ok = this.$node.querySelector(".btn-ok")
    this.$cancel = this.$node.querySelector(".btn-cancel")
  }
  bind() {
    let self = this
    this.$node.classList.add("show")
    this.$close.onclick = function () {
      self.$node.classList.remove("show")
      console.log("click close")
    }
    this.$ok.onclick = function () {
      self.$node.classList.remove("show")
      console.log("click ok")
    }
    this.$cancel.onclick = function () {
      self.$node.classList.remove("show")
      console.log("click cancel")
    }
  }
}

document.querySelector(".open-dialog").onclick = function () {
  new Dialog(document.querySelector(".wrapper"))
}