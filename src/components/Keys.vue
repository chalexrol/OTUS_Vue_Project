 <template>
  <div class='keys' onselectstart='return false'>
    <div class='display'>{{display}}</div>
    <div @click='append(1)' class='button'>1</div>
    <div @click='append(2)' class='button'>2</div>
    <div @click='append(3)' class='button'>3</div>
    <div @click='onLeft' class='button operator'><</div>
    <div @click='append(4)' class='button'>4</div>
    <div @click='append(5)' class='button'>5</div>
    <div @click='append(6)' class='button'>6</div>
    <div @click='onRight' class='button operator'>></div>
    <div @click='append(7)' class='button'>7</div>
    <div @click='append(8)' class='button'>8</div>
    <div @click='append(9)' class='button'>9</div>
    <div @click='onHelp' class='button operator'>?</div>

    <div @click='append(0)' class='button zero button-bottom'>0</div>
    <div @click='equal' class='button equal operator button-bottom'>=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previous: null,
      display: 0,
      operator: null,
      operatorClicked: false
    };
  },
  methods: {
    append(number) {
      if (this.operatorClicked === true) {
        this.display = '';
        this.operatorClicked = false;
      }
      this.display =
        this.display === 0
          ? (this.display = number)
          : '' + this.display + number;
    },

    onLeft() {

    },
    onRight() {

    },
    onHelp() {
alert("Помошь в стадии разработки")
    },
    equal() {

    }
  }
};
</script>

<style scoped>

.keys {
  margin: 20px auto;
  width: 80vw;
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(10vh, auto);
  border: 5px solid #111;
  box-shadow: -3px 3px 15px rgba(17,17,17,0.4);
  line-height: 10vh;
}

.display {
  grid-column: 1 / 5;
  background: #ddd;
  border: 1px solid #111;
  border-top: 0;
  font-size: 2.5rem;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 1rem;
}

.zero {
  grid-column: 4 / 2;
}

.equal {
  grid-column: 4 / 4;
}

.button {
  height: 50px;
  width: 50px;
  background: linear-gradient(15deg,hsl(0, 81%, 43%) 0%, hsl(0, 0%, 80%) 100%);
  border-radius: 50%;
  border: 3px solid red;
  cursor: pointer;
  display:block;
	float:left;
	line-height:1.2em;
	margin-top:0.2em;
  margin-left: 0.2em;    
	text-align:center;
  font-family:Verdana;
  font-size:1.2em;
  font-weight:bold;
  text-decoration:none;
}

.button:active {
  outline:none;
  border: 1px solid #000000BF; 
  box-shadow: inset 0px 0px 5px #00000080; 
  -moz-box-shadow: inset 0px 0px 5px #00000080;
  -webkit-box-shadow: inset 0px 0px 5px #00000080;
}

.button-bottom {
  border-bottom: 0;
}

.operator {
  background: hsl(153, 48%, 49%);
  background: linear-gradient(15deg,hsl(153, 48%, 39%) 0%, hsl(153, 48%, 49%) 100%);
}

.darker {
  background: hsl(0, 0%, 70%);
  background: linear-gradient(15deg, hsl(0, 0%, 60%) 0%, hsl(0, 0%, 70%) 100%);
}

@media only screen and (min-width: 768px) {
  .keys {
    width: 50vw;
    grid-auto-rows: minmax(10vh, auto);
    line-height: 7.5vh;
  }
}

@media only screen and (min-width: 1024px) {
  .keys {
    width: 40vw;
  }
}

@media only screen and (min-width: 1280px) {
  .keys {
    width: 40vw;
  }
}

@media only screen and (min-width: 1600px) {
  .keys {
    width: 25vw;
  }
}
</style>
