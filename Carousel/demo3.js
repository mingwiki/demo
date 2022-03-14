const css = ($node, styles) => Object.assign($node.style, styles)

const Animation = {
  slide($from, $to, direction) {
    $from.style = ''
    $to.style = ''
    css($from, {
      transform: `translateX(0)`,
    })

    css($to, {
      transform: `translateX(${direction === 'left' ? '-' : ''}100%)`,
    })

    setTimeout(() => {
      css($from, {
        transform: `translateX(${direction === 'right' ? '-' : ''}100%)`,
        transition: `all 1s`
      })
      css($to, {
        transform: `translateX(0)`,
        transition: `all 1s`
      })
    })

  },
  fade($from, $to) {
    $from.style = ''
    $to.style = ''

    css($from, {
      opacity: 1,
      zIndex: 10
    })

    css($to, {
      opacity: 0,
      zIndex: 9
    })

    setTimeout(() => {
      css($from, {
        opacity: 0,
        zIndex: 10,
        transition: `all .4s`
      })
      css($to, {
        opacity: 1,
        zIndex: 9,
        transition: `all .4s`
      })
    })
    setTimeout(() => {
      css($from, {
        zIndex: 9
      })
      css($to, {
        zIndex: 10
      })
    }, 400)
  },
  zoom($from, $to) {
    $from.style = ''
    $to.style = ''

    css($from, {
      transform: `scale(1)`,
      opacity: 1,
      zIndex: 10
    })

    css($to, {
      transform: `scale(10)`,
      opacity: 0,
      zIndex: 9
    })

    setTimeout(() => {
      css($from, {
        transform: `scale(10)`,
        opacity: 0,
        zIndex: 10,
        transition: `all .4s`
      })
      css($to, {
        opacity: 1,
        transform: `scale(1)`,
        zIndex: 9,
        transition: `all .4s`
      })
    })
    setTimeout(() => {
      css($from, {
        zIndex: 9
      })
      css($to, {
        zIndex: 10
      })
    }, 400)
  }
}

class Carousel {
  constructor($node, animate) {
    this.$node = $node
    this.animate = animate
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
    console.log([...this.$$indicators].indexOf(this.$node.querySelector(".indicators .active")))
    return [...this.$$indicators].indexOf(this.$node.querySelector(".indicators .active"))
  }
  preIndex() {
    return (this.getIndex() - 1 + this.$$indicators.length) % this.$$indicators.length
  }
  nextIndex() {
    return (this.getIndex() + 1) % this.$$indicators.length
  }
  setPanel(from, to, direction) {
    this.animate(this.$$panels[from], this.$$panels[to], direction)
  }
  setIndicator(index) {
    this.$$indicators.forEach($indicator => $indicator.classList.remove("active"))
    this.$$indicators[index].classList.add("active")
  }
  setAnimate(animate) {
    this.animate = animate
  }
  bind() {
    let self = this
    this.$pre.onclick = function () {
      self.setPanel(self.getIndex(), self.preIndex(), "right")
      self.setIndicator(self.preIndex())
    }
    this.$next.onclick = function () {
      self.setPanel(self.getIndex(), self.nextIndex(), "left")
      self.setIndicator(self.nextIndex())
    }

    this.$$indicators.forEach($indicator => {
      $indicator.onclick = function () {
        self.setPanel(self.getIndex(), [...self.$$indicators].indexOf(this), self.getIndex() > [...self.$$indicators].indexOf(this) ? "right" : "left")
        self.setIndicator([...self.$$indicators].indexOf(this))
      }
    })
  }
}

let $carousel = document.querySelector('.carousel')
let carousel = new Carousel($carousel, Animation.slide)


document.querySelector('.animation-select').onchange = function () {
  carousel.setAnimate(Animation[this.value])
}