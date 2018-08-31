<template>
  <div class="row mt-3">
    <div class="col-md-4 col-lg-4">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="username">邮箱</label>
              <input type="text" class="form-control" v-model="username"/>
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password"/>
            </div>
            <div class="form-group">
              <label for="confirmPassword">确认密码</label>
              <input type="password" class="form-control" v-model="confirmPassword"/>
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
          </form>
        </div>
      </div>
    </div>
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
        const formData = {
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword
        };
        this.$axios.post('/api/user/addUser', formData).then( res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
