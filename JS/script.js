const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      newAliment: {
        name: "",
      },
      allAliments: [],
    };
  },
  methods: {
    addAliment: function () {
      this.allAliments.push({ ...this.newAliment });
    },
    takeOff: function (num) {
      this.allAliments.splice(num, 1);
    },
  },
}).mount("#app");
