



Vue.component('ball', {
  props: ['ball'],
  template: `<figure :class="'circle '+ball.color"></figure>`
})

var app = new Vue({
  el: '#app',
  data: {
    seen: true,
    creatBall: {text: 'Ledspt',color: 'blue'}
  }
})
