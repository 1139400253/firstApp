const state = {
  currentUser:null,
  isLogin: false
}
const getters = {
  currentUser: state => state.currentUser,
  isLogin: state => state.isLogin
}
const mutations = {
  userStatus  (state,user){
    if(user){
      state.currentUser = user;
      state.isLogin = true
    }else {
      state.currentUser = null;
      state.isLogin = false
    }
  }
}
const actions = {
  setUser({commit},user){
    commit("userStatus",user)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
