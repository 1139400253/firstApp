const state = {
  menuItems:[],
}
const getters = {
 getMenuItems: state => state.menuItems
}
const mutations = {
 setMenuItems (state,data)  {
    state.menuItems = data;
  }
}
const actions = {

}
export default {
  state,
  getters,
  mutations,
  actions
}
