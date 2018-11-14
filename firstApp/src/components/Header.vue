<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="py-2" href="#">
        <i class="fa fa-life-buoy fa-2x"></i>
      </a>
      <a href="/" class="navbar-brand">点餐系统</a>
      <ul class="navbar-nav">
        <li>
          <!--<router-link to="/" tag="div" class="nav-link">主页</router-link> tag属性改变标签 -->
          <router-link :to="{name: 'Home'}" class="nav-link">主页</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Menu'}" class="nav-link">菜单</router-link>
        </li>
        <li>
          <router-link to="/admin" class="nav-link">管理</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">关于我们</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li><router-link to="/login" v-show="!isLogin" class="nav-link" >登录</router-link></li>
        <li class="nav-link">
          {{currentUser}}
        </li>
        <li><router-link to="/login" v-show="isLogin" class="nav-link" >[退出]</router-link></li>
        <li><router-link to="/register"  class="nav-link" v-show="!isLogin"> 注册</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
      computed: {
        currentUser() {
          console.log(this.$store.getters.currentUser)
          return this.$store.getters.currentUser
        },
        isLogin() {
          return this.$store.getters.isLogin
        }
      }
  }
</script>

<style scoped>

</style>
