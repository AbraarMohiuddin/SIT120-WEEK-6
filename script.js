var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      name: 'Abraar',
      password: "Deakin",
    }
  });

var app2 = new Vue({
  el: '#app-2',
  data: {
    checkedNames: []
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    selected: 'None',
    options: [
      { text: 'Shiva', value: 'Shiva Pokhrel' },
      { text: 'Sergey', value: 'Sergey Polyavoski' },
      { text: 'Sunil', value: 'Sunil Aryal' },
      { text: 'Simon', value: 'Simon James' }
    ]
  }
});