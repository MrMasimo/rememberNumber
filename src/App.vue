<template>
  <div id="app">
    <Background /> 
    <h1>Запомни число</h1>
    <SettingGame />
    <GameInterface />
  </div>
</template>

<script>
import SettingGame from './components/SettingGame.vue'
import GameInterface from './components/GameInterface.vue'
import Background from './components/Background.vue'

export default {
  name: 'App',
  components: {
    SettingGame,
    GameInterface,
    Background,
  }
}
</script>

<style>
#app {
  font-family: 'Jura', sans-serif;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
