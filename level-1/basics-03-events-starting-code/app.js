const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    setNumber(event) {
      this.counter = event.target.value;
    }, 
    add(num) {
      this.counter = Number(this.counter) + num;
    },
    remove() {
      this.counter = this.counter - 1;
    },
    reset() {
      this.counter = 0;
    },
  },
});

app.mount('#events');
 