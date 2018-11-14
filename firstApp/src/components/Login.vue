<template>
  <div class="row mt-3">
    <div class="col-md-4"></div>
    <div class="col-md-4 col-lg-4">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group ">
              <label for="username">用户名</label>
              <input type="text" class="form-control" v-model="username"/>
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password"/>
            </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
  import  axios from 'axios';
  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
    //组件内的守卫
    beforeRouteEnter: (to, from, next) =>{
      next(vm => vm.$store.dispatch("setUser",null))
    },
    methods: {
      onSubmit() {
        let infoStr = localStorage.getItem('isLogin');
        let info = JSON.parse(infoStr);
        // console.log(info);
        let users = [];
        for (let key in info){
          let user = info[key];
          users.push(user)
        };
        // console.log(users)
        let resulet = users.filter( (user) => {
          return user.username === this.username && user.password === this.password
        });
        console.log(resulet)
        if( resulet !=null && resulet.length>0){
          this.$store.dispatch('setUser',resulet[0].username)
          this.$router.push({name:'Home'})
        } else {
          alert('账号或密码不正确');
          this.$store.dispatch('setUser',null)
        }

        // axios.get('/users.json')
        //   .then( res => {
        //     let data = res.data;
        //     let users = [];
        //     for(let key in data){
        //       let user = data[key];
        //       users.push(user)
        //     };
        //     // 实现过滤
        //    let resulet =  users.filter((user) => {
        //       return user.username === this.username && user.password === this.password
        //     })
        //
        //     // 判断result 的长度是否大于0
        //     if(resulet != null && resulet.length>0){
        //       this.$router.push()
        //     }
        //
        //   })
      }
    }

  }
</script>

<style scoped>
  label{
    float: left;
  }
</style>

