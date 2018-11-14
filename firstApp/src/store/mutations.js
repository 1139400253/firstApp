//改变属性的状态
export const setMenuItems = (state,data) => {
  state.menuItems = data;
}
//更改用户的状态信息
export const userStatus = (state,user) =>{
  if(user){
    state.currentUser = user;
    state.isLogin = true
  }else {
    state.currentUser = null;
    state.isLogin = false
  }
}
