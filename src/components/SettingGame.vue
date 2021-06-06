<template>
  <div class="wrapper">
    <h3>Настройки игры</h3>
    <div class="settings-container">
      <div class="setting">
        <label class="headers" for="rang">Разряд числа</label><br>
        <select @change="onChangeDigitNumber" id="rang" name="rang" >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div class="setting">
        <label class="headers" for="time">Время показа</label><br>
        <select @change="onChangeTimeShow" id="time" name="time">
          <option value="0.2">0.2 сек.</option>
          <option value="0.4">0.4 сек.</option>
          <option value="0.6">0.6 сек.</option>
          <option value="1.0">1.0 сек.</option>
          <option value="1.2">1.2 сек.</option>
          <option value="1.4">1.4 сек.</option>
          <option value="1.6">1.6 сек.</option>
          <option value="1.8">1.8 сек.</option>
          <option value="2.0">2.0 сек.</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SettingGame',
  methods:{
    ...mapActions('game', ["changeDigit", "changeTimeShow"]),
    onChangeDigitNumber(event){
      this.changeDigit(event.target.value);
    },

    onChangeTimeShow(event){
      this.changeTimeShow(event.target.value);
    }
  }
}
</script>

<style scoped>
  .wrapper{
    margin: 0 auto;
    max-width: 50% ;
    background: #39f;
    color: #fff;
    border: 2px solid #000;
  }

  @media only screen and (max-width: 690px){
    .wrapper{
      max-width: 75%;
    }
  }
  
  h3{
    margin: 10px auto;
  }

  .settings-container{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .setting{
    margin: 10px 0px;
  }

  .headers{
    margin-bottom: 10px;
  }

  #time,
  #rang{
    font-family: 'Jura', sans-serif;
    width: 100%;
    margin-top: 10px;
    padding: 10px 10px;
    border-radius: 5px;
  }

</style>
