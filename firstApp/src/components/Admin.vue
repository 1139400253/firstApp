<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!--new pizza-->
      <new-pizza></new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!--品种展示-->
      <h3 class="text-muted my-5">
        菜单
      </h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in getMenuItems"  >
        <tr>
          <td>{{item.name}}</td>
          <td>
            <button @click="deleteData(item,index)" class="btn btn-outline-dark btn-sm">&times;</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import NewPizza from './NewPizza.vue';
  export default {
    data(){
      return {
        // getMenuItems: [],
      }
    },
    methods: {
      deleteData(item,index){
        this.$store.getters.getMenuItems.splice(index,1);
        let list = JSON.parse(localStorage.getItem('menuItem') || '[]');
        list.splice(index,1);
        // this.$store.commit('removeMenuItems',item)
        localStorage.setItem('menuItem',JSON.stringify(list));
        this.$store.commit('setMenuItems',list)

        // fetch('./menu.json')
      }
    },
    components:{
      'new-pizza':NewPizza
    },
    computed: {
      getMenuItems: {

        // return this.$store.state.menuItems
        get() {
          return this.$store.getters.getMenuItems
        },
        set() {

        }

      }
    },
    created() {
      let list = JSON.parse(localStorage.getItem('menuItem') || '[]');
      this.$store.commit('setMenuItems',list)
    }
    // beforeRouteEnter: (to, from, next) => {
    //   next(vm=>{
    //     alert(vm.name)
    //   })
    // },
    // beforeRouteLeave: (to, from, next) => {
    //   if(confirm('你确定离开吗？') == true) {
    //     next()
    //   }else {
    //     next(false)
    //   }
    // }
  }
</script>

<style scoped>

</style>
