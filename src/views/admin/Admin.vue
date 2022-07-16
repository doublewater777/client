<template>
  <div>
    <Drawer title="用户管理菜单" placement="right" :closable="false" v-model="value2">
    <p @click="goUrl('article')">文章编写</p>
    <p @click="goUrl('type')">类型管理</p>
    <p @click="goUrl('articles')">文章管理</p>
    <p @click="goUrl('users')">用户管理</p>
    </Drawer>
    <Button class="admin-btn" @click="value2 = true" type="primary">
        导航菜单
    </Button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'App',
    components:{},
    data(){
        return{
            value2:true
        }
    },
    methods:{
        goUrl(url){
            this.$router.push({path:'/admin/'+url})
        }
    }
}
</script>

<style>
.admin-btn{
    position: fixed;
    z-index:100;
    left:200px;
    top:6vh
}
</style>