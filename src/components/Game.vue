<template>
     <div class="Game">
        <div class="Game-Cancel" @click="login">
             <router-link  to="/">X ОТМЕНА</router-link>
        </div> 
        <div class="Game-Timer"  id="timer">
             <span id="minutes">{{ minutes }}</span>
             <span id="middle">:</span>
             <span id="seconds">{{ seconds }}</span>
         </div>
         <br /> 
         <div class="Game-Container">
              <div class="Game-Content">     
                 <Keys />
              </div>
         </div>
     </div>
 </template>

<script>
import Keys from './Keys.vue'

export default {
  name: 'Game',
  components: {
  Keys  
  },
  data() {
    return {
      timer: null,
      totalTime: (0 * 60)
    }
  },

  mounted () {
         this.startTimer()
    },

  computed: {
      total: function () {
      return this.value * 1
    },
    total1: function () {
      return this.value1 * 1
    },
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
	},

  methods: {
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
    },
    countdown: function() {
      if(this.totalTime < 900){
        this.totalTime++;
      } else{
        alert("Время вышло")
        this.totalTime = 0;
             }
    } , 

    login () {
    this.stopTimer();
    }
  }
};


</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  background: linear-gradient(#dcaeff, #ff6a3d);
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Game {
  text-align: left;
  border: 1px solid white;
  width: 30vw;
  height: auto;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
  background: #fdfdfd;
  padding-bottom: 60px;
  margin: 40px auto;
}

.Game-Header {
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  margin: 30px;
}

.Game-Cancel {
  color: white;
  font-size: 2em;
  width: 6em;
  height: 1em;
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  background: #73ff73;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #47a947;
  margin: 20px auto 0;
  position: relative;
  left: 3%;
 
}

.Game-Timer {
  color: rgb(79, 24, 231);
  font-size: 2em;
  width: 4em;
  height: 1em;
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  background: #73ff73;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #47a947;
  margin: 20px auto 0;
  position: relative;
  left: 30%;
 
}

.Game-Container {
  width: 80%;
  margin: 0 auto;
}

input {
  width: 60%;
  padding: 10px;
  font-size: 1em;
  margin: 10px auto;
  box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.3);
}
</style>