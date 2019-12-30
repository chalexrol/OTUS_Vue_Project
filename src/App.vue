<template>
 <div id="app">
 <p v-if="this.play"><Game @login='onLogin' :play='true' /></p>
 <p v-else><Hello @login='onLogin' :play='false' /></p>
 </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Game from './components/Game.vue'

export default {
  name: 'app',
  components: {
    Hello,
    Game
  },
data () {
  this.play=false
    return {
      play: false
    }
  },
  methods: {
    onLogin (data) {
      this.play = data.play
      console.log('child component said login', data,data.play)
      }
  },
}
</script>

<style>

</style>
