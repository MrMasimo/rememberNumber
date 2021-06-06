<template>
  <div class="game-interface">
    <button v-if="!getStatusGame" class="game-startButton" @click="onStartGame">Старт</button>
    <div v-if="getIsShowNumber" class="number-container">
      <span class="number">{{getNumber}}</span>
    </div>
    <div v-if="getStatusGame && !getIsShowNumber" class="answer-container">
      <label for="answer-number"> Введите число</label>
      <input id="answer-number" name="answer-number" type="number">
      <button class="answer-button" @click="onCheckNumber">Ответить</button>
    </div>
    <div v-if="getIsShowResult" class="result">
      <span class="result-good" v-if="getResult">Ответ верный!</span>
      <span class="result-bad" v-else>Ответ не верный!</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'GameInterface',
  computed:{
      ...mapGetters("game" , ["getStatusGame", "getNumber", "getIsShowNumber", "getIsShowResult" , "getResult"]),
  },
  methods:{
    ...mapActions("game", ["startGame", "checkNumber"]),
    onStartGame(){
      this.startGame();
    },
    onCheckNumber(){
      let inputAnswer = document.getElementById("answer-number");
      this.checkNumber(inputAnswer.value);
    }
  }
}
</script>

<style scoped>
  .game-interface,
  .answer-container{
    margin-top: 20px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .number-container{
    border: 2px solid #000;
    border-radius: 10px;
    margin: 10px 0;
    background: #fff;
    color: #277dc9;
  }
  .number{
    font-size: 80px;
    padding: 30px;
  }

  .game-startButton,
  .answer-button
  { 
    font-family: 'Jura', sans-serif;
    margin: 20px;
    padding: 15px 35px;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    border: 2px solid #000;
    background: #f89623;
    color: #fff;
  }

   .game-startButton:hover,
   .answer-button:hover{
    color: #fff;
    background: #d17b1a;
  }

  .game-startButton:active,
  .answer-button:active {
    transform: scale(0.97);
  }

  input{
    font-family: 'Jura', sans-serif;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 0 0 5px #d17b1a;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none; 
  }

  input[type='number'],
  input[type="number"]:hover,
  input[type="number"]:focus {
      appearance: none;
      -moz-appearance: textfield;
  }

  .result-good,
  .result-bad{
    font-weight: bold;
    font-size: 20px;
  }

  .result-good{
    color:rgb(100, 235, 100);
  }
  .result-bad{
    color:rgb(235, 100, 100);
  }

</style>