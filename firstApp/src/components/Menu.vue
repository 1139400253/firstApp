<template>
  <div class="row">
    <!--菜单-->
    <div class="col-md-8">
      <table class="table">
        <thead class="thead-dark">
        <tr>
          <th>尺寸</th>
          <th>价格</th>
          <th>加入</th>
        </tr>
        </thead>
        <tbody v-for="(item,index) in getMenuItems" >
        <tr>
          <td><strong>{{item.name}}</strong></td>
        </tr>
        <tr v-for="option in item.options" >
          <td>{{option.size}}</td>
          <td>{{option.price}}</td>
          <td>
            <button
              @click="addToBasket(item,option)"
              class="btn btn-sm btn-outline-success">+</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--购物车-->
    <div class="col-md-4">
      <div v-if="basekets.length > 0">
        <table class="table">
          <thead class="thead-defaul">
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
          </thead>
          <tbody v-for="item in basekets" :key="item.name">
          <tr>
            <td>
              <button class="btn btn-sm" @click="decreaseQuantity(item)">-</button>
              <span>{{item.quantity}}</span>
              <button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
            </td>
            <td>
              {{item.name}}{{item.size}}
            </td>
            <td>
              {{item.price * item.quantity}}
            </td>
          </tr>
          </tbody>
        </table>
        <p>总价：{{total + 'RMB'}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>
        {{baseketText}}
      </div>
    </div>
  </div>

</template>

<script>
  export default {
       data() {
         return {
           basekets: [],
           baseketText: '购物车没有任何商品 '
         }
       },
    computed:{
         getMenuItems() {
           //在vuex中获取数据
           console.log(11,this.$store.state.menuItems)
           // return this.$store.state.menuItems
           //通过getters获取数据
           return this.$store.getters.getMenuItems
         },
         total() {
           let totalMonery = 0;
           for(let index in this. basekets){
             let item = this.basekets[index];
             totalMonery += item.price * item.quantity;
           }
           return totalMonery
         }
    },
    created() {
      this.fetchData()
    },
    methods: {
         fetchData(){
           let item = localStorage.getItem('menuItem');
           let info = JSON.parse(item);
           this.$store.commit("setMenuItems",info);
           // console.log()

           // fetch('./menu.json').then(res => {
           //   return res.json()
           // })
           //   .then(data => {
           //     this.getMenuItems = data;
           //   })

           // this.http.get('menu.json')
           //   .then(res => this.getMenuItems = res.data);

         },
      addToBasket(item, option) {
        let basket = {
          name:item.name,
          size:option.size,
          price:option.price,
          quantity: 1
        };
        if(this.basekets.length>0){
          let result = this.basekets.filter((basket) =>{
            return (basket.name === item.name && basket.size === option.size && basket.price === option.price)
          })
          if(result != null && result.length>0 ){
            result[0].quantity++
          } else {
            this.basekets.push(basket)
          }
        }else {
          this.basekets.push(basket)
        }

      },
      decreaseQuantity(item) {
          item.quantity--;
          if(item.quantity <=0 ){
            this.removeArr(item)
          }
      },
      increaseQuantity(item) {
        item.quantity++
      },
      removeArr(item) {
        this.basekets.splice(this.basekets.indexOf(item),1)
      }
    }
  }
</script>

<style scoped>

</style>
