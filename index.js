var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    number: 18,
    guess: null,
    guessReply: null
  },
  methods: {
    guessFeedback: function() {
      console.log("this is the guessFeedback method");
      if (parseInt(this.guess) < this.number) {
        console.log("you are too low");
      } else if (parseInt(this.guess) > this.number) {
        console.log("you are too high");
      } else if (parseInt(this.guess) === this.number) {
        console.log("you are right");
      }
    }
  }
});
