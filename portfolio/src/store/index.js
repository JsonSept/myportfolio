import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    testimonials:null
  },
  getters: {
   
  },
  mutations: {
    setTestimonials(state,testimonials) {
      state.testimonials = testimonials;
    }
  },
  actions: {
    fetchData(context) {
      // axios.get("https://jsonsept.github.io/vueportfolio/")
      axios.get("src/data/index.json")
        .then(res => {
          let payload = res.data
          console.log(payload);
          context.commit('setTestimonials',payload.testimonials)
        })
  },
},
  modules: {
  }
})
