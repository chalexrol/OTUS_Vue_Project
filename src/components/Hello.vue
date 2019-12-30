<template>
  <div id="app">
    <div class="Hello">
      <img class="Logo" :src="logo" alt="Vue logo" />
      <h1 class="Hello-Header">Привет!</h1>
       <p class="Hello-Hello">
      Добро пожаловать на {{day}} тренировочный день,<br />
      Ваш последний результат - решено {{done}} из 25<br />
      Общая точность {{point}}%
      </p>
        <div class="Hello-Container">
           <div class="Hello-Content">     
           <h2 class="Hello-Setup"  > Настройки</h2>
               <div class="slider-wrapper">
                 <input type="range" min="1" max="15" step="1" v-model="value">
                 <br />
                 <pre>Длительность: <span v-text="total"></span> мин.</pre>
                 <input type="range" min="1" max="10" step="1" v-model="value1"> 
                 <br />
                 <pre>Сложность: <span v-text="total1"></span></pre>
                </div>
                <br />
              <checkbox name="check[]" value="check_sum" v-model="check_sum"> Суммирование
              </checkbox>
              <br />
              <checkbox name="check[]" value="check_diff" v-model="check_diff"> Разность
              </checkbox>
              <br />
              <checkbox name="check[]" value="check_mult" v-model="check_mult"> Умножение
              </checkbox>
              <br />
              <checkbox name="check[]" value="check_div" v-model="check_div"> Деление
              </checkbox>
              <br />
              <checkbox name="check[]" value="check_exp" v-model="check_exp"> Возведение в степень
              </checkbox>
           </div>
        <div class="Hello-Add" @click="login()">Play</div>
      </div>
    </div>
  </div>
</template>

<script>

import Logo from "../assets/logo.png";

export default {
  props: ['play'],
  name: "Hello",
  components: {
 
  },
  data() {
      return {
      day: 1,
      done: 0,
      point:0,
      value: 15,
      value1: 5,
      check_sum: true,
      check_diff: true,
      check_mult: true,
      check_div: true,
      check_exp: true,
      logo: Logo
    };
  },

  computed: {
      total: function () {
      return this.value * 1
    },
    total1: function () {
      return this.value1 * 1
    }
  },

   

  methods: {
  
  login () {
    this.play=true
    console.log('login', this.play)
    this.$emit('login', {
      play: this.play
          })
  }
   
  },
}
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

.slider-wrapper input {
  width: 400px;
  height: 1px;
  margin: 0;
  display: ruby;
  }


.Logo {
  position: center;
  top: 50px;
  width: 80px;
  position: relative;
  left: 40%;
  margin: 0 0 5px 5px; /* Отступы вокруг фотографии */
   }

.wrapper {
 color: black;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  margin: 30px 50px;
}

.Hello {
  text-align: left;
  border: 1px solid white;
  width: 30vw;
  height: auto;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
  background: #fdfdfd;
  padding-bottom: 60px;
  margin: 40px auto;
}

.Hello-Header {
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  margin: 30px;
}

.Hello-Setup {
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  font-weight: 400;


}

.Hello-Hello {
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  font-weight: 200;
  margin: 30px;
}

.Hello-Add {
  color: white;
  font-size: 2em;
  width: 10em;
  height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  background: #73ff73;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #47a947;
  margin: 20px auto 0;
}

.Hello-Add:hover {
  box-shadow: none;
  margin-top: 21px;
  margin-left: calc(auto + 1px);
}

.Hello-Container {
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