const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const $pre = $(".arrows .arrow.arrow-pre")
const $next = $(".arrows .arrow.arrow-next")
const $$panels = $$(".panels a")
const $$indicators = $$(".indicators li")

let getIndex = () => [...$$indicators].indexOf($(".indicators .active"))
let preIndex = () => (getIndex() - 1 + $$indicators.length) % $$indicators.length
let nextIndex = () => (getIndex() + 1) % $$indicators.length

let setPanel = index => {
  $$panels.forEach($panel => $panel.classList.remove("active"))
  $$panels[index].classList.add("active")
}

let setIndicator = index => {
  $$indicators.forEach($indicator => $indicator.classList.remove("active"))
  $$indicators[index].classList.add("active")
}

$pre.onclick = function () {
  setPanel(preIndex())
  setIndicator(preIndex())
}
$next.onclick = function () {
  setPanel(nextIndex())
  setIndicator(nextIndex())
}

$$indicators.forEach($indicator => {
  $indicator.onclick = function () {
    setPanel([...$$indicators].indexOf(this))
    setIndicator([...$$indicators].indexOf(this))
  }
})