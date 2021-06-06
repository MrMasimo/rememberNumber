const gameStore = {
  namespaced: true,
  state:{
    runningGame: false,
    isShowNumber: false,
    number: null,
    digit: 2,
    timeShow: 200,
    result: null,
    isShowResult: false,
  },
  getters:{
    getStatusGame: ({runningGame}) => runningGame, 
    getNumber: ({number}) => number,
    getDigit: ({digit}) => digit,
    getTimeShow: ({timeShow}) => timeShow,
    getIsShowNumber: ({isShowNumber}) => isShowNumber,
    getScore:({score}) => score,
    getResult:({result}) => result,
    getIsShowResult:({isShowResult}) => isShowResult,
  },
  mutations:{
    saveNumber(state, value){
      state.number = value;
    },
    saveStatusGame(state, bool){
      state.runningGame = bool;
    },
    isShowNumber(state, bool){
      state.isShowNumber = bool;
    },
    saveDigit(state,value){
      state.digit = value;
    },
    saveTimeShow(state, value){
      state.timeShow =  value;
    },
    saveResult(state, bool){
      state.result = bool;
    },
    isShowResult(state, bool){
      state.isShowResult = bool;
    }
  },
  actions:{ 
    startGame( { getters, dispatch}){
      const {getTimeShow} = getters;
      dispatch('createRandomNumber');
      dispatch('changeStatusGame', true);
      dispatch('isShowNumber', true);
      setTimeout(()=>{ dispatch('isShowNumber', false);}, getTimeShow);
    },

    createRandomNumber({ getters , commit}){
      const {getDigit} = getters;
      //Math.floor(Math.random() * (max + 1 - min)) + min;
      let randValue = Math.floor(Math.random() * (Math.pow(10, getDigit) - Math.pow(10, getDigit - 1 )) + Math.pow(10, getDigit - 1 ));
      commit('saveNumber', randValue);
    },

    checkNumber({ getters,dispatch}, value){
      const {getNumber} = getters;
      if(value==getNumber){
        dispatch('changeResult', true);
      } 
      else{
        dispatch('changeResult', false);
      }
      dispatch('changeIsShowResult', true);
      setTimeout(() => { 
        dispatch('changeIsShowResult', false); 
      }, 1000);
      dispatch('changeStatusGame', false);
    },

    changeStatusGame({ commit } , value){
      commit('saveStatusGame' , value);
    },

    isShowNumber({ commit } , value){
      commit('isShowNumber' , value);
    },

    changeDigit({commit},value){
      commit('saveDigit', value);
    },

    changeTimeShow({commit}, value){
      commit('saveTimeShow', 1000*value);
    },

    changeResult({commit}, value){
      commit('saveResult', value);
    },

    changeIsShowResult({commit}, value){
      commit('isShowResult', value)
    }
  }
}

export default gameStore;