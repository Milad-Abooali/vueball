



Vue.component('ball', {
  props:['ball'],
  template: `<figure :class="'circle '+ball.color" v-bind:style="{top: ball.top, left: ball.left}"></figure>`
})


var app = new Vue({
  el: '#app',
  data: {
    test:'ok',
    balls: [
        {
              seen:true,
              color:'red',
              top:10,
              left:10
        },
        {
              seen:true,
              color:'blue',
              top:30,
              left:30
        }
      ]
  }
})
