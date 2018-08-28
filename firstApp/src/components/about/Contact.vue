<template>
   <div class="card text-dark bg-link mb-3">
     <div class="card-header">联系我们</div>
     <div class="car-body">
       <h4 class="card-title">联系我们</h4>
       <p class="card-text">
         1139400253@qq.com
       </p>
       <router-link :to="{name: 'PersonName'}">
         <div class="btn btn-success btn-sm">
           姓名
         </div>
       </router-link>
       <router-link :to="{name: 'Phone'}">
         <div class="btn btn-info btn-sm">电话</div>
       </router-link>
       <router-view></router-view>

     </div>
   </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
