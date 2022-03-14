class Carousel {
  constructor($node) {
    this.$node = $node
    this.init()
    this.bind()
  }
  init() {
    this.$pre = this.$node.querySelector(".arrows .arrow.arrow-pre")
    this.$next = this.$node.querySelector(".arrows .arrow.arrow-next")
    this.$$panels = this.$node.querySelectorAll(".panels a")
    this.$$indicators = this.$node.querySelectorAll(".indicators li")
  }
  getIndex() {
    return [...this.$$indicators].indexOf(this.$node.querySelector(".indicators .active"))
  }
  preIndex() {
    return (this.getIndex() - 1 + this.$$indicators.length) % this.$$indicators.length
  }
  nextIndex() {
    return (this.getIndex() + 1) % this.$$indicators.length
  }
  setPanel(index) {
    this.$$panels.forEach($panel => $panel.classList.remove("active"))
    this.$$panels[index].classList.add("active")
  }
  setIndicator(index) {
    this.$$indicators.forEach($indicator => $indicator.classList.remove("active"))
    this.$$indicators[index].classList.add("active")
  }
  bind() {
    let self = this
    this.$pre.onclick = function () {
      self.setPanel(self.preIndex())
      self.setIndicator(self.preIndex())
    }
    this.$next.onclick = function () {
      self.setPanel(self.nextIndex())
      self.setIndicator(self.nextIndex())
    }

    this.$$indicators.forEach($indicator => {
      $indicator.onclick = function () {
        self.setPanel([...self.$$indicators].indexOf(this))
        self.setIndicator([...self.$$indicators].indexOf(this))
      }
    })
  }
}

document.querySelectorAll(".carousel").forEach($node=> new Carousel($node))
