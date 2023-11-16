const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      newAliment: {
        name: "",
        done: true,
      },
      allAliments: [],
    };
  },
  methods: {
    addAliment: function () {
      this.allAliments.push({ ...this.newAliment });
    },
    changeDone: function () {
      if (this.newAliment.done === true) {
        this.newAliment.done = false;
      } else {
        this.newAliment.done = true;
      }
    },

    takeOff: function (num) {
      this.allAliments.splice(num, 1);
    },
  },
}).mount("#app");
