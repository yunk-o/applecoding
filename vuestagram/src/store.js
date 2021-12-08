import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state () {
    return {
      name : 'kim',
      age : 20,
      likes : 36,
      clickLike :[0,0,0],
      more : {},
      // 눌렀니 : 
    }
  },
  mutations :{
    setMore(state, data){
      state.more = data
    },
    이름변경(state){
      state.name = 'park'
    },
    한살더하기(state){
      state.age++
    },
    좋아요(state){
      if(state.clickLike == 0){
        state.likes++;
        state.clickLike = true
      } else {
        state.likes--
        state.clickLike = false
      }
    }
  },
  actions : {
    getData(context){
      axios.get(`https://codingapple1.github.io/vue/more0.json`)
      .then((a)=>{
        console.log(a.data);
        context.commit('setMore', a.data)
      })
    }
  },


})

export default store