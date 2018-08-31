<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝！</h1>
        <h2>这里有你们喜欢吃的食物</h2>
        <button @click="goToMenu" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
       goToMenu() {
         // 跳转到上一次浏览的页面
         // this.$router.go(-1)

         // 指定跳转的地址
         // this.$router.replace('/menu')

         // 指定跳转路由的名字下
         // this.$router.replace({name: 'Menu'})

         // 通过push进行跳转
         this.$router.push('/menu')
       }
    }
  }
</script>

<style scoped>
#home{
  background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535519864060&di=99d3415619f87356c22dc40b65fcd40a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Flvpics%2Fh%3D800%2Fsign%3D0ddbd040b9a1cd111ab67f208912c8b0%2F79f0f736afc37931ff52b259e8c4b74543a91183.jpg");
  height: 85vh;
  padding: 20%;
}
  h1,h2{
    margin: 5%;
  }
  .background{
    background: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: auto;
    padding: 20px 0;
  }
  .btn{
    margin-bottom: 6%;
  }
</style>
