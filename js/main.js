



Vue.component('todo-item', {
  props: ['item'],
  template: `<li :class="'text-'+item['color']">{{ item['text'] }}</li>`
})


Vue.component('ball', {
  props: ['ball'],
  template: `<figure :class="'circle '+item['color']"></figure>`
})

var app = new Vue({
  el: '#app',
  data: {
    seen: true,
    firstName: '',
    LastName: '',
    todos: [
              {
                text: 'Ledspt',
                color: 'primary'
              },
              {
                text: 'Lea sdf sdf vaScript',
                color: 'warning'
              },
              {
                text: 'Leafsdfds dsf Script',
                color: 'danger'
              }
            ]
  }
})



app.todos.push({text:'new text',color:'dark'});
