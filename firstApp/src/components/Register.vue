<template>
  <div class="row mt-3">
    <div class="col-md-4"></div>
    <div class="col-md-4 col-lg-4">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group text-left">
              <label for="username">邮箱</label>
              <input type="email" class="form-control" v-model="username"/>
            </div>
            <div class="form-group text-left">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password"/>
            </div>
            <div class="form-group text-left">
              <label for="confirmPassword">确认密码</label>
              <input type="password" class="form-control" v-model="confirmPassword"/>
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
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
        confirmPassword: ''
      }
    },
    methods: {
      onSubmit() {
        if(this.password === this.confirmPassword){
          let formData = {
            username: this.username.trim(),
            password: this.password.trim(),
            confirmPassword: this.confirmPassword.trim()
          };
          let uses = {
            name: this.username,
            data: formData
          };
          localStorage.setItem("isLogin",JSON.stringify(uses));

          this.$router.push({name:'Login'});
          // axios.post('/users.json', formData)
          //   .then( res => this.$router.push({name:'Login'}))
        }else {
          alert('两次密码不一致')
        }


      }
    }
  }
</script>

<style scoped>

</style>
