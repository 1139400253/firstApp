<template>
  <form action="">
    <h3 class="text-muted my-5">添加新的pizza</h3>
    <div class="from-group row">
      <label for="" class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.name">
      </div>
    </div>
    <div class="from-group row">
      <label for="" class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea name="" id="" class="form-control" rows="5" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="from-group row">
      <label for="" class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size1">
      </div>
    </div>
    <div class="from-group row">
      <label for="" class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price1">
      </div>
    </div>
    <p><strong>选项2</strong></p>
    <div class="from-group row">
      <label for="" class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size2">
      </div>
    </div>
    <div class="from-group row">
      <label for="" class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price2">
      </div>
    </div>
    <div class="from-group">
      <button @click="addMenuItem()" class="btn btn-success btn-block">添加</button>
    </div>
  </form>
</template>

<script>
    export default {
        name: "NewPizza",
      data() {
          return {
            newPizza: {},
            contrastdataArr: [],
          }
      },
      created() {

      },
      methods: {
        addMenuItem() {

           let data = {
             name:this.newPizza.name,
             description:this.newPizza.description,
             options:[
               {
                 size:this.newPizza.size1,
                 price:this.newPizza.price1
               },
               {
                 size:this.newPizza.size2,
                 price:this.newPizza.price2
               }
             ]
           };
           let list = JSON.parse(localStorage.getItem('menuItem') || '[]');
           list.push(data);
           localStorage.setItem('menuItem',JSON.stringify(list));
          // console.log(this.newPizza);

           // fetch('menu.json',{
           //   method: 'post',
           //   headers: {
           //     "Content-type":'application/json'
           //   },
           //   body:JSON.stringify(data)
           // }).then( res => res.json())
           //   .then( data => this.$router.push({name:'Menu'}))
           //   .catch(err => console.log(err))
        }
      }
    }
</script>

<style scoped>

</style>
